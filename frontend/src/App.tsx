import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Certifications = lazy(() => import("./components/Certifications"));
const Achievements = lazy(() => import("./components/Achievements"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback() {
  return <div className="premium-section"><div className="premium-container h-24" /></div>;
}

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
        <div className="app-shell">
          <div className="animated-grid" aria-hidden="true" />
          <div className="ambient-orb ambient-orb-left" aria-hidden="true" />
          <div className="ambient-orb ambient-orb-right" aria-hidden="true" />
          <div className="ambient-orb ambient-orb-bottom" aria-hidden="true" />
          <CursorGlow />
          <ScrollProgress />
          <Navbar />

          <main>
            <Suspense fallback={<SectionFallback />}>
              <Hero />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Experience />
              <Certifications />
              <Achievements />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </div>
      )}
    </AnimatePresence>
  );
}
