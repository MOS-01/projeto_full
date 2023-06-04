import { Repository } from "typeorm";
import {
  TcreateContact,
  TreturnContact,
} from "../../interfaces/contact.interface";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { returnContactSchema } from "../../schemas/contact.schema";
import { AppError } from "../../error";

export const createContactService = async (
  userId: string,
  payload: TcreateContact
): Promise<TreturnContact> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact = contactRepository.create({ ...payload, user });

  const newContact = await contactRepository.save(contact);

  return returnContactSchema.parse(newContact);
};
