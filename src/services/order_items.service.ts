import * as order_itemsRepository from "../order_items/order_items.repository"
import type {OrderItem, OrderItemInput} from "../models/orderItem.ts"

export async function getAll():Promise<OrderItem[]> {
    return await order_itemsRepository.getAll();
}
export async function createOrderItem(orderItemInput: OrderItemInput): Promise<OrderItem> {
    return await order_itemsRepository.createOrderItem(orderItemInput);
}
export async function getAllItemsOfOrder(orderId:number):Promise<OrderItem[]> {
    return await order_itemsRepository.getAllItemsOfOrder(orderId);
}
