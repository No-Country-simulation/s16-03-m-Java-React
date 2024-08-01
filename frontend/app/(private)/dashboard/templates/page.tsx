import { cookies } from "next/headers";

import Templates from "@/modules/dashboard/templates";
import { templateService } from "@/modules/dashboard/templates/services/generic";

const Dashboard = async () => {
  const { getAllTemplates } = templateService();

  const cookieId = cookies().get("sessionId")?.value;

  const templates = await getAllTemplates(cookieId);

  return (
    <>
      <Templates templates={templates} />
    </>
  );
};

export default Dashboard;
