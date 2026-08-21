import * as cartsContrroller from "../controllers/carts.controller.ts"
import {Router} from "express";
const router = Router();
router.get("/get-all",cartsContrroller.getAllCarts)
export default router;

