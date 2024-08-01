import "server-only";

import { cache } from "react";

import { verifySession } from "@/modules/auth/actions/stateless-session";

// eslint-disable-next-line no-undef
const apiUrl = process.env.COSMOS_API_URL;

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const res = await fetch(`${apiUrl}/user/find`, {
      method: "POST",
      body: JSON.stringify({ id: session?.id }),
      headers: { "Content-Type": "application/json" },
    });
    return await res.json();
  } catch (error) {
    console.error("Error in authorize:", error);
    throw error;
  }
});
