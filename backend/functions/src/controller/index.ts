import {Request, Response} from "express";
import { RegisterUser } from "../schema/user";
import * as admin from "firebase-admin";
import { addCustomer } from "../lib/salesforce";
import {UserPasswordJoiSchema} from "../validation-schema/user"

export async function testController(req: Request, res: Response){
    return res.status(200).send({message: "Succesfully registered new user", status: "success"});
}

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

        // Add to salesforce
        addCustomer(firstname, surname, email, phone);

        // Add to database
        await admin.firestore().collection("domain_offers").doc(user.uid).set({
            firstname: firstname,
            surname: surname,
            phone: phone
        } as RegisterUser)

        

        return res.status(200).send({message: "Succesfully registered new user", status: "success"});
    }
    catch(err){
        return res.status(500).send({message: `Failed to register user`});
    }
}