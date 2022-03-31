import {Request, Response} from "express";
import * as admin from "firebase-admin";
import { checkAuth } from "../lib/auth";

// eslint-disable-next-line @typescript-eslint/ban-types
export async function isAuthed(req: Request, res: Response, next: Function) {
  const {authorization} = req.headers;

  // Check if bearer exists
  if (!authorization || !authorization.startsWith("Bearer")) {
    return res.status(401).send({message: "Unauthorized"});
  }

  // Check if field has two values
  const splitToken = authorization.split("Bearer ");
  if (splitToken.length !== 2) {
    return res.status(401).send({message: "Unauthorized"});
  }

  const token = splitToken[1];

  // Try to verify token
  try {
    const decodedToken: admin.auth.DecodedIdToken = await admin.auth().verifyIdToken(token);

    // Set locals for future reference
    res.locals = {...res.locals, uid: decodedToken.uid, email: decodedToken.email};

    return next();
  } catch (err) {
    return res.status(401).send({message: "Unauthorized"});
  }
}

export async function isNotAuthed(req: Request, res: Response, next: Function) {
  const {authorization} = req.headers;

  if(await checkAuth(authorization as string))
    return res.status(401).send({message: "Authorized"});
  else
    return next();
}