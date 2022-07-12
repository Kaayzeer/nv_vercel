import {Request, Response} from "express";

export async function getSecretKeyMiddle(req: Request, res: Response, next: Function) {
    const {authorization} = req.headers;
  
    // Check if bearer exists
    if (!authorization || !authorization.startsWith("Secret")) {
        return res.status(401).send({message: "Unauthorized"});
    }
  
    // Check if field has two values
    const splitToken = authorization.split("Secret ");
    if (splitToken.length !== 2) {
        return res.status(401).send({message: "Unauthorized"});
    }
  
    const token = splitToken[1];
  
    // Try to verify token
    if(token === process.env.NEXT_VENTURE_KEY){
      return next();
    }
    else{
      return res.status(401).send({message: "Unauthorized"});
    }
  }