import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";

export default function Home() {
  return (
    <main className="mx-auto  min-h-screen max-w-[1800px] overflow-hidden bg-[#f4f3ef]   ">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
