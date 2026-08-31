import type {CartProduct} from "../models/cartProduct.ts";

export async function getUserCart(): Promise<CartProduct[]> {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/carts/get-user-cart-products",
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    return await response.json();
}

export async function addToCart(productId: number): Promise<void> {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/carts/add-product-to-cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({productId}),
    });
    if (!response.ok) {
        throw new Error("Failed to add to cart");
    }


}