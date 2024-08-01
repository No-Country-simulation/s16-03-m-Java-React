import { z } from "zod";

export const ProductSchema = z.object({
  category: z.string().nonempty("Selecciona una categoría"),
});
