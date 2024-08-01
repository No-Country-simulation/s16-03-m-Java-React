"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import SocialMediaButtons from "./social-media-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction } from "@/modules/auth/actions/auth";
import { LoginButton } from "@/modules/auth/components/login-button";

const LoginForm = () => {
  const [state, action] = useFormState(loginAction, undefined);

  return (
    <div className="flex w-full max-w-[424px] flex-col px-4 lg:px-0">
      <div className="mb-12 w-full">
        <h1 className="text-3xl font-bold">Bienvenido!</h1>
      </div>
      <form action={action}>
        <div className="flex flex-col gap-2">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              className="bg-muted"
              placeholder="Ingresa tu e-mail"
              type="email"
            />
            {state?.errors?.email && (
              <p className="text-sm text-red-500">{state.errors.email}</p>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              className="bg-muted "
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
            />
            {state?.errors?.password && (
              <p className="text-sm text-red-500">{state.errors.password}</p>
            )}
          </div>
          {state?.message && (
            <p className="text-sm text-red-500">{state.message}</p>
          )}
          <LoginButton />
        </div>
      </form>
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
