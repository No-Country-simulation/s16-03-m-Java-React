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
  price: z.preprocess(
    (val) => (val === "" ? undefined : parseFloat(val as string)),
    z.number().positive({ message: "Debe ser mayor que 0." }).optional()
  ),
  stock: z.preprocess(
    (val) => (val === "" ? undefined : parseFloat(val as string)),
    z.number().positive({ message: "Debe ser mayor que 0." }).optional()
  ),
  discount: z.preprocess(
    (val) => (val === "" ? undefined : parseFloat(val as string)),
    z.number().positive({ message: "Debe ser mayor que 0." }).optional()
  ),
  tag: z.string().min(1, { message: "Este campo es requerido." }),
  color: z.string().min(1, { message: "Este campo es requerido." }),
  category: z.string().min(1, { message: "Este campo es requerido." }),
  description: z.string().min(5, {
    message: "Este campo es requerido.",
  }),
  images: z.array(z.string()).min(1, {
    message: "Debes subir al menos una imagen.",
  }),
});
