import { z } from "zod";
import { returnUserSchema } from "./user.schema";

const contactSchema = z.object({
  id: z.string(),
  name: z.string().min(4).max(140),
  email: z.string().email().max(45),
  phone: z
    .string()
    .regex(
      new RegExp(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/),
      "Invalid format, it (99)94444-4444"
    ),
  creatdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
  user: returnUserSchema,
});

const createContactSchema = contactSchema.omit({
  id: true,
  creatdAt: true,
  updatedAt: true,
  deletedAt: true,
  user: true,
});

const updateContactSchema = createContactSchema.partial();

const returnContactSchema = contactSchema.omit({
  deletedAt: true,
  user: true,
});

const returnListContactSchema = returnContactSchema.array();

export {
  contactSchema,
  createContactSchema,
  updateContactSchema,
  returnContactSchema,
  returnListContactSchema,
};
