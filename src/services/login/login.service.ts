import { Repository } from "typeorm";
import { Tlogin } from "../../interfaces/login.interface";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const loginService = async (body: Tlogin): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: body.email,
  });

  if (!user) {
    throw new AppError("Invalidad email", 401);
  }

  const password: boolean = await compare(body.password, user.password);

  if (!password) {
    throw new AppError("Invalid credencials", 401);
  }

  const token: string = sign(
    {
      email: user.email,
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: String(process.env.EXPIRES_IN) || "1h",
      subject: user.id,
    }
  );

  return token;
};
