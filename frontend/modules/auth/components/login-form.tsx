"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "../schemas";
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
import { Button } from "@/components/ui/button";
import SocialMediaButtons from "./social-media-button";
import Link from "next/link";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof LoginSchema>) {
    console.log(data);
  }

  return (
    <div className="flex w-full max-w-[424px] flex-col px-4 lg:px-0">
      <div className="mb-12 w-full">
        <h1 className="text-3xl font-bold">Bienvenido!</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid">
            <div className="w-full space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-muted "
                        placeholder="Escribe tu e-mail"
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-muted"
                        placeholder="Escribe tu contraseña"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              asChild
              variant="link"
              className="ml-auto mt-2 p-0 text-[13px]"
            >
              <Link href="#">Olvidaste tu contraseña?</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="mx-auto w-full rounded-full"
            >
              Ingresar
            </Button>
          </div>
        </form>
      </Form>
      <SocialMediaButtons />
      <p className="text-foreground mt-10 text-center text-sm">
        ¿Todavía no tenés cuenta?
        <Link
          href="/register"
          className="text-secondary-foreground ml-2 font-semibold hover:underline"
        >
          Regístrate ahora.
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
