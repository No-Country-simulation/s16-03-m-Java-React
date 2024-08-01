import { cookies } from "next/headers";

import { decrypt } from "@/modules/auth/actions";
import { TemplateType } from "@/modules/dashboard/templates/types";

export const editorService = () => {
  // eslint-disable-next-line no-undef
  const apiUrl = process.env.COSMOS_API_URL || "http://localhost:3000";
  const cookieId = cookies().get("sessionId")?.value;

  const getTemplateBySlug = async (slug: string): Promise<TemplateType> => {
    const decryptId = await decrypt(cookieId);

    const body = {
      slug: slug,
      usuarioId: decryptId?.value?.toString(),
    };

    const res = await fetch(`${apiUrl}/template/find/slug`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    return data;
  };

  return { getTemplateBySlug };
};
