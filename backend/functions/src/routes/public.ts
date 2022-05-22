import * as express from "express";
import { testController } from "../controller";
import { createBuy, createFind, createSell } from "../controller/public";
import { getUserRequest } from "../middleware/user_info";

const router = express.Router()

router.get("/test",
    testController
);

router.post("/find",
    getUserRequest,
    createFind
);

router.post("/sell",
    getUserRequest,
    createSell
);

router.post("/offer",
    getUserRequest,
    createBuy
);

module.exports = router;