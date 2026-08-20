import * as cartsService from "../services/carts.service.ts"
import type {Request, Response} from "express";
import type {Carts} from "../models/carts.ts";

export async function getAllCarts(req: Request, res: Response) {
    const carts: Carts[] = await cartsService.getAll();
    res.status(200).json(carts);
}
