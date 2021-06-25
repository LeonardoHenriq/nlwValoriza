import { ListUserService } from './../services/ListUsersService';
import {Request, Response} from "express";

export class ListUsersController{
  async handle(req: Request, res: Response){

   const listUserService = new ListUserService();
   
   const users = await  listUserService.execute();
   
   return res.json(users);
  }
}