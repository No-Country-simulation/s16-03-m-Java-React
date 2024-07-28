import { z } from "zod";

export const GroupSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre es requerido",
  }),
  description: z.string().min(5, {
    message: "La descripción es requerida",
  }),
  products: z.array(z.string()).nonempty({
    message: "Debes seleccionar al menos un producto",
  }),
});
