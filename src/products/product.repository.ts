import pool from "../db/pool"

export async function getAll(){
    const result = await pool.query(
        "SELECT * FROM products",
    );
    return result.rows;
}
export default getAll;

