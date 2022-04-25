import * as express from "express";
import { getFortnoxAuthCode } from "../controller/fortnox";

const router = express.Router()

router.get("/generate-auth",
    getFortnoxAuthCode
);

module.exports = router;