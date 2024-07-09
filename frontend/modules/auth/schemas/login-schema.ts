import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: 'Este campo es requerido.',
    })
    .email('Este no es un email válido.'),
})
