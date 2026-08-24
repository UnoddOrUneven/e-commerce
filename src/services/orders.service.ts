import * as ordersRepository from "../orders/orders.repository"
import type {Order, OrderInput, Status} from "../models/order"
export async function getAllOrders(): Promise<Order[]> {
    return ordersRepository.getAllOrders()
}
export async function createOrder(order:OrderInput):Promise<Order> {
    return ordersRepository.createOrder(order)
}
export async function setStatus(id: number, status:Status):Promise<boolean> {
    return ordersRepository.setOrderStatus(id, status)
}


