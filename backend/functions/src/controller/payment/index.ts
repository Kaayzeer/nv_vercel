import {Request, Response} from "express";
import Stripe from 'stripe';
import * as admin from "firebase-admin";
import { addInvoicePayment } from "../../lib/fortnox";
import { changeStatusErrand } from "../../lib/salesforce";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2020-08-27"
});


/**
 * Creates a Stripe Checkout session for one time payment
 */
export const CreateCheckoutSession = async (req : Request, res: Response) => {
    // Get ID
    const {id} = req.query;

    // Get errand type
    try{
        const snap = await admin.firestore().collection("errands").doc(id as string).get();
        const snapData = snap.data();

        // Check payment status
        if(snapData!["payment_status"] == "paid")
            return res.status(400).send({message: "Payment already paid"});
        if(snapData!["payment_status"] == "pending")
            return res.status(400).send({message: "Payment is already pending"});

        // Create checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: "sek",
                        unit_amount: 500,
                        product_data: {
                          name: "name of the product",
                        },
                      },
                      quantity: 1,
                }
            ],
            customer_email: snapData!.email,
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${process.env.DOMAIN}/success/${id}`,
            cancel_url: `${process.env.DOMAIN}/error/${id}`
        })
    
        // Return session url
        if(session.url){
            // Change status of Salesforce
            await changeStatusErrand(snapData!.salesforce_id, snapData!.type, "pending");

            // Update payment_id of errand
            await admin.firestore().collection("errands").doc(id as string).update({
                payment_id: session.payment_intent,
                payment_status: "pending"
            })
    
            return res.redirect(303, session.url);
        }
    }
    catch(err){
        return res.status(400).send({message: "Errand does not exist " })
    }

    return res.status(500).send({message: "Failed to create payment"})
}

/**
 * Webhook for picking up the Checkout session
 */
export const CheckoutSessionWebhook = async (req : any, res : Response) => {
    const headers : any = req.headers;
    const payload : any = req.rawBody;

    try {
        const event = stripe.webhooks.constructEvent(payload, headers["stripe-signature"], "whsec_3c8107487a88c471dd0a19c11da06b453444786e02b05b2fb3da1cb175e2e84f");
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
                        .get();
                    
                    // Update errand in firestore & salesforce
                    if(snap.size > 0){
                        const snapData = snap.docs[0].data();

                        // Get fortnox id from email
                        const userSnap = await admin.firestore().collection("email_connection")
                            .where("email", "==", snapData!.email)
                            .get();
                        const userData = userSnap.docs[0].data();

                        // Add invoice payment to fortnox
                        // @ts-ignore - TS Schema not up to date?
                        const invoice = await addInvoicePayment(userData.fortnox_id, session.amount_total, session.currency);
                        
                        // Update salesforce entry
                        await changeStatusErrand(snapData!.salesforce_id, snapData!.type, "paid");

                        // Update Firebase entry
                        await admin.firestore().collection("errands")
                            .doc(snap.docs[0].id)
                            .update({
                                "payment_status": "paid",
                                "invoice": invoice
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
    catch(err){
        console.log(err)
        return res.status(400).send(`Webhook error: ${err.message}`);
    }

    return res.status(200).send();
}