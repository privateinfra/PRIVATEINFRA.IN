import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
      <WhyChoose />
      <Projects />
      <Gallery />
      <Contact />
    </>
  );
}

export default Home;