import * as ordersController from "../controllers/orders.controller"
import {Router} from "express";
import {authenticate} from "../authenticate/authenticate";
import {requireAdmin} from "../authenticate/requireAdmin"
const router = Router();
router.post("/create-order",authenticate,ordersController.createOrder)
router.post("/set-order-status",authenticate,requireAdmin,ordersController.setOrderStatus)
export default router;   