import fetch from 'node-fetch';

export const checkCustomer = async(forename: string, surname: string) => {
    // Get Auth token
    const token = await getAuthToken();

    // Payload

}

export const addCustomer = async (forename : string, surname: string) => {
    // Get Auth token
    const token = await getAuthToken();

    // Payload
    const payload = {
        "Name": `${forename} ${surname}`
    }

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
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })
}

export const getAuthToken = async () => {
    let token = undefined;

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
        token = response["access_token"];
    })
    .catch(err => {
        console.log(err)
    })
    
    return token;
}