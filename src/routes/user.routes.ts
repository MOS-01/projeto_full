import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  retriveContactsUserController,
  retriveUserController,
  updateUserController,
} from "../controllers/users.controller";
import { validatedBodyMiddleware } from "../middlewares/validatedBody.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";
import { validatedEmailExistsMiddleware } from "../middlewares/user/validatedEmailsExists.middleware";
import { validatedTokenMiddleware } from "../middlewares/validatedToken.middleware";
import { validatedPermissionUserMiddleware } from "../middlewares/user/validatedPermissionUser.middleware";
import { validatedUserIdMiddleware } from "../middlewares/user/validatedUserId.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  validatedBodyMiddleware(createUserSchema),
  validatedEmailExistsMiddleware,
  createUserController
);

userRoutes.get(
  "/profile/:id",
  validatedTokenMiddleware,
  validatedUserIdMiddleware,
  validatedPermissionUserMiddleware,
  retriveUserController
);

userRoutes.patch(
  "/profile/:id",
  validatedTokenMiddleware,
  validatedUserIdMiddleware,
  validatedPermissionUserMiddleware,
  validatedBodyMiddleware(updateUserSchema),
  updateUserController
);

userRoutes.delete(
  "/profile/:id",
  validatedTokenMiddleware,
  validatedUserIdMiddleware,
  validatedPermissionUserMiddleware,
  deleteUserController
);

userRoutes.get(
  "/profile/:id/contact",
  validatedTokenMiddleware,
  validatedPermissionUserMiddleware,
  retriveContactsUserController
);

export { userRoutes };
