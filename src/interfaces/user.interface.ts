import { z } from "zod";
import {
  createUserSchema,
  returnListUserSchema,
  returnUserSchema,
} from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

type TuserCreate = z.infer<typeof createUserSchema>;
type TuserReturn = z.infer<typeof returnUserSchema>;
type TuserReturnList = z.infer<typeof returnListUserSchema>;
type TuserUpdate = DeepPartial<TuserCreate>;

export { TuserCreate, TuserReturn, TuserReturnList, TuserUpdate };
