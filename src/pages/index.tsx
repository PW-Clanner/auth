import DefaultLayout from "@/layouts/default";
import React, {FormEvent} from "react";
import {Input} from "@heroui/input";
import {Form} from "@heroui/form";
import {Button} from "@heroui/button";
import {usersStore} from "@/entities/users";
import {UserLoginRequest} from "@/entities/users/model/userLoginRequest.ts";

export default function IndexPage() {
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [submitted, setSubmitted] = React.useState(null);
    const [errors, setErrors] = React.useState({});

    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.debug("debug");
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.debug(data);
        let result = await usersStore.LoginUser(data as UserLoginRequest);
        console.debug(result);

        // setErrors({});
        // setSubmitted(data);
    };

    return (
        <DefaultLayout>

            <Form
                className="w-full justify-center items-center space-y-4"
                validationErrors={errors}
                onReset={() => setSubmitted(null)}
                onSubmit={(e) => {
                    onSubmit(e);
                }}
            >
                <Input
                    isRequired
                    label="Имя пользователя"
                    labelPlacement="outside"
                    name="username"
                    placeholder="Введите имя пользователя"
                    type="text"
                    value={username}
                    onValueChange={setUsername}
                />
                <Input
                    isRequired
                    label="Пароль"
                    labelPlacement="outside"
                    name="password"
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
