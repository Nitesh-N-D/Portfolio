import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.heading}>About Me</h2>

          <div style={styles.card}>
            <p style={styles.text}>
              I am a Computer Science Engineering student passionate about building
              scalable full-stack applications and high-performance backend platforms.
              I focus on writing clean, maintainable code and designing systems that
              solve real-world problems efficiently.
            </p>

            <div style={styles.stats}>
              <div style={styles.statBox}>
                <h3 style={styles.statNumber}>2+</h3>
                <p style={styles.statLabel}>Years of Learning</p>
              </div>

              <div style={styles.statBox}>
                <h3 style={styles.statNumber}>10+</h3>
                <p style={styles.statLabel}>Projects Built</p>
              </div>

              <div style={styles.statBox}>
                <h3 style={styles.statNumber}>5+</h3>
                <p style={styles.statLabel}>Technologies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}

/* ==================== STYLES ==================== */

const styles = {
  section: {
    padding: "100px 10%",
    background: "radial-gradient(circle at top, #020617 0%, #020617 60%)"
  },

  heading: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#38bdf8",
    marginBottom: "30px"
  },

  card: {
    background: "rgba(15, 23, 42, 0.6)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "36px",
    backdropFilter: "blur(14px)",
    maxWidth: "800px"
  },

  text: {
    fontSize: "15px",
    color: "#cbd5f5",
    lineHeight: 1.8,
    marginBottom: "36px"
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "24px"
  },

  statBox: {
    background: "rgba(2, 6, 23, 0.6)",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center" as const
  },

  statNumber: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#38bdf8",
    marginBottom: "6px"
  },

  statLabel: {
    fontSize: "13px",
    color: "#94a3b8"
  }
};
