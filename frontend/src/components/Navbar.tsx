import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const sections = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "experience",
  "certifications",
  "achievements",
  "contact"
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.32;
      let currentSection = sections[0];

      sections.forEach(id => {
        const element = document.getElementById(id);
        if (!element) return;

        const sectionTop = element.offsetTop;
        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      });

      setActive(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <motion.nav
        className="fixed inset-x-0 top-0 z-[1100] px-3 py-3 sm:px-4 sm:py-4 md:px-6"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div
          className={`premium-container flex items-center justify-between gap-3 rounded-[1.6rem] border px-4 py-3 transition duration-300 sm:gap-4 sm:rounded-full sm:px-5 md:px-6 ${
            scrolled
              ? "border-white/10 bg-slate-950/75 shadow-2xl backdrop-blur-2xl"
              : "border-white/5 bg-white/[0.03] backdrop-blur-xl"
          }`}
        >
          <a href="#home" className="group flex min-w-0 flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-100 sm:text-sm sm:tracking-[0.2em]">
              Nitesh N D
            </span>
            <span className="hidden text-xs text-slate-400 transition duration-300 group-hover:text-slate-200 sm:block">
              Full Stack Engineer
            </span>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {sections.map(section => {
              const isActive = active === section;
              return (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium capitalize transition duration-300 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-full border border-blue-400/20 bg-blue-500/10"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{section}</span>
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 backdrop-blur-xl sm:h-11 sm:w-11 lg:hidden"
            onClick={() => setMenuOpen(open => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-x-3 top-[4.7rem] z-[1090] max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-[28px] border border-white/10 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-2xl sm:inset-x-4 sm:top-20 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="grid gap-2">
              {sections.map(section => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium capitalize transition duration-300 ${
                    active === section
                      ? "bg-blue-500/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => {
                    setActive(section);
                    setMenuOpen(false);
                  }}
                >
                  {section}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
