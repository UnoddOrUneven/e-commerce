import type {Request, Response, NextFunction} from "express";
import * as userRepository from "../users/user.repository"
export async function requireAdmin(req: Request, res: Response,next: NextFunction) {
    const userId = req.user!.userId;
    const user = await userRepository.getUserById(userId);
    if (!user) {
        res.status(401).send({error: "No user found"});
    }
    if (user.role === "admin"){
        next()
    }
    res.status(404).send({error: "Access denied"});


}