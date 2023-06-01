import { Request, Response } from "express";
import { EntitySchemaOptions } from "typeorm";

const createUserController = async (req: Request, res: Response) => {
  return res.status(201).json("Usuário criado");
};

export { createUserController };
