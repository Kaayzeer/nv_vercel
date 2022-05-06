import { Request, Response } from "express";
import { getFortnoxAuthToken } from "../../lib/fortnox";

/**
 * Get authorization code for fortnox
 */
export const getFortnoxAuthCode = async (req : Request, res : Response) => {
    const {code} = req.query;

    const response = await getFortnoxAuthToken(code as string);

    return res.status(response.code).send(response)
}