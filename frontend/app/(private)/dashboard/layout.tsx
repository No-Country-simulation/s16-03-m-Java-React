"use client";

import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import { Layout } from "@/components/layouts";
import Header from "@/modules/dashboard/components/header/index";
import Sidebar from "@/modules/dashboard/components/sidebar";
import Footer from "@/modules/marketing/components/footer-landing";
import { poppins } from "@/styles/font";

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  const pathName = usePathname();
  const showSidebar = pathName !== "/dashboard/templates/editor";
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <Layout
          className="relative top-20 md:top-16"
          variant={showSidebar ? "width_sidebar" : "simple"}
        >
          <Sidebar />
          <Layout asChild variant={!showSidebar ? "simple" : "default"}>
            <main>{children}</main>
          </Layout>
        </Layout>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
