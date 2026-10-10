
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Office from "./components/Office";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#263B32]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Office />
      <FAQ />
      <Contact />
    </main>
  );
}
