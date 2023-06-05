import { Router } from "express";
import { validatedBodyMiddleware } from "../middlewares/validatedBody.middleware";
import { loginSchema } from "../schemas/login.schema";
import { loginController } from "../controllers/login.controller";

export const loginRouters: Router = Router();

loginRouters.post("", validatedBodyMiddleware(loginSchema), loginController);
