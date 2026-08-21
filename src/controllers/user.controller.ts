import * as userService from "../services/user.service.ts";
import type {UserInput} from "../models/user.ts"
import type { Request, Response } from "express";
export async function createUser(req: Request,res: Response){
    const {name, password} = req.body;
    const userInput: UserInput = {name, password};
    const user = await userService.createUser(userInput);
    res.status(201).json(user);
}
export async function getAllUsers(_req: Request,res: Response){
    const allUsers = await userService.getAllUsers();
    res.status(200).json(allUsers);
}


