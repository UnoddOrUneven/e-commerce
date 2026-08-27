import * as ordersService from "../services/orders.service"
import type {Order,OrderInput} from "../models/order"
import type {Request,Response} from "express"

export async function getAll(_req: Request, res: Response) {
    const result: Order[] = await ordersService.getAllOrders();
    res.status(200).json(result);
}
export async function createOrder(req: Request, res: Response) {
    const {status} = req.body;
    const userId = req.user!.userId
    const orderInput:OrderInput = {userId,status};
    const order:Order = await ordersService.createOrder(orderInput);
    res.status(201).json(order);
}
export async function setOrderStatus(req: Request, res: Response) {
    const {status,orderId} = req.body;
    await ordersService.setStatus(orderId,status);
    return res.status(204).send();
}

