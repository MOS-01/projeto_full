import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

export const validatedEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (req.body.email) {
    const userValidate: User | null = await userRepository.findOne({
      where: {
        email: req.body.email,
      },
      withDeleted: true,
    });

    if (userValidate) {
      if (req.method === "POST") {
        throw new AppError("Email exists", 409);
      }
      if (req.method === "PATCH") {
        if (!(req.params.id === userValidate.id))
          throw new AppError("Email exists", 409);
      }
    }
  }

  next();
};
