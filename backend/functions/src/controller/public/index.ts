import {Request, Response} from "express";
import { BuyDomain, FindDomain, SellDomain } from "../../schema/domain";
import * as admin from "firebase-admin";
import { checkAuth } from "../../lib/auth";
import { addCustomer } from "../../lib/salesforce";
import { BuyJoiSchema, FindJoiSchema, SellJoiSchema } from "../../validation-schema/domain";
import { UserJoiSchema } from "../../validation-schema/user";

export async function createFind(req: Request, res: Response) {
    const {authorization} = req.headers;
    const {firstname, surname, email, phone, business_desc, business_type, additional_details, country, names_disliked, keywords, maximum_letters, maximum_words, budget} : FindDomain = req.body;

    // Add to firestore
    try{
        var payload : FindDomain = {
            business_desc: business_desc,
            business_type: business_type,
            additional_details: additional_details,
            country: country,
            names_disliked: names_disliked,
            keywords: keywords,
            maximum_letters: maximum_letters,
            maximum_words: maximum_words
        } as FindDomain

        // Validate form
        try{
            await FindJoiSchema.validateAsync({business_desc, business_type, country, keywords, budget})
        }
        catch(err){
            return res.status(400).send({message: err})
        }
            
        // Check if authed
        if(await checkAuth(authorization as string)){
            const splitToken = authorization!.split("Bearer ");
            const token = splitToken[1];

            const user = await admin.auth().verifyIdToken(token);

            payload = {
                ...payload, 
                user_id: admin.firestore().collection("users").doc(user.uid)
            }
        }
        else{
            // Check with joi
            try{
                await UserJoiSchema.validateAsync({firstname, surname, email, phone})
            }
            catch(err){
                return res.status(400).send({message: err})
            }

            // Add to salesforce
            addCustomer(firstname!, surname!, email, phone)

            payload = {
                ...payload, 
                firstname: firstname,
                surname: surname,
                email: email,
                phone: phone
            }
        }

        await admin.firestore().collection("domain_find").add(payload)

        return res.status(200).send({message: "Succesfully created an offer", status: "success"});
    }
    catch(err){
        return res.status(500).send({message: `Failed to create offer`});
    }
}

export async function createSell(req: Request, res: Response) {
    const {authorization} = req.headers;
    const {firstname, surname, email, phone, domains} : SellDomain = req.body;

    // Add to firestore
    try{
        var payload : SellDomain = {
            domains: domains
        } as SellDomain

        // Validate form
        try{
            await SellJoiSchema.validateAsync({domains})
        }
        catch(err){
            return res.status(400).send({message: err})
        }
        
        // Check if authed
        if(await checkAuth(authorization as string)){
            const splitToken = authorization!.split("Bearer ");
            const token = splitToken[1];

            const user = await admin.auth().verifyIdToken(token);

            payload = {
                ...payload, 
                user_id: admin.firestore().collection("users").doc(user.uid)
            }
        }
        else{
            // Check with joi
            try{
                await UserJoiSchema.validateAsync({firstname, surname, email, phone})
            }
            catch(err){
                return res.status(400).send({message: err})
            }

            // Add to salesforce
            addCustomer(firstname!, surname!, email, phone)

            payload = {
                ...payload, 
                firstname: firstname,
                surname: surname,
                email: email,
                phone: phone
            }
        }

        await admin.firestore().collection("domain_sell").add(payload)

        return res.status(200).send({message: "Succesfully created a sell request", status: "success"});
    }
    catch(err){
        return res.status(500).send({message: `Failed to create a sell request`});
    }
}

export async function createBuy(req: Request, res: Response) {
    const {authorization} = req.headers;
    const {firstname, surname, email, phone, domain, budget} : BuyDomain = req.body;

    // Add to firestore
    try{
        var payload : BuyDomain = {
            domain: domain,
            budget: budget
        } as BuyDomain

        // Validate form
        try{
            await BuyJoiSchema.validateAsync({domain, budget})
        }
        catch(err){
            return res.status(400).send({message: err})
        }

        // Check if authed
        if(await checkAuth(authorization as string)){
            const splitToken = authorization!.split("Bearer ");
            const token = splitToken[1];

            const user = await admin.auth().verifyIdToken(token);

            payload = {
                ...payload, 
                user_id: admin.firestore().collection("users").doc(user.uid)
            }
        }
        // Not logged in, extend with firstname etc
        else{
            // Check with joi
            try{
                await UserJoiSchema.validateAsync({firstname, surname, email, phone})
            }
            catch(err){
                return res.status(400).send({message: err})
            }

            // Add to salesforce
            addCustomer(firstname!, surname!, email, phone)

            payload = {
                ...payload, 
                firstname: firstname,
                surname: surname,
                email: email,
                phone: phone
            }
        }

        await admin.firestore().collection("domain_buy").add(payload);

        return res.status(200).send({message: "Succesfully created a buy request", status: "success"});
    }
    catch(err){
        return res.status(500).send({message: `Failed to create a buy request`});
    }
}