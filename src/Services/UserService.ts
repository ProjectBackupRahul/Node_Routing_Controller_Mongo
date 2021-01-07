import {Service} from "typedi";
import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
import User from "../Models/UserModel"
const TokenScrect = 'asdfghjkl'
@Service()
export class UserService {

     async Newinsert(user: any) {
       console.log("Inser user POST ", user.name)
       // @ Email Exists 
       const emailExists = await User.findOne({email: user.email})
       if (emailExists)
       return ` This User is Already exists with mail: ${user.email}`

     // @ Password hashing 
     const salt: any = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(user.password, salt);

       const N_user = await new User ({
           name: user.name,
           email: user.email,
           password: hashedPassword
       });
            const savedUser =  N_user.save();
            return  user;
    }

     async loginUser(userLogin: any){
         // @ user Exists 
         console.log(`${userLogin.email}`);
         const user = await User.findOne({email: userLogin.email});
         if (!user)
         return `Email is not found `
      // @ Password Validation 
        const validPassword  = await bcrypt.compare(userLogin.password, user.password)
        if (!validPassword)
          return `Invalid Password`
              const token = await jwt.sign({_id: user._id}, TokenScrect)
              const headers = {
                   headers: "auth-token",
                   token: token
              }
          return  headers;
     }
}