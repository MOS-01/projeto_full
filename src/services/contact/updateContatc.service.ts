import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entities";
import {
  TreturnContact,
  TupdateContact,
} from "../../interfaces/contact.interface";
import { AppDataSource } from "../../data-source";
import { returnContactSchema } from "../../schemas/contact.schema";

export const updateContactService = async (
  contact: Contact,
  body: TupdateContact
): Promise<TreturnContact | any> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactUpdate = contactRepository.create({ ...contact, ...body });
  await contactRepository.save(contactUpdate);

  return returnContactSchema.parse(contactUpdate);
};
