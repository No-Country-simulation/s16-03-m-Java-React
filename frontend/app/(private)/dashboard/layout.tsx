import { ReactNode } from "react";

import AuthProvider from "@/app/(private)/dashboard/provider";
import { DashboardLayout } from "@/components/layouts";
import { getUser } from "@/modules/auth/actions";
import { poppins } from "@/styles/font";

type Props = {
  children: ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const user = await getUser();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider user={user} />
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
};

export default RootLayout;
