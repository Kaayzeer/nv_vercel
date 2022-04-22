import {Request, Response} from "express";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2020-08-27"
});

export const CreateCheckoutSession = async (req : Request, res: Response) => {
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

    if(session.url)
        return res.redirect(303, session.url);
    
    return res.status(500).send({message: "Failed to create payment"})
}