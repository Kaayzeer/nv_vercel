import {Request, Response} from "express";
import { RegisterUser } from "../schema/user";
import * as admin from "firebase-admin";
import {UserPasswordJoiSchema} from "../validation-schema/user"
import { createFortnoxSalesForceUser } from "../lib/user";

export async function registerUser(req: Request, res: Response) {
    const {firstname, surname, email, phone, password, re_password} : RegisterUser = req.body;

    // Validate
    try{
        await UserPasswordJoiSchema.validateAsync({firstname, surname, email, phone, password, re_password})
    }
    catch(err){
        return res.status(400).send({message: err})
    }

    // Add to firestore
    try{
        const user = await admin.auth().createUser({
            email: email,
            emailVerified: true,
            password: password,
            displayName: `${firstname} ${surname}`,
            disabled: false,
        });

        // Enable user
        admin.auth().updateUser(user.uid, {
            disabled: false,
        });

        // Add to salesforce & fortnox
        let connection = await createFortnoxSalesForceUser(firstname!, surname!, email, phone);
        
        if(connection){
            // Add to database
            await admin.firestore().collection("users").doc(user.uid).set({
                firstname: firstname,
                surname: surname,
                phone: phone,
                email: email
            } as RegisterUser)

            return res.status(200).send({message: "Succesfully registered new user", status: "success"});
        }
        else
            return res.status(500).send({message: `Failed to register user`});
    }
    catch(err){
        return res.status(500).send({message: `Failed to register user`});
    }
}