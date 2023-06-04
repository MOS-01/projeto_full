import { Repository } from "typeorm";
import { TuserReturn } from "../../interfaces/user.interface";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { returnUserSchema } from "../../schemas/user.schema";

export const retriveProfileUserService = async (
  userId: string
): Promise<TuserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  let user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  return returnUserSchema.parse(user);
};
