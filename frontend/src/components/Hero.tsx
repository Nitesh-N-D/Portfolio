import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={styles.section} id="home">
      {/* Background Glow */}
      <div style={styles.glow}></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={styles.container}
      >
        <h1 style={styles.title}>
          Hi, I'm <span style={styles.highlight}>N.D. Nitesh</span>
        </h1>

        <h2 style={styles.subtitle}>
          Computer Science Engineering Student
        </h2>

        <p style={styles.description}>
          Aspiring Software Developer passionate about AI, Cloud, and Web Development.
          Focused on building scalable full-stack applications and modern backend platforms.
        </p>

        <div style={styles.actions}>
          <a href="#contact" className="btn">Get In Touch</a>
          <a href="/Nitesh_Resume.pdf" className="btn-outline" download>
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div style={styles.socials}>
          <a href="https://github.com/Nitesh-N-D" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/nitesh-n-d-249ab6325" target="_blank">LinkedIn</a>
          <a href="mailto:niteshdwaraka@gmail.com">Email</a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          style={styles.scroll}
        >
          ⌄
        </motion.div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
    overflow: "hidden",
    padding: "0 10%",
  },

  glow: {
    position: "absolute" as const,
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(56,189,248,0.15), transparent 60%)",
    top: "-100px",
    left: "-100px",
    zIndex: 0,
  },

  container: {
    maxWidth: "780px",
    zIndex: 2,
  },

  title: {
    fontSize: "46px",
    fontWeight: 700,
    marginBottom: "12px",
    color: "#e5e7eb",
    letterSpacing: "0.5px",
  },

  highlight: {
    color: "#60a5fa",
  },

  subtitle: {
    fontSize: "22px",
    fontWeight: 500,
    marginBottom: "16px",
    color: "#cbd5f5",
  },

  description: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#94a3b8",
    maxWidth: "640px",
  },

  actions: {
    marginTop: "28px",
    display: "flex",
    gap: "18px",
    flexWrap: "wrap" as const,
  },

  socials: {
    marginTop: "26px",
    display: "flex",
    gap: "22px",
    fontSize: "14px",
    color: "#94a3b8",
  },

  scroll: {
    marginTop: "60px",
    fontSize: "24px",
    color: "#60a5fa",
    opacity: 0.8,
  }
};
