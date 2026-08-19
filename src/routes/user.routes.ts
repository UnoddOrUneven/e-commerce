import * as userController from "../controllers/user.controller.ts"
import {Router} from "express";
const router = Router();
router.post("/create", userController.createUser);
router.get("/get-all", userController.getAllUsers);
export default router;
