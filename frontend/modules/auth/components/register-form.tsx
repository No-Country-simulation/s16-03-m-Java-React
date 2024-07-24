"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SocialMediaButtons from "./social-media-button";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/modules/auth/schemas/register-schema";

const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      userName: "",
      terms: false,
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    console.log(data);
    const { name, lastName, email, password, phoneNumber, userName } = data;

    const res = await fetch(`${process.env.COSMOS_API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastName,
        email,
        password,
        phoneNumber,
        userName,
      }),
    });

    const responseAPI = await res.json();

    if (!res.ok) {
      console.log("errors=>", responseAPI);
      return;
    }

    const responseNextAuth = await signIn("credentials", {
      data,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      console.log("errors=>", responseNextAuth.error.split(","));
      return;
    }

    router.push("/dashboard");
    router.push("/dashboard");
  };

  return (
    <div className="flex max-w-[424px] flex-col items-center justify-center px-4 lg:px-0">
      <div className="mb-10 w-full">
        <h1 className="text-3xl font-bold ">Crear una cuenta</h1>
      </div>
      <Form {...form}>
        <form className="space-y-12" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombres</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted "
                      placeholder="Escribe tus nombres"
                      type="name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellidos</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted "
                      placeholder="Escribe tus apellidos"
                      type="lastName"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted "
                      placeholder="Escribe tu teléfono"
                      type="phoneNumber"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de usuario</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted "
                      placeholder="Escribe tu nombre de usuario"
                      type="userName"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted"
                      placeholder="Escribe un e-mail"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-muted"
                      placeholder="Escribe una contraseña"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <p className=" text-muted-foreground text-xs font-light">
                    Debe tener mas de 8 carácteres
                  </p>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-col space-x-3 ">
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms2"
                          onCheckedChange={field.onChange}
                        />
                        <label
                          htmlFor="terms2"
                          className="text-sm font-medium leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Al crear la cuenta se aceptan los{" "}
                          <strong>términos y condiciones</strong> y nuestra{" "}
                          <strong>política de privacidad</strong>.
                        </label>
                      </div>
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="mx-auto w-full rounded-full"
            >
              Registrarme
            </Button>
          </div>
        </form>
      </Form>
      <SocialMediaButtons />
      <p className="text-foreground mt-10 text-center text-sm">
        ¿Ya tenes una cuenta?
        <Link
          href="/login"
          className="text-secondary-foreground ml-2 font-semibold hover:underline"
        >
          Ingresa ahora.
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
