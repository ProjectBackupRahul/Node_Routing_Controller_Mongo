import { JsonController, Get, HeaderParam } from "routing-controllers";
import { ValidUserService } from "../Services/ValidUserServices";

@JsonController()
export class ValidUserController {

    constructor(private validuserService: ValidUserService) {
    }

    @Get("/users")
    getAll(@HeaderParam("auth-token") token: string) {
       return this.validuserService.findAllPost(token);
    }
}