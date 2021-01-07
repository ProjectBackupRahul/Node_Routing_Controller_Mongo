import {Service} from "typedi";
import * as jwt from "jsonwebtoken"
const TokenScrect = 'asdfghjkl'

@Service()
export class ValidUserService{
  async findAllPost(token: string){
             const genToken = token
             if(!genToken)
              return `Access Denied : Not a valid user`
              const verified = jwt.verify(genToken, TokenScrect)
              return verified;

           }             
}