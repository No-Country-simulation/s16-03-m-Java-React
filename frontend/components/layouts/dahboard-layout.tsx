"use client";

import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import { Layout } from "@/components/layouts";
import Header from "@/modules/dashboard/components/header";
import Sidebar from "@/modules/dashboard/components/sidebar";
import Footer from "@/modules/marketing/components/footer-landing";

type Props = {
  children: ReactNode;
};
const DashboardLayout = ({ children }: Props) => {
  const pathName = usePathname();
  const showSidebar = pathName !== "/dashboard/templates/editor";

  return (
    <>
      <Header />
      <Layout variant={showSidebar ? "width_sidebar" : "simple"}>
        <Sidebar />
        <Layout asChild>
          <main>{children}</main>
        </Layout>
      </Layout>
      <Footer />
    </>
  );
};

export default DashboardLayout;
