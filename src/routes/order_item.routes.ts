import * as order_itemsController from "../controllers/order_items.controller";
import {Router} from "express";
import {authenticate} from "../authenticate/authenticate.ts";
import {requireAdmin} from "../authenticate/requireAdmin.ts";

export const router = Router();
router.post("/api/new-item", authenticate,requireAdmin,order_itemsController.createOrderItem);
router.post("/api/get-all-order-items", authenticate,order_itemsController.getAllItemsOfOrder);

