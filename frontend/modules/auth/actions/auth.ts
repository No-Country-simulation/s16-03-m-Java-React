"use server";

import { redirect } from "next/navigation";

import { createSession, deleteSession } from "./stateless-session";
import { LoginSchema, RegisterSchema } from "@/modules/auth/schemas";

// eslint-disable-next-line no-undef
const apiUrl = process.env.COSMOS_API_URL;

export type FormState =
  | {
      errors?: {
        name?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
        phoneNumber?: string[];
        userName?: string[];
      };
      message?: string;
    }
  | undefined;

export const registerAction = async (
  state: FormState,
  formData: FormData
): Promise<FormState> => {
  const validatedFields = RegisterSchema.safeParse({
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    phoneNumber: formData.get("phoneNumber"),
    userName: formData.get("userName"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await fetch(`${apiUrl}/user`, {
      method: "POST",
      body: JSON.stringify(validatedFields.data),
      headers: { "Content-Type": "application/json" },
    });
    const user = await res.json();

    //TODO: Capturar respuesta en caso el correo ó nombre de usuario sean iguales

    if (!user) {
      return {
        message: "An error occurred while creating your account.",
      };
    }

    await createSession(user);
  } catch (error) {
    console.error("Error in authorize:", error);
    throw error;
  }
};

export const loginAction = async (
  state: FormState,
  formData: FormData
): Promise<FormState> => {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const errorMessage = { message: "Invalid login credentials." };

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await fetch(`${apiUrl}/login`, {
      method: "POST",
      body: JSON.stringify(validatedFields.data),
      headers: { "Content-Type": "application/json" },
    });
    const user = await res.json();

    if (!res.ok || !user) {
      console.error("ERROR FINDING USER: ", res.statusText);
      return errorMessage;
    }

    await createSession(user);
  } catch (error) {
    console.error("Error in authorize:", error);
    throw error;
  }
};

export const logout = async () => {
  deleteSession();
};
