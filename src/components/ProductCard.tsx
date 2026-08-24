import "./ProductCard.css"
import type {Product} from "../models/product"
export function ProductCard({product}:{product: Product}) {
    return <div className="card">
        <div className="card-name">
        {product.name}
        </div>
        <div className="card-description">{product.description}</div>
        <div className="card-price">{product.price}$</div>
        <div className="card-image"></div>
        <button className="add-to-cart-btn" >Add to cart</button>
    </div>
}

