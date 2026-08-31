import type {Cart} from "../models/cart.ts"
import pool from "../db/pool"
import type {CartProduct} from "../models/cartProduct.ts";

export async function getAllCarts(): Promise<Cart[]> {
    const response = await pool.query(
        "SELECT * FROM carts"
    );
    return response.rows;
}

export async function getCartByUserId(userId: number): Promise<CartProduct[]> {
    const response = await pool.query(
        `SELECT 
                        p.id,
                        p.name,
                        p.description,
                        p.price,
                        p.stock,
                        c.product_quantity
                        FROM carts c 
                        JOIN products p ON p.id = c.product_id
                        WHERE c.user_id=$1`,
                        [userId]
    );
    return response.rows;
}

export async function addProductToCart(userId: number, productId: number) {
    await pool.query(
        "INSERT INTO carts (product_id,user_id) VALUES ($1,$2);", [productId,userId]
    );
}

export async function removeProductFromCart(userId: number, productId: number) {
    await pool.query(
        `DELETE
         FROM carts
         WHERE user_id = $1
           AND product_id = $2
        `,
        [userId, productId]
    );
}

export async function increaseQuantity(userId: number, productId: number) {
    await pool.query(
        `
            UPDATE carts as c
            SET product_quantity = c.product_quantity + 1
            FROM products AS p
            WHERE c.user_id = $1
              AND c.product_id = $2
              AND p.id = c.product_id
              AND p.stock > c.product_quantity
        `, [userId, productId])
}

export async function decreaseQuantity(userId: number, productId: number) {
    await pool.query(
        `
            UPDATE carts
            SET product_quantity = product_quantity - 1
            WHERE user_id = $1
              AND product_id = $2
              AND product_quantity > 1;
        `, [userId, productId])
}

export async function setQuantity(userId: number, productId: number, amount: number) {
    await pool.query(
        `
        UPDATE carts AS c
        SET product_quantity = $3
        WHERE user_id = $1
        AND c.product_id = $2
        AND $3 >= 0
        `,[userId, productId, amount]
    );
}

