import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Type from "@/components/home/Type";
import Header from "@/components/ui/Header";
import WhyUs from "@/components/home/WhyUs";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Process />
      <Type />
      <WhyUs/>
      <Footer />
    </>
  );
}
