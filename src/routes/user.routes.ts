import * as userController from "../controllers/user.controller.ts"
import {Router} from "express";
import {authenticate} from "../authenticate/authenticate.ts";
import {requireAdmin} from "../authenticate/requireAdmin.ts";

const router = Router();
router.post("/create", userController.createUser);
router.get("/get-all",authenticate,requireAdmin,userController.getAllUsers);
router.post("/login",userController.login);
export default router;
