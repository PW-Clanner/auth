import {UserLoginRequest} from "@/entities/users/model/userLoginRequest.ts";
import {ValidationErrorResponse} from "@/entities/users/model/validationErrorResponse.ts";

export async function loginUser(request: UserLoginRequest): Promise<ValidationErrorResponse> {
    return await fetch("https://identity.clanner.pw/api/users/login", {
        method: "POST",
        credentials: 'include',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    })
        .then((r) => r.json())
        .then((data) => data as ValidationErrorResponse);
}
