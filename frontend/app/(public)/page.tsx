import Footer from "@/modules/marketing/components/footer-landing";
import Header from "@/modules/marketing/components/header-landing";
import Layout from "@/modules/marketing/components/landing-layout";
import Navbar from "@/modules/marketing/components/navbar-landing";
import Section from "@/modules/marketing/components/section-landing";

const Home = async () => {
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
};

export default Home;
