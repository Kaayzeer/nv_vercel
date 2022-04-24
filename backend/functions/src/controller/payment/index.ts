import {Request, Response} from "express";
import Stripe from 'stripe';
import * as admin from "firebase-admin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2020-08-27"
});


/**
 * Creates a Stripe Checkout session for one time payment
 */
export const CreateCheckoutSession = async (req : Request, res: Response) => {
    // Get ID
    const {id} = req.body;

    // Get errand type
    try{
        const snap = await admin.firestore().collection("errands").doc(id).get();
        const snapData = snap.data();

        // Check payment status
        if(snapData!["payment_status"] == "paid")
            return res.status(400).send({message: "Payment already paid"});
        if(snapData!["payment_status"] == "pending")
            return res.status(400).send({message: "Payment is already pending"});

        const errand_type : string = snapData!["type"];

        // Create checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: "price_1KrIrqBvHU5UmnuthJ9SYMGo",
                    quantity: 1
                }
            ],
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${process.env.DOMAIN}/success.html`,
            cancel_url: `${process.env.DOMAIN}/error.html`
        })
    
        // Return session url
        if(session.url){
            // Update payment_id of errand
            await admin.firestore().collection("errands").doc(id).update({
                payment_id: session.payment_intent,
                payment_status: "pending"
            })
    
            return res.redirect(303, session.url);
        }
    }
    catch(err){
        return res.status(400).send({message: "Errand does not exist"})
    }

    return res.status(500).send({message: "Failed to create payment"})
}

/**
 * Webhook for picking up the Checkout session
 */
export const CheckoutSessionWebhook = async (req : Request, res : Response) => {
    const headers : any = req.headers;
    const payload : any = req.body;
    try {
        const event = stripe.webhooks.constructEvent(payload, headers["stripe-signature"], process.env.STRIPE_ENDPOINT_KEY!);
        const session = event.data.object;

        switch(event.type){
            // Handle successfull payment, and delayed payment
            case 'checkout.session.completed':
            case 'checkout.session.async_payment_succeeded': {
                // Succesfully paid
                // @ts-ignore - TS Schema not up to date?
                if (session.payment_status === 'paid') {
                    const snap = await admin.firestore().collection("errands")
                        // @ts-ignore - TS Schema not up to date?
                        .where("payment_id", "==", session.payment_intent)
                        .limit(1)
                        .get();
                    
                    // Update errand in firestore
                    if(snap.size > 0){
                        await admin.firestore().collection("errands")
                            .doc(snap.docs[0].id)
                            .update({
                                "payment_status": "paid"
                            })
                    }
                    else{
                        console.log("PAYMENT INTENT NOT IN DB")
                    }
                }
                break;
            }
            // Failed payment
            case 'checkout.session.async_payment_failed': {
                // TODO: Mejla användaren

                break;
              }
            default:
                break;
        }
    }
    catch(err : any){
        return res.status(400).send(`Webhook error: ${err.message}`);
    }

    return res.status(200).send();
}