"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ProductSchema } from "@/app/(private)/dashboard/products/add/schemas/product-schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Up from "@/public/images/Up.png";

const ProductForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImages((prevImages) => [...prevImages, file]);
      setImagePreviewUrls((prevUrls) => [
        ...prevUrls,
        URL.createObjectURL(file),
      ]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setImages((prevImages) => [...prevImages, file]);
      setImagePreviewUrls((prevUrls) => [
        ...prevUrls,
        URL.createObjectURL(file),
      ]);
      setDragOver(false);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      brand: "",
      code: "",
      price: "",
      discount: "",
      category: "",
      description: "",
      image: "",
    },
  });

  function onSubmit(data: z.infer<typeof ProductSchema>) {
    console.log("data=>", data.image);
  }

  console.log(images);

  return (
    <div className="flex w-full flex-col px-4 py-6 lg:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid">
            <div className="w-full space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-transparent text-base font-light "
                        placeholder="Nombre"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className=" bg-transparent text-base font-light"
                        placeholder="Marca"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-transparent text-base font-light"
                        placeholder="Código"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-transparent text-base font-light"
                        placeholder="Precio"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-transparent text-base font-light"
                        placeholder="Descuento"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-transparent text-base font-light"
                        placeholder="Categoria"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="text-base"
                        placeholder="Descripción del producto"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                //TODO: put a limit to upload images, verify validation on submit
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div
                        className={`border ${
                          dragOver
                            ? "border-destructive-foreground"
                            : "border-gray-200"
                        } rounded-xl px-4 py-10`}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                      >
                        <Input
                          {...field}
                          className="hidden"
                          type="file"
                          id="image"
                          name="image"
                          accept="image/png, image/jpeg"
                          onChange={handleFileChange}
                        />
                        <Image
                          className="mx-auto mb-4"
                          src={Up}
                          alt="up-image"
                        />
                        <label
                          htmlFor="image"
                          className="border-muted-foreground mx-auto block w-40 cursor-pointer rounded border bg-transparent px-4 py-2 text-center text-sm"
                        >
                          Subir Imágenes
                        </label>
                        <div className="mt-4 flex flex-row flex-wrap">
                          {imagePreviewUrls.length > 0 &&
                            imagePreviewUrls.map((url, index) => (
                              <div
                                key={index}
                                className="border-primary m-2 flex w-40 justify-start rounded-sm border p-2"
                              >
                                <img
                                  src={url}
                                  alt="Vista previa"
                                  className="mx-auto max-h-40"
                                />
                              </div>
                            ))}
                        </div>

                        <p className="text-muted-foreground mt-4 text-center text-xs">
                          O arrastra desde el escritorio
                        </p>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button type="submit" size="lg" className="mx-auto rounded-full">
              Añadir Producto
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
