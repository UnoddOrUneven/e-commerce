import * as productController from "../controllers/product.controller.ts"
import {Router} from "express";
import {authenticate} from "../authenticate/authenticate.ts";
import {requireAdmin} from "../authenticate/requireAdmin.ts";

const router = Router();
router.get("/get-all",productController.getAllProducts);
router.post("/create-product",authenticate, requireAdmin, productController.createProduct)
export default router;
