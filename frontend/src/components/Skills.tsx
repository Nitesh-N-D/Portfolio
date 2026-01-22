import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "MySQL",
  "Git",
  "HTML",
  "CSS",
  "Express",
  "MongoDB"
];

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.heading}>Skills & Technologies</h2>
          <p style={styles.subtitle}>
            Technologies I work with and continuously improve.
          </p>

          <div style={styles.grid}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                style={styles.card}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(56,189,248,0.15)"
                }}
                transition={{ duration: 0.25 }}
              >
                {skill}
              </motion.div>
            ))}
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
    background: "#020617"
  },

  heading: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#38bdf8",
    marginBottom: "12px"
  },

  subtitle: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "40px",
    maxWidth: "600px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "22px",
    maxWidth: "900px"
  },

  card: {
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "22px 18px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#e5e7eb",
    textAlign: "center" as const,
    letterSpacing: "0.3px",
    cursor: "default",
    backdropFilter: "blur(12px)"
  }
};
