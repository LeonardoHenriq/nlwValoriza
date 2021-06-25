import { ComplimentsRepositories } from './../repositories/ComplimentsRepositories';
import { getCustomRepository } from 'typeorm';


export class ListUserReceiveUserComplimentsService{

 async execute(user_id:string){
   const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

   return await complimentsRepositories.find({
    where: {
       user_receiver : user_id
    },
    relations:["userSender","userReceiver","tag"]
   })

 }
}