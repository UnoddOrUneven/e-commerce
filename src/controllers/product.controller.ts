import * as productService from "../services/product.service"
import type { Request, Response } from "express";
import type {ProductInput} from "../models/product.ts";

export async function getAllProducts(_req: Request, res: Response){
    const allProducts = await productService.getAllProducts();
    res.status(200).json(allProducts);
}

export async function createProduct(req: Request, res: Response): Promise<void> {
    const {name, description, price, stock, imageUrl} = req.body;
    const productInput: ProductInput = {name,description,price,stock,imageUrl};
    res.status(201).json(await productService.addProduct(productInput));
}

