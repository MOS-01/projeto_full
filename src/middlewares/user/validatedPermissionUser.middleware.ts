import { Request, Response, NextFunction } from "express";
import { AppError } from "../../error";
export const validatedPermissionUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userIdParams: string = req.params.id;
  const userTokenId: string = res.locals.userTokenInfos.id;

  if (userIdParams !== userTokenId) {
    throw new AppError("Insufficient permission", 403);
  }

  next();
};
