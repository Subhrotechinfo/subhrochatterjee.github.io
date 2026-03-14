import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <main className="grid-bg relative min-h-screen bg-white">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Career />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
