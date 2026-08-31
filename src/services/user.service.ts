import * as userRepository from "../users/user.repository.ts";
import type {User,UserInput} from "../models/user.ts";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export async function createUser(user:UserInput):Promise<User> {
    const passwordHash = await hashPassword(user.password);
    return userRepository.createUser(user.name, passwordHash,user.email);
}
async function hashPassword(password: string): Promise<string> {
    return  bcrypt.hash(password,10)
}
export async function getAllUsers():Promise<User[]> {
    return await userRepository.getAll();
}
export async function login(password:string,email:string):Promise<string|void> {
    const user:User|undefined = await userRepository.getUserByEmail(email);
    if (!user) {
        throw new Error("User not found");
    }
    if (await bcrypt.compare(password,user.password_hash)){
        return jwt.sign({userId:user.id},process.env.JWT_SECRET!,{expiresIn:"1h"});
    }
}