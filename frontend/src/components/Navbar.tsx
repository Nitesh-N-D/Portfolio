import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={styles.nav}
    >
      <div style={styles.logo}>Nitesh Labs</div>

      <div style={styles.links}>
        <a href="#about" style={styles.link}>About</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#experience" style={styles.link}>Experience</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </motion.nav>
  );
}

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
    letterSpacing: "0.3px"
  }
};
