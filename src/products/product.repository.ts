import pool from "../db/pool"

export async function getAll() {
    const result = await pool.query(
        "SELECT * FROM products",
    );
    return result.rows;
}

export async function addProduct(name: string, description: string, price: number, stock: number) {
    const result = await pool.query(
        "INSERT INTO products ( name, description, price, stock) VALUES ($1,$2,$3,$4);", [name, description, price, stock]
    );
    return result.rows[0];
}

export async function removeProduct(id: number) {
    const result = await pool.query(
        "DELETE FROM products WHERE id=$1", [id]
    );
    return result.rows[0];
}

export async function increaseStock(id: number, amount: number) {
    await pool.query(
        `
            UPDATE products
            SET stock = stock + ($2)
            WHERE id = $1
        `, [id, amount]);
}

export async function decreaseStock(id: number,amount: number) {
    const result = await pool.query(
        `
        UPDATE products
        SET stock = stock - $2
        WHERE id = $1
        AND stock >= $2
        `,[id, amount]
    );
    return result.rowCount ===1;
}

export async function setStock(id: number, amount: number) {
    await pool.query(
        `
            UPDATE products
            SET stock = $2
            WHERE id = $1
              AND $2 >= 0
        `,[id, amount]
    );
}






