import * as express from "express";
import { registerUser } from "../controller";
import { isNotAuthed } from "../middleware/auth";

const router = express.Router()

router.post("register",
    isNotAuthed,
    registerUser
);


module.exports = router;