import type {Cart} from "../models/cart.ts";
import * as cartsRepository from "../carts/carts.repository"
export async function getAll(): Promise<Cart[]> {
    return await cartsRepository.getAllCarts();
}
export async function addToCart(user_id:number, product_id:number) {
    await cartsRepository.addProductToCart(user_id, product_id)
}
export async function removeFromCart(user_id:number, product_id:number) {
    await cartsRepository.removeProductFromCart(user_id, product_id)
}
export async function setQuantity(user_id:number, product_id: number, quantity:number) {
    if (quantity <= 0) {return}
    await cartsRepository.setQuantity(user_id, product_id, quantity)
}

