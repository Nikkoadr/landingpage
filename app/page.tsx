import Hero from "@/components/welcome/Hero";
import About from "@/components/welcome/About";
import Facilities from "@/components/welcome/Facilities";
import Programs from "@/components/welcome/Programs";
import News from "@/components/welcome/News";
import Contact from "@/components/welcome/Contact";
import Header from "@/components/welcome/Header";
import Footer from "@/components/welcome/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Facilities />
      <Programs />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
