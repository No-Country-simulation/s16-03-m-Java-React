"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { ProductSchema } from "@/modules/products/add/schemas/product-schema";

type ProductFormValues = z.infer<typeof ProductSchema>;

const onSubmit: SubmitHandler<ProductFormValues> = (data) => {
  console.log(data);
};

const Products: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(ProductSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-item mx-auto my-4 flex w-72 flex-col">
        <label htmlFor="category"></label>
        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <select
              id="category"
              className="text-primary border-primary rounded-xl border p-1 text-center text-base font-light"
              {...field}
            >
              <option value="">Seleccionar grupo</option>
              <option value="category1">Grupo 1</option>
              <option value="category2">Grupo 2</option>
              <option value="category3">Grupo 3</option>
            </select>
          )}
        />
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>
    </form>
  );
};

export default Products;
