import { ListUserSendUserComplimentsService } from './../services/ListUserSendComplimentsService';
import {Request,Response} from "express";

export class ListUserSendComplimentsController{
 async handle(req: Request, res: Response){

  const {user_id} = req;
  
  const listUserSendComplimentsService = new ListUserSendUserComplimentsService();

  const compliments = await listUserSendComplimentsService.execute(user_id);

  return res.json(compliments);
 }
}
