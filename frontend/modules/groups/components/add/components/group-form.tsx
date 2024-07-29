"use client";

import React, { useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ButtonsAdd from "@/modules/groups/components/add/components/buttons-add";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/modules/groups/components/add/components/select/multi-select";
import SuccessDialog from "@/modules/groups/components/add/components/success-dialog";
import { GroupSchema } from "@/modules/groups/components/add/schema/data-group";
import Logonav from "@/public/images/Logonav.png";

const GroupForm = () => {
  const [, /*products*/ setProducts] = useState([]);
  const [, /*formData*/ setFormData] = useState<z.infer<
    typeof GroupSchema
  > | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof GroupSchema>>({
    resolver: zodResolver(GroupSchema),
    defaultValues: {
      name: "",
      description: "",
      products: [],
    },
  });

  const onSubmit = async (data: z.infer<typeof GroupSchema>) => {
    setFormData(data);
    setIsLoading(true);
    setTimeout(() => {
      setShowSuccessDialog(false);
    }, 3000);
    try {
      //TODO enviar data al backend
      const res = await fetch("api/groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        throw new Error("Error al enviar el grupo creado");
      }
      const result = await res.json();
      console.log("Grupo enviado: ", result);
      setShowSuccessDialog(true);
    } catch (error) {
      console.error("Error al enviar el grupo creado", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setShowSuccessDialog(false);
      }, 3000);
      form.reset();
    }
  };
  //fetch que obtiene los productos de la api
  useEffect(() => {
    fetch("https://api.example.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const users = [
    {
      name: "Televisor",
    },
    {
      name: "Radio",
    },
    {
      name: "Lavadora",
    },
    {
      name: "Celular",
    },
    {
      name: "playstation",
    },
    {
      name: "refrigerador",
    },
    {
      name: "plancha",
    },
  ];
  return (
    <>
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
                        placeholder="Nombre del grupo"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="border-primary border text-base"
                    placeholder="Describe tu grupo de productos"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="products"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-primary-background">
                  Selecciona uno o más productos
                </FormLabel>
                <MultiSelector
                  onValuesChange={field.onChange}
                  values={field.value}
                >
                  <MultiSelectorTrigger className="border-primary">
                    <MultiSelectorInput />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      {users.map((user) => (
                        <MultiSelectorItem key={user.name} value={user.name}>
                          <div className="flex items-center space-x-2">
                            <span>{user.name}</span>
                          </div>
                        </MultiSelectorItem>
                      ))}
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
                <FormMessage />
              </FormItem>
            )}
          />
          <ButtonsAdd onClick={form.handleSubmit(onSubmit)} />
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

      {isLoading && (
        <div className="mt-6 flex flex-row items-center">
          <Image src={Logonav} alt="Logo cosmos" />
          <p className="text-primary ml-4 text-sm">Enviando...</p>
        </div>
      )}
    </>
  );
};

export default GroupForm;
