import fetch from 'node-fetch';
import * as admin from "firebase-admin";

// Fortnox END-POINTS
const API_TOKEN_CALL = "https://apps.fortnox.se/oauth-v1/token"
const REDIRECT_URI = "http://localhost:5001/next-venture/europe-west1/api/fortnox/generate-auth"


export const addInvoicePayment = async (amount : number, currency : string) => {
    const authToken = await fortnoxAuthToken()

    let invoiceNumber = undefined;

    if(authToken){
        const payload = {
            "InvoicePayment": {
                "Amount": amount,
                "AmountCurrency": amount,
                "Currency": currency,
                "InvoiceNumber": "1"
            }
        }

        await fetch(`https://api.fortnox.se/3/invoicepayments/`,{
            method: "POST",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            invoiceNumber = data.InvoicePayment.InvoiceOCR;
        })
        .catch(err => {
        })
    }

    return invoiceNumber;
}

export const fortnoxAuthToken = async () => {
    const snap = await admin.firestore().collection("api").doc("fortnox").get()
    const snapData = snap.data()

    if(!snap)
        return undefined;
    
    return snapData!["access_token"]
}

/**
 * Get auth token for Fortnox API
 */
export const getFortnoxAuthToken = async (code : string) => {
    let fetched_data = {};

    // Retrieve auth token
    if(code){
        // Base64 encoding of id and secret
        const credentials = Buffer.from(`${process.env.FORTNOX_CLIENT_ID}:${process.env.FORTNOX_CLIENT_SECRET}`).toString('base64');

        // Params to send for token retrieving
        let payload : string[] = [];
        payload.push(`code=${code}`)
        payload.push(`grant_type=authorization_code`)
        payload.push(`redirect_uri=${REDIRECT_URI}`)
        
        // Retrieve token
        await fetch(`${API_TOKEN_CALL}`, {
            method: "POST",
            headers: {
                Authorization: `Basic ${credentials}`,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: payload.join("&")
        })
        .then(response => response.json())
        .then(data => {
            if(data.error)
                return data;

            // Set fetched data
            fetched_data = data; 
        })
        .catch(err => {
            console.log(err)
            return {message: "Failed to retrieve auth code", code: 400}
        })
    }
    else
        return {message: "Failed to retrieve authorization code", code: 400}

    // Save auth token in firebase
    await admin.firestore().collection("api").doc("fortnox").set(fetched_data)

    return {message: "Successfully retrieved auth token and code.", status: "success", code: 200}
}

/**
 * Refresh Fortnox token
 */
export const refreshFortnoxToken = async () => {
    // Read refresh token from 
    const snap = await admin.firestore().collection("api").doc("fortnox").get();
    const snapData = snap.data();

    if(!snap)
        return undefined;

    let fetched_data = {};

    // Base64 encoding of id and secret
    const credentials = Buffer.from(`${process.env.FORTNOX_CLIENT_ID}:${process.env.FORTNOX_CLIENT_SECRET}`).toString('base64');
    const refresh_token = snapData!["refresh_token"];

    // Params to send for token retrieving
    let payload : string[] = [];
    payload.push(`grant_type=refresh_token`)
    payload.push(`refresh_token=${refresh_token}`)

    // Retrieve token
    await fetch(`${API_TOKEN_CALL}`, {
        method: "POST",
        headers: {
            Authorization: `Basic ${credentials}`,
            "Content-Type": "application/x-www-form-urlencoded",
            body: payload.join("&")
        }
    })
    .then(response => response.json())
    .then(data => {
        if(data.error)
            return undefined;

        // Set fetched data
        fetched_data = data;
        return true;
    })
    .catch(err => {
        return undefined;
    })
    
    // Save new token in database
    await admin.firestore().collection("api").doc("fortnox").set(fetched_data)

    return true;
}