import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

interface Experience {
  id: number;
  role: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string;
}

export default function Experience() {
  const [data, setData] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/experience")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <Reveal>
      <section id="experience" style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.heading}>Experience</h2>
          <p style={styles.subtitle}>
            Professional experience, internships, and hands-on industry exposure.
          </p>

          <div style={styles.timeline}>
            {data.map(exp => (
              <motion.div
                key={exp.id}
                style={styles.item}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div style={styles.dot}></div>

                <div style={styles.card}>
                  <h3 style={styles.role}>{exp.role}</h3>
                  <p style={styles.company}>{exp.company}</p>
                  <p style={styles.description}>{exp.description}</p>
                  <span style={styles.date}>
                    {exp.start_date} — {exp.end_date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </Reveal>
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
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "50px",
    maxWidth: "650px"
  },

  timeline: {
    position: "relative" as const,
    marginLeft: "20px",
    borderLeft: "2px solid #1e293b",
    paddingLeft: "40px"
  },

  item: {
    position: "relative" as const,
    marginBottom: "50px",
    display: "flex",
    alignItems: "flex-start"
  },

  dot: {
    position: "absolute" as const,
    left: "-51px",
    top: "20px",
    width: "14px",
    height: "14px",
    background: "#38bdf8",
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(56,189,248,0.6)"
  },

  card: {
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "26px",
    backdropFilter: "blur(14px)",
    maxWidth: "720px",
    transition: "all 0.3s ease"
  },

  role: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#e5e7eb",
    marginBottom: "4px"
  },

  company: {
    fontSize: "14px",
    color: "#38bdf8",
    marginBottom: "12px"
  },

  description: {
    fontSize: "14px",
    color: "#94a3b8",
    lineHeight: 1.7,
    marginBottom: "10px"
  },

  date: {
    fontSize: "12px",
    color: "#64748b"
  }
};
