import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

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

const socials = [
  { label: "GitHub", href: "https://github.com/Nitesh-N-D", icon: <FiGithub /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/nitesh-n-d-249ab6325", icon: <FiLinkedin /> },
  { label: "Email", href: "mailto:niteshdwaraka@gmail.com", icon: <FiMail /> }
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 28, mass: 0.2 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const existingSections = sections
          .map(id => document.getElementById(id))
          .filter((element): element is HTMLElement => Boolean(element));

        if (existingSections.length === 0) return;

        const navOffset = 96;
        const viewportAnchor = window.scrollY + navOffset + window.innerHeight * 0.22;
        let currentSection = existingSections[0].id;

        for (const section of existingSections) {
          if (viewportAnchor >= section.offsetTop) {
            currentSection = section.id;
          }
        }

        const lastSection = existingSections[existingSections.length - 1];
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
          currentSection = lastSection.id;
        }

        setActive(currentSection);
      });
    };

    updateActiveSection();
    const retryAfterLazyMount = window.setTimeout(updateActiveSection, 350);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(retryAfterLazyMount);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-[1000] h-[var(--navbar-h)] transition-all duration-500 ${
          scrolled
            ? "border-b border-[var(--border-subtle)] bg-[rgba(5,5,7,0.88)] shadow-[0_1px_0_rgba(212,146,42,0.06)] backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent"
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="premium-container flex h-full items-center justify-between px-5">
          <a
            href="#home"
            className="font-display text-[1.2rem] italic text-text-primary transition-transform duration-200 hover:scale-[1.03]"
            data-cursor="hover"
            onClick={() => setMenuOpen(false)}
          >
            N.D. <span className="text-amber-500">Nitesh</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {sections.map(section => {
              const isActive = active === section;
              return (
                <a
                  key={section}
                  href={`#${section}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative font-mono text-[0.78rem] capitalize tracking-[0.1em] transition-colors duration-300 ${
                    isActive ? "text-amber-500" : "text-zinc-300 hover:text-white"
                  }`}
                  data-cursor="hover"
                  onClick={() => setActive(section)}
                >
                  {section}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left bg-amber-500 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-glass)] lg:hidden"
            onClick={() => setMenuOpen(open => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            data-cursor="hover"
          >
            <span className="sr-only">Toggle navigation</span>
            <span
              className={`absolute h-px w-5 bg-text-primary transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-text-primary transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-text-primary transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[1.5px] origin-left bg-grad-amber"
          style={{ scaleX: progress, width: "100%" }}
        />
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[var(--bg-overlay)] px-6 backdrop-blur-3xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="grid gap-5 text-center"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              onClick={event => event.stopPropagation()}
            >
              {sections.map(section => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  className={`font-display text-[2.4rem] italic capitalize leading-none ${
                    active === section ? "text-amber-500" : "text-text-primary"
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  onClick={() => {
                    setActive(section);
                    setMenuOpen(false);
                  }}
                >
                  {section}
                </motion.a>
              ))}
            </motion.div>

            <div className="absolute bottom-10 flex items-center gap-4">
              {socials.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="social-button"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
