import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from './../repositories/UsersRepositories';
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

interface IAutheticateRequest{
 email:string;
 password: string;
}


export class AuthenticateUserService {
  async execute({email,password}:IAutheticateRequest){
   const usersRepositories = getCustomRepository(UsersRepositories)

   const user = await usersRepositories.findOne({email})
   
   if(!user) throw new Error("Email/Password incorrect");

   const passwordMatch = await compare(password,user.password);

   if(!passwordMatch) throw new Error("Email/Password incorrect");
   
  const token = sign({
     email: user.email
   }, "f3a15a9caaa9f47a6dc035042325a4a3",{
    subject: user.id,
    expiresIn: "1d"
   })
   return token;
  }
}