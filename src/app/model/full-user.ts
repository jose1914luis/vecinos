import { UserDetail } from "./user-detail";
import { User } from "./user";
export class FullUser {
    user!:User;
    userDetail!:UserDetail;
    constructor(){
        this.userDetail = new UserDetail();
        this.user = new User();
    }
}
