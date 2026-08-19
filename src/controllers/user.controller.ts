import * as userService from "../services/user.service.ts";
import type { Request, Response } from "express";
export async function createUser(req: Request,res: Response){
    const {name, password} = req.body;
    const user = await userService.createUser(name, password);
    res.status(201).json(user);
}
export async function getAllUsers(req: Request,res: Response){
    const allUsers = await userService.getAllUsers();
    res.status(200).json(allUsers);
}


