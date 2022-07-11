import { Router } from "express";
import AuthController from "../controllers/AuthController";

const adminRouter = Router();

adminRouter.post("/login", AuthController.login);

export default adminRouter;
