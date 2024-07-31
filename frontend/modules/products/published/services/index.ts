import { ProductType } from "../constants/products-data";

export const publishedsService = () => {
  const getPublishedData = async (): Promise<ProductType[]> => {
    const res = await fetch(`https://cosmosapi.up.railway.app/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Error al obtener los datos");
    }

    const result = await res.json();
    return result;
  };

  return { getPublishedData };
};
