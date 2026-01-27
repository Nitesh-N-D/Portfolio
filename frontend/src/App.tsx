import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <PageLoader key="loader" />
      ) : (
        <>
          <Navbar />
   <main
  style={{
    width: "100%",
    overflowX: "hidden",
  }}
>

  <Hero />
  <About />
  <Education />
  <Skills />
  <Projects />
  <Experience />
  <Certifications />
  <Achievements />
  <Contact />
</main>

          <Footer />
        </>
      )}
    </AnimatePresence>
  );
}
