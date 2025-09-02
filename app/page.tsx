import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Programs from "@/components/Programs";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
