import * as express from "express";
import { createBuy, createOffer, createSell } from "../controller/public";

const router = express.Router()

router.post("offer",
    createOffer
);

router.post("sell",
    createSell
);

router.post("offer",
    createBuy
);

module.exports = router;