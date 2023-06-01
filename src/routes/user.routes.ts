import { Router } from "express";
import { createUserController } from "../controllers/users.controller";

const userRoutes = Router();

userRoutes.post("", createUserController);

export { userRoutes };
