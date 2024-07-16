import { ReactNode } from "react";

import { Layout } from "@/components/layouts";
import Sidebar from "@/modules/dashboard/components/sidebar";
import { poppins } from "@/styles/font";

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout variant="width_sidebar">
          <Sidebar />
          <Layout asChild>{children}</Layout>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
