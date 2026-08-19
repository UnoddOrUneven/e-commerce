import * as productRepository from "../products/product.repository"
import type {Product} from "../models/product.ts";

export async function getAllProducts(): Promise<Product[]> {
    return await productRepository.getAll();
}

