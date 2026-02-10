import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  /* ================= Scroll Spy ================= */
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
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ================= Underline ================= */
  useEffect(() => {
    if (menuOpen) return;
    const el = linkRefs.current[active];
    if (el) {
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth
      });
    }
  }, [active, menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar-glow" style={styles.nav}>
        <div style={styles.brand}>Nitesh N D</div>

        {/* DESKTOP LINKS */}
        <div className="nav-links" style={styles.links}>
          {sections.map(id => (
            <a
              key={id}
              href={`#${id}`}
              ref={el => (linkRefs.current[id] = el)}
              style={{
                ...styles.link,
                color: active === id ? "#38bdf8" : "#94a3b8"
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          {!menuOpen && (
            <motion.span
              style={styles.indicator}
              animate={{ left: indicator.left, width: indicator.width }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
            />
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="menu-btn"
          style={styles.menuBtn}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={styles.mobileMenu}
          >
            {sections.map(id => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setActive(id);
                  setMenuOpen(false);
                }}
                style={{
                  ...styles.mobileLink,
                  color: active === id ? "#38bdf8" : "#e5e7eb"
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= RESPONSIVE ================= */}
      <style>
        {`
          /* 🔹 BLUE GLOW LINE */
          /* ===== SUBTLE NAV SEPARATOR (PRO) ===== */
.navbar-glow::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: rgba(56, 189, 248, 0.25);
  pointer-events: none;
}

          @media (max-width: 1024px) {
            .nav-links {
              display: none;
            }
            .menu-btn {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
}

/* ================= STYLES ================= */

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "14px clamp(16px, 5vw, 10%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(2,6,23,0.92)",
    backdropFilter: "blur(14px)",
    zIndex: 1000,
    overflowX: "hidden"
  },

  brand: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#e5e7eb",
    whiteSpace: "nowrap"
  },

  links: {
    position: "relative",
    display: "flex",
    gap: "22px",
    paddingBottom: "6px"
  },

  link: {
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none",
    transition: "color 0.2s ease"
  },

  indicator: {
    position: "absolute",
    bottom: 0,
    height: "2px",
    background: "#38bdf8",
    borderRadius: "2px"
  },

  menuBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: "#e5e7eb",
    cursor: "pointer"
  },

  mobileMenu: {
    position: "fixed",
    top: "64px",
    width: "100%",
    background: "rgba(2,6,23,0.98)",
    padding: "16px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    borderBottom: "1px solid #1e293b",
    zIndex: 999
  },

  mobileLink: {
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none"
  }
};
