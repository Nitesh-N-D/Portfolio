import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px"
      }
    );

    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={styles.nav}
    >
      {/* LEFT: BRAND */}
      <div style={styles.brand}>Nitesh N D</div>

      {/* RIGHT: NAV LINKS */}
      <div style={styles.links}>
        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            style={{
              ...styles.link,
              ...(active === section.id ? styles.activeLink : {})
            }}
          >
            {section.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

/* ==================== STYLES ==================== */

const styles = {
  nav: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    padding: "14px 10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(2, 6, 23, 0.85)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid #1e293b",
    zIndex: 1000
  },

  brand: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#e5e7eb",
    letterSpacing: "0.4px"
  },

  links: {
    display: "flex",
    gap: "26px",
    alignItems: "center"
  },

  link: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#94a3b8",
    textDecoration: "none",
    position: "relative" as const,
    paddingBottom: "4px",
    transition: "color 0.2s ease"
  },

  activeLink: {
    color: "#38bdf8",
    borderBottom: "2px solid #38bdf8"
  }
};
