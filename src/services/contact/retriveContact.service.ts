import { Contact } from "../../entities/contact.entities";
import { TreturnContact } from "../../interfaces/contact.interface";
import { returnContactSchema } from "../../schemas/contact.schema";

export const retriveContactService = async (
  contact: Contact
): Promise<TreturnContact> => {
  return returnContactSchema.parse(contact);
};
