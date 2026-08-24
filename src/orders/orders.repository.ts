import type {Order, OrderInput, Status} from "../models/order.ts"
import pool from "../db/pool"

export async function getAllOrders(): Promise<Order[]> {
    const response = await pool.query(
        `
            SELECT *
            FROM orders
        `
    );
    return response.rows;
}

export async function createOrder(order: OrderInput): Promise<Order> {
    const result = await pool.query(
        `
            INSERT INTO orders (user_id, status)
            VALUES ($1, $2);
        `, [order.user_id, order.status]
    )
    return result.rows[0];
}

export async function removeOrder(id: number) {
    await pool.query(
        `
        DELETE FROM orders
        WHERE id = $1
        `,[id]
    )
}
export async function setOrderStatus(id: number, status: Status ) {
    const response = await pool.query(
        `
        UPDATE orders 
        SET status = $2
        WHERE id = $1
        RETURNING status
        `,[id,status]
    );
    return response.rows[0]?.status === status;
}

