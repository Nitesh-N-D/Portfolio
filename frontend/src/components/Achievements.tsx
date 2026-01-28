// import { motion } from "framer-motion";
// import Reveal from "./Reveal";
// import { achievements, Achievement } from "../data/achievements";

// export default function Achievements() {
//   return (
//     <Reveal>
//       <section id="achievements" style={styles.section}>
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           viewport={{ once: true }}
//           style={styles.container}
//         >
//           <h2 style={styles.heading}>Achievements</h2>
//           <p style={styles.subtitle}>
//             Certifications, recognitions, and leadership milestones that
//             demonstrate technical excellence and initiative.
//           </p>

//           <div style={styles.grid}>
//             {achievements.map((a, i) => (
//               <motion.article
//                 key={i}
//                 style={styles.card}
//                 whileHover={{ y: -4 }}
//                 transition={{ type: "spring", stiffness: 140 }}
//               >
//                 <h3 style={styles.title}>{a.title}</h3>
//                 <p style={styles.description}>{a.description}</p>

//                 <a
//                   href={a.proof}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={styles.proofBtn}
//                 >
//                   {getProofLabel(a)}
//                 </a>
//               </motion.article>
//             ))}
//           </div>
//         </motion.div>
//       </section>
//     </Reveal>
//   );
// }

// /* ================= HELPERS ================= */

// function getProofLabel(a: Achievement) {
//   if (a.type === "pdf") return "View Certificate (PDF)";
//   if (a.type === "image") return "View Proof";
//   return "View Details";
// }

// /* ================= STYLES ================= */

// const styles = {
//   section: {
//     padding: "100px 10%",
//     background: "#020617"
//   },

//   container: {
//     maxWidth: "1200px"
//   },

//   heading: {
//     fontSize: "28px",
//     fontWeight: 600,
//     color: "#38bdf8",
//     marginBottom: "12px"
//   },

//   subtitle: {
//     fontSize: "15px",
//     color: "#94a3b8",
//     marginBottom: "48px",
//     maxWidth: "760px",
//     lineHeight: 1.7
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//     gap: "32px"
//   },

//   card: {
//     background: "rgba(15, 23, 42, 0.7)",
//     border: "1px solid #1e293b",
//     borderRadius: "16px",
//     padding: "26px",
//     display: "flex",
//     flexDirection: "column" as const,
//     justifyContent: "space-between"
//   },

//   title: {
//     fontSize: "16px",
//     fontWeight: 600,
//     color: "#e5e7eb",
//     marginBottom: "10px"
//   },

//   description: {
//     fontSize: "14px",
//     color: "#94a3b8",
//     lineHeight: 1.6,
//     marginBottom: "18px"
//   },

//   proofBtn: {
//     alignSelf: "flex-start",
//     padding: "8px 16px",
//     borderRadius: "10px",
//     border: "1px solid #38bdf8",
//     color: "#38bdf8",
//     fontSize: "13px",
//     fontWeight: 500,
//     textDecoration: "none"
//   }
// };
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { achievements, Achievement } from "../data/achievements";
import type { CSSProperties } from "react";

export default function Achievements() {
  return (
    <Reveal>
      <section id="achievements" style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          style={styles.container}
        >
          <h2 style={styles.heading}>Achievements</h2>
          <p style={styles.subtitle}>
            Certifications, recognitions, and leadership milestones that
            demonstrate technical excellence and initiative.
          </p>

          <div style={styles.grid}>
            {achievements.map((a, i) => (
              <motion.article
                key={i}
                style={styles.card}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 140 }}
              >
                <h3 style={styles.title}>{a.title}</h3>
                <p style={styles.description}>{a.description}</p>

                <a
                  href={a.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.proofBtn}
                >
                  {getProofLabel(a)}
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </Reveal>
  );
}

/* ================= HELPERS ================= */

function getProofLabel(a: Achievement) {
  if (a.type === "pdf") return "View Certificate (PDF)";
  if (a.type === "image") return "View Proof";
  return "View Details";
}

/* ================= STYLES ================= */

const styles: Record<string, CSSProperties> = {
  section: {
    width: "100%",
    padding: "clamp(72px, 10vw, 110px) clamp(16px, 6vw, 10%)",
    background: "#020617",
    overflowX: "hidden"
  },

  container: {
    maxWidth: "1200px"
  },

  heading: {
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: 600,
    color: "#38bdf8",
    marginBottom: "12px"
  },

  subtitle: {
    fontSize: "15px",
    color: "#94a3b8",
    marginBottom: "48px",
    maxWidth: "760px",
    lineHeight: 1.7
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "32px"
  },

  card: {
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "26px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  title: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#e5e7eb",
    marginBottom: "10px"
  },

  description: {
    fontSize: "14px",
    color: "#94a3b8",
    lineHeight: 1.6,
    marginBottom: "18px"
  },

  proofBtn: {
    alignSelf: "flex-start",
    padding: "8px 16px",
    borderRadius: "10px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    fontSize: "13px",
    fontWeight: 500,
    textDecoration: "none"
  }
};
