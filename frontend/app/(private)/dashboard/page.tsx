import { getUser } from "@/modules/auth/actions/dal";
import Init from "@/modules/dashboard/init";

const Dashboard = async () => {
  const user = await getUser();

  console.log("user=>", user);

  const id = "8";
  const formData: FormData = new FormData();

  formData.append("user", id);
  formData.append("user2", id);

  console.log("formData=>", formData);

  const objectt = {
    id: "8",
  };

  return (
    <div>
      User:{JSON.stringify(objectt)}
      <Init />
    </div>
  );
};

export default Dashboard;
