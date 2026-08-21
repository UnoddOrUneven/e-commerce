import type {Cart} from "../models/cart.ts";
import * as cartsRepository from "../carts/carts.repository"
export async function getAll(): Promise<Cart[]> {
    return await cartsRepository.getAllCarts();
}


