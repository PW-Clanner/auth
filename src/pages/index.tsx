import DefaultLayout from "@/layouts/default";
import React from "react";
import {Input} from "@heroui/input";
import {Form} from "@heroui/form";
import {Button} from "@heroui/button";
import {usersStore} from "@/entities/users";
import {UserLoginRequest} from "@/entities/users/model/UserLoginRequest.ts";

export default function IndexPage() {
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [errors, setErrors] = React.useState({});

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        let result = await usersStore.LoginUser(data as UserLoginRequest);
        if (result.success) {
            setErrors({});
            window.location.replace('https://identity.clanner.pw/hydra/authenticate')
        } else {
            setErrors(result.errors);
        }
    };

    return (
        <DefaultLayout>

            <Form
                className="w-full justify-center items-center space-y-4"
                validationErrors={errors}
                onSubmit={onSubmit}
            >
                <Input
                    isRequired
                    label="Имя пользователя"
                    labelPlacement="outside"
                    name="UserName"
                    placeholder="Введите имя пользователя"
                    type="text"
                    value={username}
                    onValueChange={setUsername}
                />
                <Input
                    isRequired
                    label="Пароль"
                    labelPlacement="outside"
                    name="Password"
                    placeholder="Введите пароль"
                    type="password"
                    value={password}
                    onValueChange={setPassword}
                />
                <div className="flex gap-4">
                    <Button className="w-full" color="primary" type="submit">
                        Войти
                    </Button>
                </div>
            </Form>
        </DefaultLayout>
    );
}
