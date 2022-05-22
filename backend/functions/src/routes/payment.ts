import * as express from "express";
import { CheckoutSessionWebhook, CreateCheckoutSession } from "../controller/payment";

const router = express.Router()

router.post("/webhook",
    CheckoutSessionWebhook
);


router.post("/create-checkout-session",
    CreateCheckoutSession
);

module.exports = router;