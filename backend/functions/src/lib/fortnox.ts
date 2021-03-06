import fetch from 'node-fetch';
import * as admin from "firebase-admin";

// Fortnox END-POINTS
const API_TOKEN_CALL = "https://apps.fortnox.se/oauth-v1/token"
const REDIRECT_URI = "http://localhost:5001/next-venture/europe-west1/api/fortnox/generate-auth"


// https://apps.fortnox.se/oauth-v1/auth?client_id=9wfhkgTQV1gs&redirect_uri=http://localhost:5001/next-venture/europe-west1/api/fortnox/generate-auth&scope=payment%20customer%20invoice%20offer%20bookkeeping&state=asdasd&access_type=offline&response_type=code&account_type=service

/**
 * Create Financial Year
 */
export const createFinancialYear = async() => {
    const authToken = await fortnoxAuthToken()

    if(authToken){
        const year = new Date().getFullYear();

        await fetch(`https://api.fortnox.se/3/financialyears/`,{
            method: "POST",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "FinancialYear": {
                    "FromDate": `${year}-01-01`,
                    "ToDate": `${year}-12-31`,
                    "AccountChartType": `Bas ${year}`
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

/**
 * Create Offer
 */
 export const createOffer = async(amount: number, description: string) => {
    const authToken = await fortnoxAuthToken()

    let customer_id = undefined;

    if(authToken){
        console.log("CREATING")
        // TODO: Send to right customer number

        // Create if not exists
        await fetch(`https://api.fortnox.se/3/offers/`,{
            method: "POST",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(
                {
                    "Offer": {
                      "CustomerNumber": "1",
                      "OfferRows": [
                        {
                            "Price": amount,
                            "Quantity": 1,
                            "Description": description
                        }
                      ]
                    }
            })
        })
        .then(response => response.json())
        .then(data => {
            // Get customer ID
            if(data.Offer)
                customer_id = data.Offer.DocumentNumber
        })
        .catch(err => {
            console.log(err)
        })
    }

    return customer_id;
}

/**
 * Get Offer PDF
 */
export const getOfferPDF = async(id : string) => {
    const authToken = await fortnoxAuthToken()

    let pdf = undefined;

    if(authToken){
        await fetch(`https://api.fortnox.se/3/offers/${id}/print`,{
            method: "GET",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then((fortnox_pdf) => {
            pdf = fortnox_pdf;
        })
        .catch(err => {
            console.log(err)
        })
    }

    return pdf;
}

export const sendOfferPDF = async(id : string) => {
    const authToken = await fortnoxAuthToken()

    if(authToken){
        await fetch(`https://api.fortnox.se/3/offers/${id}/email`,{
            method: "PUT",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            // Todo: Fix mail here
            body: JSON.stringify({
                EmailAddressTo: "omarhindawi98@gmail.com",
                EmailAddressFrom: "omar.hindawi@weknowit.nu",
                EmailSubject: "Next-Venture Offert #"
            })
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
        return true;
    }
    return false;
}

/**
 * Creates customer in Fortnox
 */
export const createCustomer = async(forename : string, surname: string, email: string) => {
    const authToken = await fortnoxAuthToken()

    let customer_id = undefined;

    if(authToken){
        // Create if not exists
        await fetch(`https://api.fortnox.se/3/customers/`,{
            method: "POST",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "Customer": {
                    "Name": `${forename} ${surname}`,
                    "Email": email
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            // Get customer ID
            if(data.Customer)
                customer_id = data.Customer.CustomerNumber
        })
        .catch(err => {
            console.log(err)
        })
    }

    return customer_id;
}

/**
 * Create invoice object
 */
export const createInvoice = async(customer_id: number, amount: number, currency: string ) => {
    const authToken = await fortnoxAuthToken()
    let result = undefined;

    // Create invoice
    await fetch(`https://api.fortnox.se/3/invoices/`,{
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            "Invoice": {
                "InvoiceRows": [
                    {
                        "Price": amount,
                        "DeliveredQuantity": 1,
                        "Description": "Test faktura"
                    }
                ],
                "CustomerNumber": customer_id,
                "Currency": currency
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        // Get Invoice ID
        if(data.Invoice)
            result = data.Invoice.DocumentNumber
    })
    .catch(err => {
        console.log(err)
    })

    // Book keep
    if(result){
        await fetch(`https://api.fortnox.se/3/invoices/${result}/bookkeep`,{
            method: "PUT",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return result;
}

/**
 * Create invoice object and add payment to it
 */
export const addInvoicePayment = async (customer_id: number, amount : number, currency : string) => {
    const authToken = await fortnoxAuthToken()

    let OCR = undefined;

    await createFinancialYear();

    if(authToken){
        const invoiceNumber = await createInvoice(customer_id, amount, currency);

        if(!invoiceNumber)
            return undefined;
            
        const payload = {
            "InvoicePayment": {
                "Amount": amount,
                "AmountCurrency": amount,
                "InvoiceNumber": invoiceNumber
            }
        }

        let InvoiceNumber = undefined;

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
            if(data.InvoicePayment){
                OCR = data.InvoicePayment.InvoiceOCR;
                InvoiceNumber = data.InvoicePayment.Number;
            }
        })
        .catch(err => {
            console.log(err)
        })

        // Bookkeep
        if(InvoiceNumber){
            await fetch(`https://api.fortnox.se/3/invoicepayments/${InvoiceNumber}/bookkeep`,{
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    return OCR;
}

/**
 * Get stored auth token
 */
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