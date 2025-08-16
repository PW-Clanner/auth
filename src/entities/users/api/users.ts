import {UserLoginRequest} from "@/entities/users/model/UserLoginRequest.ts";
import {UserLoginResponse} from "@/entities/users/model/UserLoginResponse.ts";
import {UserRegisterResponse} from "@/entities/users/model/UserRegisterResponse.ts";

const IDENTITY_BASE = "https://identity.clanner.pw";
// const IDENTITY_BASE = "http://localhost:5000";

export async function loginUser(request: UserLoginRequest): Promise<UserLoginResponse> {
    return await fetch(IDENTITY_BASE + "/api/users/login", {
        method: "POST",
        credentials: 'include',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    })
        .then(async (r) => {
            switch (r.status) {
                case 200:
                case 400:
                    return await r.json() as UserLoginResponse;
                default:
                    throw "unknown";
            }
        });
}

export async function registerUser(request: UserLoginRequest): Promise<UserRegisterResponse> {
    return await fetch(IDENTITY_BASE + "/api/users/register", {
        method: "POST",
        credentials: 'include',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    })
        .then(async (r) => {
            switch (r.status) {
                case 200:
                case 400:
                    return await r.json() as UserRegisterResponse;
                default:
                    throw "unknown";
            }
        });
}