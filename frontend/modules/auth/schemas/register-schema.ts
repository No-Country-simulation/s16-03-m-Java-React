import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  terms: z.boolean().refine((bool) => bool, {
    message: "Debes aceptar los términos y condiciones",
  }),
});
