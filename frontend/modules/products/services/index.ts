import { z } from "zod";

import { ProductSchema } from "../add/schemas/product-schema";

export const productsService = () => {
  const createProduct = async (
    data: z.infer<typeof ProductSchema>
  ): Promise<any[]> => {
    const jsonData = JSON.stringify(data);

    const res = await fetch(`https://cosmosapi.up.railway.app/products/save`, {
      method: "POST",
      body: jsonData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    return result;
  };

  return { createProduct };
};
