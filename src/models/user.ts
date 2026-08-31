export interface User{
    id: number;
    name: string;
    balance: number;
    password_hash: string;
    role: string;
}
export interface UserInput{
    name: string;
    password:string;
    email:string;
}
