import { Request, Response } from "express";
import { Tlogin } from "../interfaces/login.interface";
import { loginService } from "../services/login/login.service";

export const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: Tlogin = req.body;
  const token: string = await loginService(body);

  return res.status(200).json({ token: token });
};
