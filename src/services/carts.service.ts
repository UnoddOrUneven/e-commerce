import type {Carts} from "../models/carts";
import * as cartsRepository from "../carts/carts.repository"
export async function getAll(): Promise<Carts[]> {
    return await cartsRepository.getAllCarts();
}


