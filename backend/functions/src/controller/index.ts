import {Request, Response} from "express";
import { RegisterUser } from "../schema/user";
import * as admin from "firebase-admin";
import { addCustomer } from "../lib/salesforce";

export async function testController(req: Request, res: Response){
    addCustomer("test", "oma");

    return res.status(200).send({message: "Succesfully registered new user", status: "success"});
}


export async function registerUser(req: Request, res: Response) {
    const {firstname, surname, email, phone, password, re_password} : RegisterUser = req.body;

    // TODO: change to joi
    if(password == "" || password !== re_password)
        return res.status(500).send({message: `Not matching passwords`});

    // Add to firestore
    try{
        const user = await admin.auth().createUser({
            email: email,
            emailVerified: true,
            password: password,
            displayName: `${firstname} ${surname}`,
            disabled: false,
          });

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