import { ComplimentsRepositories } from './../repositories/ComplimentsRepositories';
import { getCustomRepository } from 'typeorm';


export class ListUserSendUserComplimentsService{

 async execute(user_id:string){
   const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

   return await complimentsRepositories.find({
    where: {
       user_sender : user_id
    }
   })

 }
}