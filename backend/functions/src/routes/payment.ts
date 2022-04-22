import * as express from "express";
import { CreateCheckoutSession } from "../controller/payment";

const router = express.Router()

router.post("/create-checkout-session",
    CreateCheckoutSession
);

module.exports = router;