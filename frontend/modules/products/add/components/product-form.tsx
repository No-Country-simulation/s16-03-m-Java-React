"use client";

import React, { useState } from "react";

import Link from "next/link";
import { CircleX } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ProductSchema } from "@/modules/products/add/schemas/product-schema";
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
import SuccessDialog from "@/modules/products/add/components/success-dialog";


const ProductForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

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
        alert("No puedes subir más de 6 imágenes.");
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
        alert("No puedes subir más de 6 imágenes.");
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


  const onSubmit = (data: z.infer<typeof ProductSchema>) => {
    setShowSuccessDialog(true);
    setTimeout(() => {
      setShowSuccessDialog(false)}, 3000);
      form.reset();
      setImages([]);
      setImagePreviewUrls([]);
    
  };

  return (
    <div className="flex w-full flex-col px-4 py-6 lg:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-transparent text-base font-light border border-primary"
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
                        className="bg-transparent text-base font-light border border-primary"
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
          className="bg-transparent text-base text-muted-foreground font-light border border-primary w-full rounded-lg p-2"
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
          <option value="category3">Automóviles y Motocicletas</option>
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
                        className="bg-transparent text-base font-light border border-primary"
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
                        className="bg-transparent text-base font-light border border-primary"
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
                        className="bg-transparent text-base font-light border border-primary"
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
                          className="border border-primary mx-auto block w-40 cursor-pointer rounded bg-transparent px-4 py-2 text-center text-sm"
                        >
                          Subir Imágenes
                        </label>
                        <p className="hidden md:block text-muted-foreground text-center text-xs mt-4 ">
                          O arrastra desde el escritorio
                        </p>
                        <div className="relative mt-4 grid grid-cols-3 gap-4 w-80 h-60">
                          {imagePreviewUrls.length > 0 &&
                            imagePreviewUrls.map((url, id) => (
                              <div
                                key={id}
                                className="border-primary m-2 flex w-20 h-20 justify-start rounded-sm border p-1"
                              >
                                <button
                              type="button"
                              onClick={() => removeImage(id)}
                              className="absolute"
                            >
                              <CircleX className=" absolute left-16 -top-4 text-primary bg-slate-100 rounded-full" />
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
                        className="bg-transparent text-base font-light border border-primary"
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
                        className="bg-transparent text-base font-light border border-primary"
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
                        className="bg-transparent text-base font-light border border-primary"
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
                      className="text-base border border-primary"
                      placeholder="Descripción del producto"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
  <Button asChild type="submit" size="sm" className="rounded-xl bg-transparent text-muted-foreground border border-primary hover:text-secondary sm:size-lg">
    <Link href="/dashboard">Cancelar</Link>
  </Button>
  <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4">
    <Button type="submit" size="sm" className="rounded-xl bg-transparent font-light text-muted-foreground border border-primary hover:text-secondary sm:size-lg">
      Guardar como borrador
    </Button>
    <Button type="submit" size="sm" className="rounded-xl sm:size-lg">
      Publicar
    </Button>
  </div>
</div>
        </form>
      </Form>
      
        {showSuccessDialog && (
          <div>
            <SuccessDialog isOpen={showSuccessDialog} onClose={() => setShowSuccessDialog(false)} />
          </div>
        )}
      
    </div>
  );
};

export default ProductForm;
