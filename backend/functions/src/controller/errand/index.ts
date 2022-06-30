import {Request, Response} from "express";
import * as admin from "firebase-admin";
import { getErrandSalesForce, getSalesForceAuthToken } from "../../lib/salesforce";
import { BuyJoiSchema, FindJoiSchema, SellJoiSchema } from "../../validation-schema/domain";

/**
 * Get errand info
 */
export async function getErrand(req: Request, res: Response) {
    const {id} = req.params;
    const {salesforce_id} = res.locals;

    try{
        // Get firebase data
        const snap = await admin.firestore().collection("errands").doc(id).get();
        const data = snap.data();

        // Get data from salesforce
        // Todo: Check if logged in
        const salesforce_data = await getErrandSalesForce(data!.salesforce_id, data!.type)

        // Get offer
        const offer_snap = await admin.firestore().collection("offers").where("errand", "==", admin.firestore().collection("errands").doc(id)).get();
        if(offer_snap.size > 0)
            return res.json(200).send({...salesforce_data, offer_link: offer_snap.docs[0].data().offer_link})
        
        return res.json(200).send(salesforce_data)
    }
    catch(err){
        return res.json(500).send({
            error: "Failed to get errand"
        })
    }
}

/**
 * Get errand info
 */
 export async function updateErrand(req: Request, res: Response) {
    const {id} = req.params;

    try{
        // Get firebase data
        const snap = await admin.firestore().collection("errands").doc(id).get();
        const data = snap.data();

        // Todo: Check if logged in

        if(data!.type === "find"){
            const {business_desc, business_type, additional_details, country, names_disliked, keywords, maximum_letters, maximum_words, budget} = req.body;

            // Validate form
            try{
                await FindJoiSchema.validateAsync({business_desc, business_type, country, keywords, budget})
            }
            catch(err){
                return res.status(400).send({message: err})
            }

            // Update Salesforce
            await fetch(`${process.env.SALESFORCE_URL}services/data/v54.0/sobjects/FindErrand__c/${data!.salesforce_id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${await getSalesForceAuthToken()}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "budget__c": budget,
                    "business_desc__c": business_desc,
                    "business_type__c": business_type,
                    "additional_details__c": additional_details,
                    "country__c": country,
                    "maximum_letters__c": maximum_letters,
                    "maximum_words__c": maximum_words,
                    "disliked_names__c": names_disliked,
                })
            })
            .then(response => response.json())
            .then(data => {
                // Return id
                if(data.success)
                    return res.json(200).send("Succesfully updated errand")
            })
            .catch(err => {
                console.log(err)
            })
        }
        else if(data!.type === "sell"){
            const {domains} = req.body;

            // Validate form
            try{
                await SellJoiSchema.validateAsync({domains})
            }
            catch(err){
                return res.status(400).send({message: err})
            }

            // Add to salesforce
            await fetch(`${process.env.SALESFORCE_URL}services/data/v54.0/sobjects/SellErrand__c/${data!.salesforce_id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${await getSalesForceAuthToken()}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "domains__c": domains.join("\n")
                })
            })
            .then(response => response.json())
            .then(data => {
                // Return id
                if(data.success)
                    return res.json(200).send("Succesfully updated errand")
            })

        }
        else if(data!.type === "buy"){
            const {domain, budget} = req.body;

            // Validate form
            try{
                await BuyJoiSchema.validateAsync({domain, budget})
            }
            catch(err){
                return res.status(400).send({message: err})
            }

            // Add to salesforce
            await fetch(`${process.env.SALESFORCE_URL}services/data/v54.0/sobjects/BuyErrand__c/${data!.salesforce_id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${await getSalesForceAuthToken()}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "budget__c": budget,
                    "domain__c": domain
                })
            })
            .then(response => response.json())
            .then(data => {
                // Return id
                if(data.success)
                    return res.json(200).send("Succesfully updated errand")
            })
            .catch(err => {
                console.log(err)
            })
        }

        return res.json(500).send({
            error: "Failed to update errand"
        })
    }
    catch(err){
        return res.json(500).send({
            error: "Failed to update errand"
        })
    }
}

/**
 * Decline offer
 */
export async function declineOffer(req: Request, res: Response){
    const {id} = req.params;
    const {salesforce_id} = res.locals;

    // Check if user is owner of errand
    const snap = await admin.firestore().collection("errands").doc(id).get();
    const data = snap.data();

    const offer_snap = await admin.firestore().collection("offers").where("errand", "==", admin.firestore().collection("errands").doc(id)).get();

    if(offer_snap.size > 0){
        // Todo: FIX THIS
    }
    return res.status(500).send({
        error: "Offer does not exist"
    })
}

/**
 * Sign offer
 */
export async function signOffer(req: Request, res: Response){
    const {id} = req.params;
    const {salesforce_id} = res.locals;
    const {code} = req.body;

    // Check if user is owner of errand
    const snap = await admin.firestore().collection("errands").doc(id).get();
    const data = snap.data();

    const offer_snap = await admin.firestore().collection("offers").where("errand", "==", admin.firestore().collection("errands").doc(id)).get();

    if(offer_snap.size > 0){
        const offer_data = offer_snap.docs[0].data();
        const offer_id = offer_snap.docs[0].id;

        // Todo: Bugged, fix this
        if(data && salesforce_id === data.salesforce_id){
            // Owner, dont require code
            await admin.firestore().collection("offers").doc(offer_id).update({
                signed: true
            })

            // Todo: Update status in salesforce

            return res.status(200).send({
                message: "Succesfully signed offer"
            })
        }
        else{
            if(offer_data.code == code){
                await admin.firestore().collection("offers").doc(offer_id).update({
                    signed: true
                })

                // Todo: Update status in salesforce

                return res.status(200).send({
                    message: "Succesfully signed offer"
                })
            }
            else
                return res.status(500).send({
                    error: "Wrong code"
                })
        }
    }
    return res.status(500).send({
        error: "Offer does not exist"
    })
}