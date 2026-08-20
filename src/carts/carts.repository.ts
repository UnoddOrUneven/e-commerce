import type {Carts} from "../models/carts"
import pool from "../db/pool"

export async function getAllCarts(): Promise<Carts[]> {
    const response = await pool.query(
        "SELECT * FROM carts"
);
    return response.rows;
}


