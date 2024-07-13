import Footer from "@/modules/auth/components/footer-landing";
import Header from "@/modules/auth/components/header-landing";
import Navbar from "@/modules/auth/components/navbar-landing";
import Section from "@/modules/auth/components/section-landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </>
  );
}
