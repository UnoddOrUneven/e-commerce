import pool from "../db/pool"
import type {User} from "../models/user.ts";
export async function getAll(): Promise<User[]>{
    const result = await pool.query(
        "SELECT * FROM USERS",
    );
    return result.rows;
}

export async function createUser(name: string, password: string){
    const result = await pool.query(
        "INSERT INTO USERS (name,password) VALUES ($1,$2);", [name,password]
    );
    return result.rowCount === 1;
}
