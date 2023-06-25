import {Request, Response} from "express";


export const getGreeting = async (req: Request, res: Response) => {
    res.json({greeting: "HALLO!"});
}