import * as express from "express";
import { testController } from "../controller";
import { createBuy, createFind, createSell } from "../controller/public";

const router = express.Router()

router.get("/test",
    testController
);

router.post("/find",
    createFind
);

router.post("/sell",
    createSell
);

router.post("/offer",
    createBuy
);

module.exports = router;