import {makeAutoObservable} from "mobx";
import {UserLoginRequest} from "@/entities/users/model/UserLoginRequest.ts";
import {loginUser, registerUser} from "@/entities/users/api/users.ts";
import {UserLoginResponse} from "@/entities/users/model/UserLoginResponse.ts";
import {UserRegisterResponse} from "@/entities/users/model/UserRegisterResponse.ts";

export class UsersStore {
    busy: boolean = false;

    reset(): void {
        this.busy = false;
    }

    async LoginUser(request: UserLoginRequest): Promise<UserLoginResponse> {
        this.busy = true;
        let result = await loginUser(request);
        this.busy = false;
        return result;
    }

    async RegisterUser(request: UserLoginRequest): Promise<UserRegisterResponse> {
        this.busy = true;
        let result = await registerUser(request);
        this.busy = false;
        return result;
    }

    constructor() {
        makeAutoObservable(this);
        this.reset();
    }
}
