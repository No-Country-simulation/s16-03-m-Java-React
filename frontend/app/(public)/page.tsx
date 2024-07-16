"use client"
import Footer from "@/modules/marketing/components/footer-landing";
import Header from "@/modules/marketing/components/header-landing";
import Navbar from "@/modules/marketing/components/navbar-landing";
import Section from "@/modules/marketing/components/section-landing";
import Layout from "@/modules/marketing/components/landing-layout";

export default function Home() {
  return (
    <>
    <Layout>
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </Layout>
    </>
  );
}
