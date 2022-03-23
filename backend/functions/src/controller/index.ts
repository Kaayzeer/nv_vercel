import {Request, Response} from "express";


export async function exampleFunc(req: Request, res: Response) {
    return res.status(500).send({message: `error`});
}