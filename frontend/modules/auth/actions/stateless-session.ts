import "server-only";

import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { UserType } from "@/types";

export type SessionPayload = {
  value?: string | number;
  expiresAt?: Date;
};

// eslint-disable-next-line no-undef
const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1hr")
    .sign(key);
}

export async function decrypt(
  session: string | undefined = ""
): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export const createSession = async (user: UserType) => {
  const { id, jwtToken } = user;

  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  const sessionToken = await encrypt({ value: jwtToken, expiresAt });
  const sessionId = await encrypt({ value: id, expiresAt });

  cookies().set("sessionToken", sessionToken, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  cookies().set("sessionId", sessionId, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  redirect("/dashboard");
};

export async function verifySession() {
  const cookie = cookies().get("sessionToken")?.value;
  const id = cookies().get("sessionId")?.value;
  const sessionToken = await decrypt(cookie);
  const sessionId = await decrypt(id);

  if (!sessionToken?.value && !sessionId?.value) {
    redirect("/login");
  }

  return {
    isAuth: true,
    id: Number(sessionId?.value),
    token: sessionToken?.value,
  };
}

export async function updateSession() {
  const session = cookies().get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export function deleteSession() {
  cookies().delete("sessionId");
  cookies().delete("sessionToken");
  redirect("/login");
}
