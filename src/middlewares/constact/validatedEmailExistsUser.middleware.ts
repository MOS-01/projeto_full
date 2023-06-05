import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

export const validatedEmailExistUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;
  const userId: string = res.locals.userTokenInfos.id;

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  if (email) {
    const findEmailExists = await contactRepository.findOne({
      where: {
        email: email,
        user: {
          id: userId,
        },
      },
      withDeleted: true,
    });

    if (findEmailExists) {
      if (req.method === "POST") {
        throw new AppError("Contact already exists", 409);
      }

      if (req.method === "PATCH") {
        if (!(req.params.id === findEmailExists.id)) {
          throw new AppError("Contact already exists", 409);
        }
      }
    }
  }
  next();
};
