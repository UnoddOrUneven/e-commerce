import * as userRepository from "../users/user.repository.ts";
export async function createUser(name: string, password: string) {
    const passwordHash = await hashPassword(password);
    return userRepository.createUser(name, passwordHash);
}

async function hashPassword(password: string): Promise<string> {
    return (password); // stub
}

export async function getAllUsers() {
    return await userRepository.getAll();
}