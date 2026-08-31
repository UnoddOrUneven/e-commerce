import * as cartsContrroller from "../controllers/carts.controller.ts"
import {Router} from "express";
import {authenticate} from "../authenticate/authenticate.ts";

const router = Router();
router.get("/get-user-cart-products", authenticate, cartsContrroller.getCartProductsByUserId)
router.post("/add-product-to-cart", authenticate, cartsContrroller.addProductToCart)
router.post("/remove-product-from-cart", authenticate, cartsContrroller.removeProductFromCart)
router.post("/set-product-quantity", authenticate, cartsContrroller.setQuantity)
export default router;

