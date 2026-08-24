import pool from "../db/pool"
import type {User} from "../models/user.ts";
export async function getAll(): Promise<User[]>{
    const result = await pool.query(
        "SELECT * FROM USERS",
    );
    return result.rows;
}

export async function createUser(name: string, password: string):Promise<User> {
    const result = await pool.query(
        "INSERT INTO USERS (name,password) VALUES ($1,$2);", [name,password]
    );
    return result.rows[0];
}

export async function setWallet(userId: number, balance: number){
     await pool.query(
        `
        UPDATE users
        SET wallet = $2
        WHERE id = $1
        AND $2 >= 0
        `,[userId, balance]
    )
}
