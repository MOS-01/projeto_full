import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

export const ValidatedContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;
  const userId: string = res.locals.userTokenInfos.userId;

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  if (email) {
    const findEmail = await contactRepository.findOne({
      where: {
        email: email,
        user: {
          id: userId,
        },
      },
      withDeleted: true,
    });

    if (findEmail) {
      if (req.method === "POST") {
        throw new AppError("Email already exists in Client", 409);
      }
      if (req.method === "PATCH") {
        if (!(req.params.id === findEmail.id))
          throw new AppError("Email already exists in Client", 409);
      }
    }
  }
  next();
};
