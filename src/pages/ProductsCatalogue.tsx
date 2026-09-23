import {ProductCard} from "../components/ProductCard/ProductCard.tsx";
import {getAllProducts} from "../api/products.ts";
import {useEffect, useState} from "react";
import type {Product} from "../models/product.ts";
import {useNavigate} from "react-router-dom";
import {addToCart} from "../api/cart.ts";
import "../components/ProductCatalogue/product-catalogue.css"
async function onAddToCart(productId: number) {
    await addToCart(productId);
}

export function ProductsCatalogue() {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function loadProducts(): Promise<void> {
            const products = await getAllProducts();
            setProducts(products)
        }
        loadProducts();
    }, []);

    return (
        <div>
            <button onClick={() => navigate('/cart')}></button>
            <div className="product-container">
                {products.map((product) => (
                    <div>
                    <ProductCard product={product}
                                 key={product.id}
                    />
                    <button className="add-to-cart-btn" onClick={() => onAddToCart(product.id)}>Add to cart</button>
                    </div>
                        ))}
            </div>
        </div>
    )
}