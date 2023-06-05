import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";
import { VerifyErrors, verify } from "jsonwebtoken";

export const validatedTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const token: string | undefined = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token");
  }

  const testToken: string = token.split(" ")[1];

  verify(
    testToken,
    String(process.env.SECRET_KEY),
    (error: VerifyErrors | null, decoded: any) => {
      if (error) {
        throw new AppError(error.message, 401);
      }
      res.locals.userTokenInfos = {
        email: decoded.email,
        id: decoded.sub,
      };
      return;
    }
  );

  next();
};
