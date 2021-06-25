import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from './../repositories/UsersRepositories';
import {classToPlain} from "class-transformer";

export class ListUserService{
  async execute(){
    const usersRepositories = getCustomRepository(UsersRepositories);
    
    return classToPlain(await usersRepositories.find());
  }
}