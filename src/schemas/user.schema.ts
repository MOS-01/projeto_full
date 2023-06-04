import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  name: z.string().min(4).max(140),
  email: z.string().email().max(45),
  phone: z
    .string()
    .regex(
      new RegExp(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/),
      "Invalid format, it (99)94444-4444"
    ),
  password: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "Uppercase character")
    .regex(new RegExp(".*[a-z].*"), "Lowercase character")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "Special character"
    )
    .min(6)
    .max(32),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const updateUserSchema = createUserSchema.partial();

const returnUserSchema = userSchema.omit({
  password: true,
  deletedAt: true,
});

const returnListUserSchema = returnUserSchema.array();

export {
  userSchema,
  createUserSchema,
  updateUserSchema,
  returnUserSchema,
  returnListUserSchema,
};
