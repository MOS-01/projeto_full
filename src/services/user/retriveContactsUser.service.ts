import { Repository } from "typeorm";
import { TreturnListaContact } from "../../interfaces/contact.interface";
import { Contact } from "../../entities/contact.entities";
import { AppDataSource } from "../../data-source";
import { returnListContactSchema } from "../../schemas/contact.schema";

export const retriveContactsUserService = async (
  userId: string
): Promise<TreturnListaContact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findListContacts: Contact[] = await contactRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  return returnListContactSchema.parse(findListContacts);
};
