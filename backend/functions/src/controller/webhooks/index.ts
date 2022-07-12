import {Request, Response} from "express";
import * as admin from "firebase-admin";
import { createOffer, getOfferPDF, sendOfferPDF } from "../../lib/fortnox";
import { OfferConnection } from "../../schema/offer";

export async function webhookCreateOffer(req: Request, res: Response) {
    const {id} = req.params;
    const {amount, description} = req.body;

    // Create Offer
    const offer_id = await createOffer(amount, description);
    if(offer_id){
        // Save PDF
        const pdf = await getOfferPDF(offer_id);

        // Send PDF mail
        await sendOfferPDF(offer_id);

        const bucket = admin.storage().bucket()
        const file = bucket.file(`offers/offer_${id}.pdf`)

        // Save file to Cloud Storage
        let url = "";

        await file.save(pdf!)
            .then(() => {
                return file.getSignedUrl({
                    action: 'read',
                    expires: '03-09-2500'
                })
            })
            .then((urls) => {
                url = urls[0]
            })
            .catch((err) => console.log("Failed to upload PDF"));

        // Remove old 
        const snap = await admin.firestore().collection("offers").where("errand", "==", admin.firestore().collection("errands").doc(id)).get();
        if(snap.size > 0)
            await admin.firestore().collection("offers").doc(snap.docs[0].id).delete();

        // Add to firebase
        await admin.firestore().collection("offers").add({
            fortnox_id: offer_id,
            errand: admin.firestore().collection("errands").doc(id),
            offer_link: url,
            signed: false,
            code: Math.random().toString().slice(2,11)
        } as OfferConnection)

        return res.status(200).send({
            message: "offer_id"
        });
    }

    return res.status(500).send({
        error: "Failed to create offer"
    })
}

