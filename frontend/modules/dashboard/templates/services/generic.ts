import { decrypt } from "@/modules/auth/actions";
import { TemplateType } from "@/modules/dashboard/templates/types";

export const templateService = () => {
  // eslint-disable-next-line no-undef
  const apiUrl = process.env.COSMOS_API_URL || "http://localhost:3000";

  const getAllTemplates = async (
    usuarioId?: string
  ): Promise<TemplateType[]> => {
    const decryptId = await decrypt(usuarioId);

    const body = {
      usuarioId: decryptId?.value?.toString(),
    };

    const res = await fetch(`${apiUrl}/template/find`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    return data;
  };

  return { getAllTemplates };
};
