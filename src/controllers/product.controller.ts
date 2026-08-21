import * as productService from "../services/product.service"
import type { Request, Response } from "express";
export async function getAllProducts(_req: Request, res: Response){
    const allProducts = await productService.getAllProducts();
    res.status(200).json(allProducts);
}

