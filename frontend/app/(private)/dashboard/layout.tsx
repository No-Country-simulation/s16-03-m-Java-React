import { ReactNode } from "react";

import { Layout } from "@/components/layouts";
import Header from "@/modules/dashboard/components/header";
import Sidebar from "@/modules/dashboard/components/sidebar";
import Footer from "@/modules/marketing/components/footer-landing";
import { poppins } from "@/styles/font";

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <Layout variant="width_sidebar">
          <Sidebar />
          <Layout asChild>
            <main>{children}</main>
          </Layout>
        </Layout>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
