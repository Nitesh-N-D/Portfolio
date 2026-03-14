import { useEffect, useRef, useState } from "react";
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
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) return;
    const link = linkRefs.current[active];
    if (link) {
      setIndicator({
        left: link.offsetLeft,
        width: link.offsetWidth
      });
    }
  }, [active, menuOpen]);

  return (
    <>
      <nav className="premium-nav" aria-label="Primary navigation">
        <div className="premium-nav-shell">
          <a href="#home" className="nav-brand" aria-label="Go to home section">
            <span className="nav-brand-name">Nitesh N D</span>
            <span className="nav-brand-role">Full Stack Developer</span>
          </a>

          <div className="nav-links">
            {sections.map(section => (
              <a
                key={section}
                href={`#${section}`}
                ref={element => {
                  linkRefs.current[section] = element;
                }}
                className={`nav-link${active === section ? " is-active" : ""}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            {!menuOpen && (
              <motion.span
                className="nav-indicator"
                animate={{ left: indicator.left, width: indicator.width }}
                transition={{ type: "spring", stiffness: 340, damping: 28 }}
              />
            )}
          </div>

          <button
            className="menu-btn"
            type="button"
            onClick={() => setMenuOpen(open => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {sections.map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={`mobile-link${active === section ? " is-active" : ""}`}
                onClick={() => {
                  setActive(section);
                  setMenuOpen(false);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
