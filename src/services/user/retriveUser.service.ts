import { promises } from "dns";
import { User } from "../../entities/user.entities";
import { TuserReturn } from "../../interfaces/user.interface";
import { returnUserSchema } from "../../schemas/user.schema";

export const retriveUserService = async (user: User): Promise<TuserReturn> => {
  return returnUserSchema.parse(user);
};
