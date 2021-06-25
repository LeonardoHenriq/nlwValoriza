import { ListUserReceiveUserComplimentsService } from './../services/ListUserReceiveComplimentsService';
import {Request,Response} from "express";

export class ListUserReceiveComplimentsController{
 async handle(req: Request, res: Response){

  const {user_id} = req;
  
  const listUserReceiveComplimentsService = new ListUserReceiveUserComplimentsService();

  const compliments = await listUserReceiveComplimentsService.execute(user_id);

  return res.json(compliments);
 }
}
