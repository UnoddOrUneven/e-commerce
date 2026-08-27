import * as order_itemsService from "../services/order_items.service"
import type {OrderItem,OrderItemInput} from "../models/orderItem.ts"
import type {Request,Response} from "express"
export async function createOrderItem(req:Request, res:Response) {
    const {order_id: orderId,product_id: productId,quantity,price} = req.body;
    const userId = req.user!.userId;
    const orderItemInput: OrderItemInput = {orderId: orderId,productId: productId,quantity,price,userId}
    const orderItem: OrderItem = await order_itemsService.createOrderItem(orderItemInput);
    res.status(201).json(orderItem);
}
export async function getAllItemsOfOrder(req:Request, res:Response) {
    const {order_id} = req.body;
    const orderItems:OrderItem[] = await order_itemsService.getAllItemsOfOrder(order_id);
    res.status(200).json(orderItems);
}
