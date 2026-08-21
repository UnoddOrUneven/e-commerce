import * as cartsService from "../services/carts.service.ts"
import type {Request, Response} from "express";
import type {Cart} from "../models/cart.ts";

export async function getAllCarts(_req: Request, res: Response) {
    const carts: Cart[] = await cartsService.getAll();
    res.status(200).json(carts);
}
