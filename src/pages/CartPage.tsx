import {getUserCart} from "../api/cart"
import {useEffect, useState} from "react";
import type {Product} from "../models/product.ts";
import { useNavigate } from "react-router-dom";
import {ProductCard} from "../components/ProductCard/ProductCard.tsx";
import type {CartProduct} from "../models/cartProduct.ts";

export function CartPage(){
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function loadCart() {
            const cart:CartProduct[] = await getUserCart();
            setCartProducts(cart);
        }
        loadCart();
    },[])

    return (
        <div>
        {cartProducts.map((product:Product) => (
            <ProductCard product={product} key = {product.id}></ProductCard>
    ))}
    </div>

)
}