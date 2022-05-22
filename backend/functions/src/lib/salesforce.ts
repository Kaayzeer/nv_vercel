import fetch from 'node-fetch';

export const changeStatusErrand = async(id: string, type: string, status: string) => {
    // Get Auth token
    let type_url = "";

    // Map to sObject
    if(type == "buy")
        type_url = "BuyErrand__c"
    else if(type == "sell")
        type_url = "SellErrand__c"
    else if(type == "find")
        type_url = "FindErrand__c"

    // Update record
    await fetch(`${process.env.SALESFORCE_URL}services/data/v54.0/sobjects/${type_url}/${id}/`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${await getSalesForceAuthToken()}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "payment_status__c": status
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const checkSalesForceCustomer = async(email: string) => {
    // Get Auth token
    let id = undefined;

    await fetch(`${process.env.SALESFORCE_URL}services/data/v54.0/parameterizedSearch`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${await getSalesForceAuthToken()}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            q: email,
            sobjects: [{
                name: "Lead"
            }]
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.searchRecords && data.searchRecords.length > 0)
            id = data.searchRecords[0].Id;
    })
    .catch(err => {})

    return id;
}

export const addSalesForceCustomer = async (forename : string, surname: string, email: string = "", phone : string = "") => {
    // Look if already exists
    const search_id = await checkSalesForceCustomer(email);

    if(search_id)
        return {id: search_id, status: "exists"};

    // Payload
    const payload : any = {
        "FirstName": forename,
        "LastName": surname,
        "Company": `${forename} ${surname}`
    }

    // Add optional
    if(email)
        payload["Email"] = email;

    if(phone)
        payload["MobilePhone"] = phone;

    let id = undefined;
    // Add record 
    await fetch(`${process.env.SALESFORCE_URL}services/data/v54.0/sobjects/Lead/`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${await getSalesForceAuthToken()}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Return id
        if(data["success"])
            id = data["id"];
    })
    .catch(err => {})

    return {id: id, status: "new"}
}

/**
 * Get auth Token for SalesForce API
 */
export const getSalesForceAuthToken = async () => {
    // Add payload
    let payload : string[] = [];
    payload.push(`grant_type=password`)
    payload.push(`client_id=${process.env.SALESFORCE_CUSTOMER_KEY}`)
    payload.push(`client_secret=${process.env.SALESFORCE_CONSUMER_SECRET}`)
    payload.push(`username=${process.env.SALESFORCE_INT_USER}`)
    payload.push(`password=${process.env.SALESFORCE_INT_PASS}`)

    let token = undefined;

    // Retrieve auth token
    await fetch(`${process.env.SALESFORCE_URL}services/oauth2/token?${payload.join("&")}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(response => response.json())
    .then(response => {
        if(response["access_token"])
            token = response["access_token"];
    })
    .catch(err => {})

    return token;
}