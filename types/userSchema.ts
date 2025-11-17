import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.string().email("Email tidak valid"),
  username: z.string().min(1, "Username wajib diisi").optional(),
  password: z.string().min(6, "Password minimal 6 karakter"),
  role: z.enum(["CLIENT", "COMPANY", "ADMIN"]),
});

export type RegisterUserType = z.infer<typeof registerUserSchema>;
