export interface User{
    id: number;
    name: string;
    balance: number;
    passwordHash: string;
    role: string;
}
export interface UserInput{
    name: string;
    password:string;
    email:string;
    role:string;
}
