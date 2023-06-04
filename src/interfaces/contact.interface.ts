import { z } from "zod";
import {
  createContactSchema,
  returnContactSchema,
  returnListContactSchema,
} from "../schemas/contact.schema";
import { DeepPartial } from "typeorm";

type TcreateContact = z.infer<typeof createContactSchema>;
type TreturnContact = z.infer<typeof returnContactSchema>;
type TreturnListaContact = z.infer<typeof returnListContactSchema>;
type TupdateContact = DeepPartial<TcreateContact>;

export { TcreateContact, TreturnContact, TreturnListaContact, TupdateContact };
