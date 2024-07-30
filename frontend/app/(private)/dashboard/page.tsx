import { getUser } from "@/modules/auth/actions";
import Init from "@/modules/dashboard/init";

const Dashboard = async () => {
  const user = await getUser();
  return (
    <div>
      <Init />
    </div>
  );
};

export default Dashboard;
