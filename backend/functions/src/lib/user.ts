import { addSalesForceCustomer } from "./salesforce";
import * as admin from "firebase-admin";
import { createCustomer } from "./fortnox";
import { EmailConnection } from "../schema/user";

export const createFortnoxSalesForceUser = async(forename : string, surname: string, email: string = "", phone : string = "") => {
    const snap = await admin.firestore().collection("email_connection").where("email", "==", email).get();

    if(snap.size > 0){
        const data = snap.docs[0].data();
        return {
            salesforce_id: data.salesforce_id,
            fortnox_id: data.fortnox_id
        };
    }
    
    const salesforce = await addSalesForceCustomer(forename, surname, email, phone);

    const fortnox = await createCustomer(forename, surname, email);

    // Add to firestore
    await admin.firestore().collection("email_connection").add({
        salesforce_id: salesforce.id,
        fortnox_id: fortnox,
        email: email
    } as EmailConnection);
    
    return {
        salesforce_id: salesforce.id,
        fortnox_id: fortnox
    }
}