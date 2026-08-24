import type {OrderItem, OrderItemInput} from "../models/orderItem.ts";
import pool from "../db/pool";

export async function getAll(): Promise<OrderItem[]> {
    const response = await pool.query(
        `
        SELECT * FROM order_items
        `
    )
    return response.rows;
}
export async function getAllItemsOfOrder(orderId:number): Promise<OrderItem[]> {
    const response = await pool.query(
        `
        SELECT * FROM order_items
        WHERE order_id = $1;
        `,[orderId]
    )
    return response.rows;
}


export async function createOrderItem(orderItem: OrderItemInput):Promise<OrderItem> {
    const result = await pool.query(`
        INSERT INTO order_items (user_id, order_id, product_id, product_quantity)
        VALUES ($1, $2, $3, $4);`,
        [orderItem.user_id, orderItem.order_id, orderItem.product_id, orderItem.quantity])
    return result.rows[0];
}
export async function removeOrderItem(order_id:number) {
    await pool.query(`
    DELETE FROM order_items 
    WHERE order_id = $1`,[order_id])
}
