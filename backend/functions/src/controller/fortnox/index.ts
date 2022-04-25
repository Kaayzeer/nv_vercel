import { Request, Response } from "express";
import fetch from 'node-fetch';

// Fortnox END-POINTS
const API_TOKEN_CALL = "https://apps.fortnox.se/oauth-v1/token"

/**
 * Get authorization code for fortnox
 */
export const getFortnoxAuthCode = async (req : Request, res : Response) => {
    const {code} = req.params;

    // Retrieve auth token
    if(code){
        // Base64 encoding of id and secret
        const credentials = Buffer.from(`${process.env.FORTNOX_CLIENT_ID}:${process.env.FORTNOX_CLIENT_SECRET}`).toString('base64');

        // Params to send for token retrieving
        let payload : string[] = [];
        payload.push(`code=${code}`)
        payload.push(`grant_type=authorization_code`)
        payload.push(`redirect_uri=http://localhost:5001/next-venture/europe-west1/api/fortnox/generate-auth`)

        console.log(code);
        
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
            const {access_token, refresh_token} = data;

            console.log(access_token)
            console.log(refresh_token);

            // TODO: Save access and refresh token

            // Return status
            return res.status(200).send({message: "Successfully retrieved auth token and code.", status: "success"})
        })
        .catch(err => {
            console.log(err)
            return res.status(400).send({message: "Failed to retrieve auth code"})
        })
    }
    
    return res.status(400).send({message: "Failed to retrieve authorization code"})
}

/**
 * Refresh Fortnox auth token
 */
export const refreshFortnoxToken = async () => {
    // Base64 encoding of id and secret
    const credentials = Buffer.from(`${process.env.FORTNOX_CLIENT_ID}:${process.env.FORTNOX_CLIENT_SECRET}`).toString('base64');
    const refresh_token = "";

    // Params to send for token retrieving
    let payload : string[] = [];
    payload.push(`grant_type=refresh_token`)
    payload.push(`refresh_token=${refresh_token}`)

    // Retrieve token
    await fetch(`${API_TOKEN_CALL}?${payload.join("&")}`, {
        method: "POST",
        headers: {
            Authorization: `Basic ${credentials}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(response => response.json())
    .then(data => {
        const {access_token, refresh_token} = data;

        if(!access_token || !refresh_token)
            return undefined;


        // TODO: Save access and refresh token
        
        // Return access and refresh token
        return [access_token, refresh_token];
    })
    .catch(err => {
        console.log(err)
        return undefined;
    })
}