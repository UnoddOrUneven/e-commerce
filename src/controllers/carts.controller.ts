import * as cartsService from "../services/carts.service.ts"
import type {Request, Response} from "express";
import type {Cart} from "../models/cart.ts";
import type {CartProduct} from "../models/cartProduct.ts";

export async function getAllCarts(_req: Request, res: Response) {
    const carts: Cart[] = await cartsService.getAll();
    return res.status(200).json(carts);
}

export async function getCartProductsByUserId(req: Request, res: Response) {
    const userId = req.user!.userId
    const cartProducts:CartProduct[] = await cartsService.getCartByUserId(userId)
    return res.status(200).json(cartProducts);
}
export async function addProductToCart(req:Request, res: Response) {
    const {productId} = req.body;
    const userId = req.user!.userId
    const response = await cartsService.addToCart(userId, productId);
    return res.status(201).json(response);
}
export async function removeProductFromCart(req: Request, res: Response) {
    const {productId} = req.body;
    const userId = req.user!.userId
    await cartsService.removeFromCart(userId, productId);
    return res.status(204);
}

export async function setQuantity(req: Request, res: Response) {
    const {productId,quantity} = req.body;
    const userId = req.user!.userId
    await cartsService.setQuantity(userId, productId, quantity);
    return res.status(204);
}