import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

export const validatedUserIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  next();
};
