import { Repository } from "typeorm";
import { User } from "../../entities/user.entities";
import { TuserReturn, TuserUpdate } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { returnUserSchema } from "../../schemas/user.schema";

export const updateUserService = async (
  user: User,
  payload: TuserUpdate
): Promise<TuserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userUpdate = userRepository.create({ ...user, ...payload });
  await userRepository.save(userUpdate);

  return returnUserSchema.parse(userUpdate);
};
