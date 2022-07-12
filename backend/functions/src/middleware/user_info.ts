import {Request, Response} from "express";
import { checkAuth } from "../lib/auth";
import * as admin from "firebase-admin";
import { UserJoiSchema } from "../validation-schema/user";
import { BaseUser } from "../schema/domain";
import { createFortnoxSalesForceUser } from "../lib/user";

export const getUserRequest = async (req: Request, res: Response, next: Function) => {
    const {authorization} = req.headers;
    const {firstname, surname, email, phone} : BaseUser = req.body;

    try{
        if(!await checkAuth(authorization as string)){
            // Check with joi
            await UserJoiSchema.validateAsync({firstname, surname, email, phone})

            // Check if email exists already
            const email_snap = await admin.firestore().collection("users").where("email", "==", email).get();
            if(email_snap.size > 0)
                return res.status(400).send({
                    message: "Email is already registered"
                })
        }
    
        // Add to salesforce
        let connection = await createFortnoxSalesForceUser(firstname!, surname!, email, phone);
        const salesforce_id = connection.salesforce_id;
        const fortnox_id = connection.fortnox_id;
    
        // set locals
        res.locals = {...res.locals, salesforce_id, fortnox_id}
    
        return next();
    }
    catch(err){
        return res.status(400).send({message: err})
    }
}

export async function getUserMiddle(req: Request, res: Response, next: Function) {
    const {authorization} = req.headers;
  
    // Check if bearer exists
    if (!authorization || !authorization.startsWith("Bearer")) {
        return next();
    }
  
    // Check if field has two values
    const splitToken = authorization.split("Bearer ");
    if (splitToken.length !== 2) {
        return next();
    }
  
    const token = splitToken[1];
  
    // Try to verify token
    try {
      const decodedToken: admin.auth.DecodedIdToken = await admin.auth().verifyIdToken(token);
  
      const email_snap = await admin.firestore().collection("users").where("email", "==", decodedToken.email).get();
      const salesforce_id = email_snap.docs[0].data().salesforce_id;

      // Set locals for future reference
      res.locals = {...res.locals, uid: decodedToken.uid, email: decodedToken.email, salesforce_id: salesforce_id};
  
      return next();
    } catch (err) {
      return next();
    }
}