import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      <Contact/>
    </main>
  );
}
