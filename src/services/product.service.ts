import * as productRepository from "../products/product.repository"
import type {Product, ProductInput} from "../models/product.ts";

export async function getAllProducts(): Promise<Product[]> {
    return await productRepository.getAll();
}

export async function addProduct(product: ProductInput) {
    await productRepository.addProduct(
        product.name,
        product.description,
        product.price,
        product.stock
    )
}

export async function removeProduct(id: number) {
    await productRepository.removeProduct(id);
}
export async function setStock(id: number, newStock:number) {
    if (newStock <=0){return;}
    await productRepository.setStock(id, newStock);
}
