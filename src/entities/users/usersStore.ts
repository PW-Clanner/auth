import {makeAutoObservable} from "mobx";
import {UserLoginRequest} from "@/entities/users/model/userLoginRequest.ts";
import {loginUser} from "@/entities/users/api/users.ts";
import {ValidationErrorResponse} from "@/entities/users/model/validationErrorResponse.ts";

export class UsersStore {
    busy: boolean = false;

    reset(): void {
        this.busy = false;
    }

    async LoginUser(request: UserLoginRequest): Promise<ValidationErrorResponse> {
        this.busy = true;
        let result = await loginUser(request);
        this.busy = false;
        return result;
    }

    constructor() {
        makeAutoObservable(this);
        this.reset();
    }
}
