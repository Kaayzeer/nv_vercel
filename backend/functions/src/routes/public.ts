import * as express from "express";
import { declineOffer, getErrand, signOffer, updateErrand } from "../controller/errand";
import { createBuy, createFind, createSell } from "../controller/public";
import { getUserMiddle, getUserRequest } from "../middleware/user_info";

const router = express.Router()

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

router.post("/sign/:id",
    getUserMiddle,
    signOffer
);

router.post("/decline/:id",
    getUserMiddle,
    declineOffer
);

router.get("/get/:id",
    getUserMiddle,
    getErrand
)

router.patch("/update/:id",
    getUserMiddle,
    updateErrand
)


module.exports = router;