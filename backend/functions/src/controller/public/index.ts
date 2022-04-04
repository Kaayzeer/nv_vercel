import {Request, Response} from "express";
import { BuyDomain, OfferDomain, SellDomain } from "../../schema/domain";
import * as admin from "firebase-admin";
import { checkAuth } from "../../lib/auth";

export async function createOffer(req: Request, res: Response) {
    const {authorization} = req.headers;
    const {firstname, surname, email, phone, domain} : OfferDomain = req.body;

    // TODO: ADD joi
    // Add to firestore
    try{
        // Check if authed
        if(await checkAuth(authorization as string)){
            const splitToken = authorization!.split("Bearer ");
            const token = splitToken[1];

            const user = await admin.auth().verifyIdToken(token);

            await admin.firestore().collection("domain_offers").add({
                user_id: admin.firestore().collection("users").doc(user.uid),
                domain: domain
            } as OfferDomain)
        }
        else{
            await admin.firestore().collection("domain_offers").add({
                firstname: firstname,
                surname: surname,
                email: email,
                phone: phone,
                domain: domain
            } as OfferDomain)
        }

        return res.status(200).send({message: "Succesfully created an offer", status: "success"});
    }
    catch(err){
        return res.status(500).send({message: `Failed to create offer`});
    }
}

export async function createSell(req: Request, res: Response) {
    const {authorization} = req.headers;
    const {firstname, surname, email, phone, domain, price} : SellDomain = req.body;

    // TODO: ADD joi
    // Add to firestore
    try{
        // Check if authed
        if(await checkAuth(authorization as string)){
            const splitToken = authorization!.split("Bearer ");
            const token = splitToken[1];

            const user = await admin.auth().verifyIdToken(token);

            await admin.firestore().collection("domain_offers").add({
                user_id: admin.firestore().collection("users").doc(user.uid),
                domain: domain,
                price: price
            } as SellDomain)
        }
        else{
            await admin.firestore().collection("domain_sell").add({
                firstname: firstname,
                surname: surname,
                email: email,
                phone: phone,
                domain: domain,
                price: price
            } as SellDomain)
        }

        return res.status(200).send({message: "Succesfully created a sell request", status: "success"});
    }
    catch(err){
        return res.status(500).send({message: `Failed to create a sell request`});
    }
}

export async function createBuy(req: Request, res: Response) {
    const {authorization} = req.headers;
    const {firstname, surname, email, phone, domain} : BuyDomain = req.body;

    // TODO: ADD joi
    // Add to firestore
    try{
        // Check if authed
        if(await checkAuth(authorization as string)){
            const splitToken = authorization!.split("Bearer ");
            const token = splitToken[1];

            const user = await admin.auth().verifyIdToken(token);

            await admin.firestore().collection("domain_offers").add({
                user_id: admin.firestore().collection("users").doc(user.uid),
                domain: domain
            } as BuyDomain)
        }
        else{
            await admin.firestore().collection("domain_sell").add({
                firstname: firstname,
                surname: surname,
                email: email,
                phone: phone,
                domain: domain
            } as BuyDomain)
        }

        return res.status(200).send({message: "Succesfully created a buy request", status: "success"});
    }
    catch(err){
        return res.status(500).send({message: `Failed to create a buy request`});
    }
}