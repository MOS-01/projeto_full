import { Router } from "express";
import { createUserController } from "../controllers/users.controller";

const userRoutes = Router();

userRoutes.post("", createUserController);

userRoutes.get("/profile/:id");

userRoutes.patch("/profile/:id");

userRoutes.delete("/profile/:id");

userRoutes.get("/profile/:id/contact");

export { userRoutes };
