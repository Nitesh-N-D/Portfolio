import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={styles.nav}
    >
      {/* Logo */}
      <div style={styles.logo}>Nitesh Labs</div>

      {/* Navigation Links */}
      <div style={styles.links}>
        <NavLink href="#about" label="About" />
        <NavLink href="#skills" label="Skills" />
        <NavLink href="#projects" label="Projects" />
        <NavLink href="#experience" label="Experience" />
        <NavLink href="#contact" label="Contact" />
      </div>
    </motion.nav>
  );
}

/* Reusable NavLink Component */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} style={styles.link}>
      {label}
    </a>
  );
}

/* Professional Styling */
const styles = {
  nav: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    padding: "14px 10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backdropFilter: "blur(14px)",
    background: "rgba(2,6,23,0.9)",
    borderBottom: "1px solid #1e293b",
    zIndex: 100
  },

  logo: {
    color: "#38bdf8",
    fontWeight: 600,
    fontSize: "18px",
    letterSpacing: "0.4px"
  },

  links: {
    display: "flex",
    gap: "28px"
  },

  link: {
    color: "#e5e7eb",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.3px",
    transition: "all 0.25s ease"
  }
};
