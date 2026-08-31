import type {Product} from "./product.ts";

export type CartProduct = Product & {
    product_quantity: number;
};