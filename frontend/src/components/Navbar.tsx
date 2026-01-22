import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "14px 10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: "blur(14px)",
        background: "rgba(2,6,23,0.85)",
        borderBottom: "1px solid #1e293b",
        zIndex: 100
      }}
    >
      <h3 style={{ color: "#38bdf8", fontWeight: 600 }}>Nitesh Labs</h3>

      <div style={{ display: "flex", gap: "26px" }}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}
