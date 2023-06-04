import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";

export const deleteContactService = async (contact: Contact): Promise<void> => {
  const userRepository = AppDataSource.getRepository(Contact);
  await userRepository.delete({ id: contact.id });
};
