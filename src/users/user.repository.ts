import pool from "../db/pool"
import type {User} from "../models/user.ts";

export async function getAll(): Promise<User[]> {
    const result = await pool.query(
        "SELECT * FROM USERS",
    );
    return result.rows;
}

export async function getUserById(id: number): Promise<User> {
    const result = await pool.query(
        `SELECT *
         FROM USERS
         WHERE id = $1`, [id]
    )
    return result.rows[0];
}

export async function getUserByEmail(email: string): Promise<User> {
    const result = await pool.query(
        `SELECT *
         FROM USERS
         WHERE email = $1`, [email]
    );
    return result.rows[0];
}

export async function createUser(name: string, passwordHash: string, email: string): Promise<User> {
    const result = await pool.query(
        `INSERT INTO USERS (name, password_hash, email)
         VALUES ($1, $2, $3)
         RETURNING *`, [name, passwordHash, email]);
    return result.rows[0];
}

export async function setWallet(userId: number, balance: number) {
    await pool.query(
        `
            UPDATE users
            SET wallet = $2
            WHERE id = $1
              AND $2 >= 0
        `, [userId, balance]
    )
}
