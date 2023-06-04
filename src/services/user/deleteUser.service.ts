import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";

export const deleteUserService = async (user: User): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  await userRepository.softRemove(user);
};
