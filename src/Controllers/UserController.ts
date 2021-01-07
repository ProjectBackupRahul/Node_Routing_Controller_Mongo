import { JsonController, Body, Post } from "routing-controllers";
import { UserService } from "../Services/UserService";

@JsonController()
export class UserController {

    constructor(private userService: UserService) {
    }

    @Post("/users")
    post(@Body() user: any) {
       return this.userService.Newinsert(user);
    }

    @Post("/login")
    postLogin(@Body() userLogin: any) {
       return this.userService.loginUser(userLogin);
    }
}