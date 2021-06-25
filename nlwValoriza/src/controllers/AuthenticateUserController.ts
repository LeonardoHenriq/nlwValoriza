import { AuthenticateUserService } from './../services/AuthenticateUserService';
import {Request,response,Response} from "express";

export class AuthenticateUserController{
  async handle(req: Request, res: Response){
   const { email,password } = req.body

   const authenticateUserService = new AuthenticateUserService();

   const token = await authenticateUserService.execute({
    email,
    password,
   })
   return res.json(token);
  }
}