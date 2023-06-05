import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const validatedBodyMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const validated = schema.parse(req.body);
    req.body = validated;

    next();
  };
