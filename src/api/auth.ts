import type {User,UserInput} from "../models/user.ts";

export async function getToken(email: string, password: string): Promise<string> {
    const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {"Content-Type": "application/json"}
    });
    const data = await response.json();
    return data.token;
}

export async function createNewAccount(UserInput: UserInput): Promise<User> {
    const response = await fetch("/api/users/create", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: UserInput.name,
            email: UserInput.email,
            password: UserInput.password,
        })
    });
    const data = await response.json();
    return data.user;
}