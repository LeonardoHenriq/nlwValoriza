import {Request, Response, NextFunction} from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction){

 const admin = true;

 return admin ? next() : res.status(401).json({
  error: "Unauthorized",
 })
 
}