import * as express from "express";
import { webhookCreateOffer } from "../controller/webhooks";
import { getSecretKeyMiddle } from "../middleware/webhook";

const router = express.Router()

router.all("*", getSecretKeyMiddle);

router.post("/offer",
    webhookCreateOffer
);

module.exports = router;