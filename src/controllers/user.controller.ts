import * as userService from "../services/user.service.ts";
import type {UserInput, User} from "../models/user.ts"
import type {Request, Response} from "express";

export async function createUser(req: Request, res: Response) {
    const {name, password, email} = req.body;
    const userInput: UserInput = {name, password, email};
    const user: User = await userService.createUser(userInput);
    res.status(201).json(user);
}

export async function getAllUsers(_req: Request, res: Response) {
    const allUsers = await userService.getAllUsers();
    res.status(200).json(allUsers);
}

export async function login(req: Request, res: Response) {
    const {email, password} = req.body;
    const token = await userService.login(password, email);
    if (!token) {
        return res.status(401).json("Invalid Credentials");
    }
    res.status(200).json({token});
}


