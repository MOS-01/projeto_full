import { Router } from "express";
import { validatedTokenMiddleware } from "../middlewares/validatedToken.middleware";
import { validatedBodyMiddleware } from "../middlewares/validatedBody.middleware";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contact.schema";
import { ValidatedContactExistsMiddleware } from "../middlewares/constact/validatedContactExists.middleware";
import {
  createContactController,
  deleteContactController,
  retriveContactController,
  updateContactController,
} from "../controllers/contact.controller";
import { validatedPermissionContactMiddleware } from "../middlewares/constact/validatedPermissionContact.middleware";
import { validatedEmailExistsMiddleware } from "../middlewares/user/validatedEmailsExists.middleware";

export const contactRouters: Router = Router();

contactRouters.post(
  "",
  validatedTokenMiddleware,
  validatedBodyMiddleware(createContactSchema),
  validatedEmailExistsMiddleware,
  createContactController
);

contactRouters.get(
  "",
  validatedTokenMiddleware,
  ValidatedContactExistsMiddleware,
  validatedPermissionContactMiddleware,
  retriveContactController
);

contactRouters.patch(
  "/:id",
  validatedTokenMiddleware,
  validatedBodyMiddleware(updateContactSchema),
  ValidatedContactExistsMiddleware,
  validatedPermissionContactMiddleware,
  validatedEmailExistsMiddleware,
  updateContactController
);

contactRouters.delete(
  "/:id",
  validatedTokenMiddleware,
  ValidatedContactExistsMiddleware,
  validatedPermissionContactMiddleware,
  deleteContactController
);
