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
  const showSidebar = !pathName.match(/^\/dashboard\/editor\/\w+/);

  console.log("showSidebar=>", showSidebar);

  return (
    <>
      <Header />
      <Layout
        className="relative top-20 md:top-16"
        variant={showSidebar ? "width_sidebar" : "simple"}
      >
        {showSidebar && <Sidebar />}
        <Layout asChild variant={!showSidebar ? "simple" : "default"}>
          <main>{children}</main>
        </Layout>
      </Layout>
      <Footer />
    </>
  );
};

export default DashboardLayout;
