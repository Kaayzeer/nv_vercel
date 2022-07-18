import * as express from "express";
import { registerUser } from "../controller";
import { editUser } from "../controller/user";
import { isAuthed, isNotAuthed } from "../middleware/auth";

const router = express.Router()

router.post("/register",
    isNotAuthed,
    registerUser
);

router.patch("/",
    isAuthed,
    editUser
);

module.exports = router;