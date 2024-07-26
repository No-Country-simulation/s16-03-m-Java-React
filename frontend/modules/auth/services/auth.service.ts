import { z } from "zod";

import { LoginSchema } from "@/modules/auth/schemas";

export const authService = () => {
  const apiUrl = process.env.REACT_APP_SERVICE_API_URL;

  const login = async (formData: z.infer<typeof LoginSchema>) => {
    await fetch(apiUrl + "/login", {
      body: JSON.stringify(formData),
    });
  };

  const register = async (formData: FormData) => {
    await fetch(apiUrl + "/register", {
      body: formData,
    });
  };

  return {
    register,
    login,
  };
};
