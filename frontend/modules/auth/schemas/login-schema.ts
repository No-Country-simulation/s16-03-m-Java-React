import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Este campo es requerido.",
    })
    .email("Este no es un email válido."),
  password: z
    .string()
    .min(2, {
      message: "Este campo es requerido.",
    })
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});
