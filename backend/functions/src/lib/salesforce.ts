import fetch from 'node-fetch';

export const checkCustomer = async(forename: string, surname: string) => {
    // Get Auth token
    const token = await getAuthToken();

    // Payload

}

export const addCustomer = async (forename : string, surname: string, email: string = "", phone : string = "") => {
    // Get Auth token
    const token = await getAuthToken();

    // Payload
    const payload : any = {
        "Name": `${forename} ${surname}`
    }

    // Add optional
    if(email)
        payload["e_post__c"] = email;

    if(phone)
        payload["phone__c"] = phone;

    // Add record 
    await fetch(`${process.env.SALESFORCE_URL}services/data/v54.0/sobjects/Customer/`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        // Return id
        if(data["success"])
            return data["id"];
        else
            return undefined;
    })
    .catch(err => {
        console.log(err)
        return undefined;
    })
}

export const getAuthToken = async () => {
    // Add payload
    let payload : string[] = [];
    payload.push(`grant_type=password`)
    payload.push(`client_id=${process.env.SALESFORCE_CUSTOMER_KEY}`)
    payload.push(`client_secret=${process.env.SALESFORCE_CONSUMER_SECRET}`)
    payload.push(`username=${process.env.SALESFORCE_INT_USER}`)
    payload.push(`password=${process.env.SALESFORCE_INT_PASS}`)

    // Retrieve auth token
    await fetch(`${process.env.SALESFORCE_URL}services/oauth2/token?${payload.join("&")}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(response => response.json())
    .then(response => {
        return response["access_token"];
    })
    .catch(err => {
        return undefined;
    })
}