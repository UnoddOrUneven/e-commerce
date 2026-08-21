import * as userRepository from "../users/user.repository.ts";
import type {User,UserInput} from "../models/user.ts";
export async function createUser(user:UserInput) {
    const passwordHash = await hashPassword(user.password);
    return userRepository.createUser(user.name, passwordHash);
}
async function hashPassword(password: string): Promise<string> {
    return (password); // stub
}
export async function getAllUsers():Promise<User[]> {
    return await userRepository.getAll();
}
