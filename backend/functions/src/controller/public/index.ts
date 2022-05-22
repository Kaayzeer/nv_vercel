import {Request, Response} from "express";
import { BuyDomain, FindDomain, SellDomain } from "../../schema/domain";
import * as admin from "firebase-admin";
import { checkAuth } from "../../lib/auth";
import { addSalesForceCustomer, getSalesForceAuthToken } from "../../lib/salesforce";
import { BuyJoiSchema, FindJoiSchema, SellJoiSchema } from "../../validation-schema/domain";
import { UserJoiSchema } from "../../validation-schema/user";
import fetch from 'node-fetch';

export async function createFind(req: Request, res: Response) {
    const {email, business_desc, business_type, additional_details, country, names_disliked, keywords, maximum_letters, maximum_words, budget} : FindDomain = req.body;
    const {salesforce_id} = res.locals;

    // Add to firestore
    try{
        var payload : FindDomain = {
            payment_status: "unpaid",
            type: "find"
        } as FindDomain

        // Validate form
        try{
            await FindJoiSchema.validateAsync({business_desc, business_type, country, keywords, budget})
        }
        catch(err){
            return res.status(400).send({message: err})
        }

        // Add to salesforce
        await fetch(`${process.env.SALESFORCE_URL}services/data/v54.0/sobjects/FindErrand__c/`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${await getSalesForceAuthToken()}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "Lead__c": salesforce_id,
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
                payload = {
                    ...payload,
                    salesforce_id: data.id,
                    email: email
                }
        })
        .catch(err => {
            console.log(err)
        })

        const snap = await admin.firestore().collection("errands").add(payload)

        return res.status(200).send({message: "Succesfully created an offer", id: snap.id, status: "success"});
    }
    catch(err){
        return res.status(500).send({message: `Failed to create offer`});
    }
}

export async function createSell(req: Request, res: Response) {
    const {domains, email} : SellDomain = req.body;
    const {salesforce_id} = res.locals;

    // Add to firestore
    try{
        var payload : SellDomain = {
            payment_status: "unpaid",
            type: "sell"
        } as SellDomain

        // Validate form
        try{
            await SellJoiSchema.validateAsync({domains})
        }
        catch(err){
            return res.status(400).send({message: err})
        }

        // Add to salesforce
        await fetch(`${process.env.SALESFORCE_URL}services/data/v54.0/sobjects/SellErrand__c/`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${await getSalesForceAuthToken()}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "Lead__c": salesforce_id,
                "domains__c": domains.join("\n")
            })
        })
        .then(response => response.json())
        .then(data => {
            // Return id
            if(data.success)
                payload = {
                    ...payload,
                    salesforce_id: data.id,
                    email: email
                }
        })

        // Add to firestore
        const snap = await admin.firestore().collection("errands").add(payload)

        return res.status(200).send({message: "Succesfully created a sell request", id: snap.id, status: "success"});
    }
    catch(err){
        return res.status(500).send({message: `Failed to create a sell request`});
    }
}

export async function createBuy(req: Request, res: Response) {
    const {email, domain, budget} : BuyDomain = req.body;
    const {salesforce_id} = res.locals;

    // Add to firestore
    try{
        var payload : BuyDomain = {
            payment_status: "unpaid",
            type: "buy"
        } as BuyDomain

        // Validate form
        try{
            await BuyJoiSchema.validateAsync({domain, budget})
        }
        catch(err){
            return res.status(400).send({message: err})
        }

        // Add to salesforce
        await fetch(`${process.env.SALESFORCE_URL}services/data/v54.0/sobjects/BuyErrand__c/`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${await getSalesForceAuthToken()}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "Lead__c": salesforce_id,
                "budget__c": budget,
                "domain__c": domain
            })
        })
        .then(response => response.json())
        .then(data => {
            // Return id
            if(data.success)
                payload = {
                    ...payload,
                    salesforce_id: data.id,
                    email: email
                }
        })
        .catch(err => {
            console.log(err)
        })

        const snap = await admin.firestore().collection("errands").add(payload);

        return res.status(200).send({message: "Succesfully created a buy request", id: snap.id, status: "success"});
    }
    catch(err){
        return res.status(500).send({message: `Failed to create a buy request`});
    }
}