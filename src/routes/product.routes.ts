import * as productController from "../controllers/product.controller.ts"
import {Router} from "express";
const router = Router();
router.get("/get-all", productController.getAllProducts);
export default router;