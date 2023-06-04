import { Repository } from "typeorm";
import { TuserCreate, TuserReturn } from "../../interfaces/user.interface";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { returnUserSchema } from "../../schemas/user.schema";

export const createUserService = async (
  payload: TuserCreate
): Promise<TuserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(payload as User);
  await userRepository.save(user);

  return returnUserSchema.parse(user);
};
