import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <TechStack />
        <Process />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
