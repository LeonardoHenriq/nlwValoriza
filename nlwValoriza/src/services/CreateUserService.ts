import { getCustomRepository } from "typeorm"
import { UsersRepositories } from './../repositories/UsersRepositories';
import {hash} from "bcryptjs";

interface IUserRequest {
 name:string;
 email:string;
 admin?: boolean;
 password:string;
}

class CreateUserService{

 async execute({name,email,admin = false,password} : IUserRequest){
   const UsersRepository = getCustomRepository(UsersRepositories);

   if(!email) {
    throw new Error("Email incorrect");
   }

   const userAlreadyExists =  await UsersRepository.findOne({
    email
   });

   if(userAlreadyExists){
    throw new Error("Users Already exists");
   }

   const passwordHash =await hash(password, 10)
   
   const user = UsersRepository.create({
    name,
    email,
    admin,
    password: passwordHash,
   })

   return await UsersRepository.save(user);
 }
}

export {CreateUserService}
