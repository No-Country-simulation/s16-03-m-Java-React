"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import SuccessDialog from "@/modules/products/add/components/success-dialog";
import { ProductSchema } from "@/modules/products/add/schemas/product-schema";
import Up from "@/public/images/Up.png";

const ProductForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [, /*isLoading*/ setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      brand: "",
      code: "",
      price: "",
      stock: "",
      discount: "",
      tags: "",
      color: "",
      category: "",
      description: "",
      image: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (images.length < 6) {
        setImages((prevImages) => [...prevImages, file]);
        setImagePreviewUrls((prevUrls) => [
          ...prevUrls,
          URL.createObjectURL(file),
        ]);
        form.setValue("image", file.name);
        form.clearErrors("image");
      } else {
        alert("No puedes subir más de 6 imágenes."); //TODO: Cambiar por un modal
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (images.length < 6) {
        setImages((prevImages) => [...prevImages, file]);
        setImagePreviewUrls((prevUrls) => [
          ...prevUrls,
          URL.createObjectURL(file),
        ]);
        form.setValue("image", file.name);
        form.clearErrors("image");
        setDragOver(false);
      } else {
        alert("No puedes subir más de 6 imágenes."); //TODO: Cambiar por un modal
      }
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

  const removeImage = (id: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== id));
    setImagePreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== id));
  };
  const convertToFormData = (data: z.infer<typeof ProductSchema>) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key as keyof typeof data] as string);
    }
    images.forEach((image) => {
      formData.append("images", image);
    });
    return formData;
  };

  const onSubmit = async (data: z.infer<typeof ProductSchema>) => {
    setIsLoading(true);
    try {
      const formData = convertToFormData(data);
      const res = await fetch("api/products", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Error al enviar el producto");
      }
      const result = await res.json();
      console.log("Producto enviado: ", result);
      setShowSuccessDialog(true);
      setTimeout(() => {
        setShowSuccessDialog(false);
      }, 3000);
      form.reset();
      setImages([]);
      setImagePreviewUrls([]);
    } catch (error) {
      console.error("Error al enviar el producto", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col px-4 py-6 pb-32 lg:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-1 space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-primary border bg-transparent text-base font-light"
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
                        className="border-primary border bg-transparent text-base font-light"
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
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <select
                        className="text-muted-foreground border-primary w-full rounded-lg border bg-transparent p-2 text-base font-light"
                        {...field}
                      >
                        <option value="" disabled>
                          Categoría
                        </option>
                        <option value="category1">Electrónica</option>
                        <option value="category2">Moda y ropa</option>
                        <option value="category3">Belleza y Salud</option>
                        <option value="category3">Juguetes</option>
                        <option value="category3">Deportes</option>
                        <option value="category3">Alimentos y bebidas</option>
                        <option value="category3">
                          Automóviles y Motocicletas
                        </option>
                        <option value="category3">Libros y Música</option>
                        <option value="category3">Accesorios y Joyas</option>
                        <option value="category3">Hogar y Jardín</option>
                      </select>
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
                        className="border-primary border bg-transparent text-base font-light"
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
                        className="border-primary border bg-transparent text-base font-light"
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
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-primary border bg-transparent text-base font-light"
                        placeholder="Stock"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-none space-y-6">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div
                        className={`border ${
                          dragOver
                            ? "border-primary border-dashed"
                            : "border-primary"
                        } rounded-xl px-4 py-5`}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                      >
                        <Input
                          {...field}
                          className="hidden"
                          type="file"
                          value={undefined}
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
                          className="border-primary mx-auto block w-40 cursor-pointer rounded border bg-transparent px-4 py-2 text-center text-sm"
                        >
                          Subir Imágenes
                        </label>
                        <p className="text-muted-foreground mt-4 hidden text-center text-xs md:block ">
                          O arrastra desde el escritorio
                        </p>
                        <div className="relative mt-4 grid h-60 w-80 grid-cols-3 gap-4">
                          {imagePreviewUrls.length > 0 &&
                            imagePreviewUrls.map((url, id) => (
                              <div
                                key={id}
                                className="border-primary m-2 flex h-20 w-20 justify-start rounded-sm border p-1"
                              >
                                <button
                                  type="button"
                                  onClick={() => removeImage(id)}
                                  className="absolute"
                                >
                                  <CircleX className=" text-primary absolute -top-4 left-16 rounded-full bg-slate-100" />
                                </button>
                                <Image
                                  src={url}
                                  alt="Vista previa"
                                  className="w-20 object-cover"
                                  width={20}
                                  height={20}
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        className="border-primary border bg-transparent text-base font-light"
                        placeholder="Color"
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
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        className="border-primary border bg-transparent text-base font-light"
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
                name="tags"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        className="border-primary border bg-transparent text-base font-light"
                        placeholder="Tags"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="border-primary border text-base"
                      placeholder="Descripción del producto"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <Button
              asChild
              type="submit"
              size="sm"
              className="text-muted-foreground border-primary hover:text-secondary sm:size-lg rounded-xl border bg-transparent"
            >
              <Link href="/dashboard">Cancelar</Link>
            </Button>
            <div className="flex flex-col justify-end gap-2 sm:flex-row sm:gap-4">
              <Button
                type="submit"
                size="sm"
                className="text-muted-foreground border-primary hover:text-secondary sm:size-lg rounded-xl border bg-transparent font-light"
              >
                Guardar como borrador
              </Button>
              <Button
                type="submit"
                size="sm"
                className="sm:size-lg  rounded-xl"
              >
                Publicar
              </Button>
            </div>
          </div>
        </form>
      </Form>
      {showSuccessDialog && (
        <div>
          <SuccessDialog
            isOpen={showSuccessDialog}
            onClose={() => setShowSuccessDialog(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ProductForm;
