// import { motion } from "framer-motion";
// import Reveal from "./Reveal";
// import { education } from "../data/education";

// export default function Education() {
//   return (
//     <section id="education" style={styles.section}>
//       <Reveal>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45, ease: "easeOut" }}
//           viewport={{ once: true }}
//           style={styles.container}
//         >
//           <h2 style={styles.heading}>Education</h2>

//           <div style={styles.timeline}>
//             {education.map((edu, index) => (
//               <motion.div
//                 key={index}
//                 style={styles.item}
//                 whileHover={{ x: 6 }}
//                 transition={{ type: "spring", stiffness: 140 }}
//               >
//                 <span style={styles.dot} />

//                 <div style={styles.card}>
//                   <div style={styles.header}>
//                     <h3 style={styles.degree}>{edu.degree}</h3>
//                     {edu.cgpa && (
//                       <span style={styles.cgpa}>CGPA: {edu.cgpa}</span>
//                     )}
//                   </div>

//                   <p style={styles.institution}>{edu.institution}</p>

//                   <p style={styles.meta}>
//                     {edu.duration}
//                     {edu.location && ` • ${edu.location}`}
//                   </p>

//                   {edu.details && (
//                     <ul style={styles.details}>
//                       {edu.details.map((point, i) => (
//                         <li key={i}>{point}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </Reveal>
//     </section>
//   );
// }

// /* ===================== STYLES ===================== */

// const styles = {
//   section: {
//     padding: "90px 10%",
//     background: "#020617"
//   },

//   container: {
//     maxWidth: "900px"
//   },

//   heading: {
//     fontSize: "26px",
//     fontWeight: 600,
//     color: "#38bdf8",
//     marginBottom: "40px"
//   },

//   timeline: {
//     position: "relative" as const,
//     borderLeft: "2px solid #1e293b",
//     paddingLeft: "32px"
//   },

//   item: {
//     position: "relative" as const,
//     marginBottom: "36px"
//   },

//   dot: {
//     position: "absolute" as const,
//     left: "-41px",
//     top: "16px",
//     width: "12px",
//     height: "12px",
//     borderRadius: "50%",
//     background: "#38bdf8"
//   },

//   card: {
//     background: "rgba(15, 23, 42, 0.6)",
//     border: "1px solid #1e293b",
//     borderRadius: "14px",
//     padding: "22px 24px"
//   },

//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexWrap: "wrap" as const,
//     gap: "8px"
//   },

//   degree: {
//     fontSize: "16px",
//     fontWeight: 600,
//     color: "#e5e7eb"
//   },

//   cgpa: {
//     fontSize: "13px",
//     color: "#22c55e",
//     fontWeight: 500
//   },

//   institution: {
//     fontSize: "14px",
//     color: "#38bdf8",
//     marginTop: "4px"
//   },

//   meta: {
//     fontSize: "13px",
//     color: "#94a3b8",
//     margin: "6px 0 10px"
//   },

//   details: {
//     paddingLeft: "18px",
//     fontSize: "14px",
//     color: "#cbd5f5",
//     lineHeight: 1.6
//   }
// };
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { education } from "../data/education";
import type { CSSProperties } from "react";

export default function Education() {
  return (
    <section id="education" style={styles.section}>
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
          style={styles.container}
        >
          <h2 style={styles.heading}>Education</h2>

          <div style={styles.timeline}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                style={styles.item}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 140 }}
              >
                <span style={styles.dot} />

                <div style={styles.card}>
                  <div style={styles.header}>
                    <h3 style={styles.degree}>{edu.degree}</h3>
                    {edu.cgpa && (
                      <span style={styles.cgpa}>CGPA: {edu.cgpa}</span>
                    )}
                  </div>

                  <p style={styles.institution}>{edu.institution}</p>

                  <p style={styles.meta}>
                    {edu.duration}
                    {edu.location && ` • ${edu.location}`}
                  </p>

                  {edu.details && (
                    <ul style={styles.details}>
                      {edu.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}

/* ===================== STYLES ===================== */

const styles: Record<string, CSSProperties> = {
  section: {
    width: "100%",
    padding: "90px clamp(16px, 6vw, 10%)",
    background: "#020617",
    overflowX: "hidden"
  },

  container: {
    maxWidth: "900px"
  },

  heading: {
    fontSize: "clamp(22px, 3vw, 26px)",
    fontWeight: 600,
    color: "#38bdf8",
    marginBottom: "40px"
  },

  timeline: {
    position: "relative",
    borderLeft: "2px solid #1e293b",
    paddingLeft: "28px"
  },

  item: {
    position: "relative",
    marginBottom: "36px"
  },

  dot: {
    position: "absolute",
    left: "-36px",
    top: "16px",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#38bdf8"
  },

  card: {
    background: "rgba(15, 23, 42, 0.6)",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "22px 24px"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px"
  },

  degree: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#e5e7eb"
  },

  cgpa: {
    fontSize: "13px",
    color: "#22c55e",
    fontWeight: 500
  },

  institution: {
    fontSize: "14px",
    color: "#38bdf8",
    marginTop: "4px"
  },

  meta: {
    fontSize: "13px",
    color: "#94a3b8",
    margin: "6px 0 10px"
  },

  details: {
    paddingLeft: "18px",
    fontSize: "14px",
    color: "#cbd5f5",
    lineHeight: 1.6
  }
};
