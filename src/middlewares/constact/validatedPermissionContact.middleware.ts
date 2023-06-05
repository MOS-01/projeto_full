import { Request, Response, NextFunction } from "express";
import { Contact } from "../../entities/contact.entities";
import { AppError } from "../../error";

export const validatedPermissionContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contact: Contact = res.locals.contact;
  const userId: string = res.locals.userTokenInfos.id;

  if (contact.user.id !== userId) {
    throw new AppError("Insuficient permission", 403);
  }

  next();
};
