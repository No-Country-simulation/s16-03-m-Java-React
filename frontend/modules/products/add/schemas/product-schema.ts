import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(1, {
    message: "Este campo es requerido.",
  }),
  brand: z.string().min(1, {
    message: "Este campo es requerido.",
  }),
  code: z.string().min(1, {
    message: "Este campo es requerido.",
  }),
  price: z.string().min(1, { message: "Este campo es requerido." }),
  stock: z.string().min(1, { message: "Este campo es requerido." }),
  discount: z.string().min(1, { message: "Este campo es requerido." }),
  tags: z.string().min(1, { message: "Este campo es requerido." }),
  color: z.string().min(1, { message: "Este campo es requerido." }),
  category: z.string().min(1, { message: "Este campo es requerido." }),
  description: z.string().min(5, {
    message: "Este campo es requerido.",
  }),
  image: z.string().min(1, { message: "Debes subir al menos una imagen." }),
});
