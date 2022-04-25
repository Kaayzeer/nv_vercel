import * as express from "express";
import { CheckoutSessionWebhook, CreateCheckoutSession } from "../controller/payment";

const router = express.Router()

router.post("/create-checkout-session",
    CreateCheckoutSession
);

router.post("/webhook",
    CheckoutSessionWebhook
);

module.exports = router;