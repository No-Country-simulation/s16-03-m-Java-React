import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(8, "Mínimo 8 caracteres"),
  lastName: z.string().min(8, "Mínimo 8 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  phoneNumber: z.string().min(8, "Mínimo 8 caracteres"),
  userName: z.string().min(8, "Mínimo 8 caracteres"),
  /*terms: z.boolean().refine((bool) => bool, {
    message: "Debes aceptar los términos y condiciones",
  }),*/
});
