import pool from "../db/pool"

export async function findAll(){
    const result = await pool.query(
        "SELECT * FROM products",
    );
    return result.rows;
}
export default findAll;