"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import SocialMediaButtons from "./social-media-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerAction } from "@/modules/auth/actions/auth";
import { RegisterButton } from "@/modules/auth/components/register-button";

const RegisterForm = () => {
  const [state, action] = useFormState(registerAction, undefined);

  return (
    <div className="flex w-full max-w-[424px] flex-col px-4 lg:px-0">
      <div className="mb-10 w-full">
        <h1 className="text-3xl font-bold ">Crear una cuenta</h1>
      </div>

      <form className="space-y-12" action={action}>
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombres</Label>
            <Input
              id="name"
              name="name"
              className="bg-muted"
              placeholder="Escribe tus nombres"
              type="text"
            />
            {state?.errors?.name && (
              <p className="text-sm text-red-500">{state.errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Apellidos</Label>
            <Input
              id="lastName"
              name="lastName"
              className="bg-muted"
              placeholder="Escribe tus apellidos"
              type="text"
            />
            {state?.errors?.lastName && (
              <p className="text-sm text-red-500">{state.errors.lastName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              className="bg-muted"
              placeholder="Escribe tu e-mail"
              type="email"
            />
            {state?.errors?.email && (
              <p className="text-sm text-red-500">{state.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              name="password"
              className="bg-muted"
              placeholder="Escribe tu contraseña"
              type="password"
            />
            {state?.errors?.password && (
              <p className="text-sm text-red-500">{state.errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Teléfono</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              className="bg-muted"
              placeholder="Escribe tu teléfono"
              type="text"
            />
            {state?.errors?.phoneNumber && (
              <p className="text-sm text-red-500">{state.errors.phoneNumber}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="userName">Nombre de usuario</Label>
            <Input
              id="userName"
              name="userName"
              className="bg-muted"
              placeholder="Escribe tu usuario"
              type="text"
            />
            {state?.errors?.userName && (
              <p className="text-sm text-red-500">{state.errors.userName}</p>
            )}
          </div>
          {state?.message && (
            <p className="text-sm text-red-500">{state.message}</p>
          )}
          <div>
            <RegisterButton />
          </div>
        </div>
      </form>

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
