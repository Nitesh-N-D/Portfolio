// // // // import { useEffect, useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import Reveal from "./Reveal";

// // // // interface Experience {
// // // //   id: number;
// // // //   role: string;
// // // //   company: string;
// // // //   description: string;
// // // //   start_date: string;
// // // //   end_date: string;
// // // // }

// // // // export default function Experience() {
// // // //   const [data, setData] = useState<Experience[]>([]);

// // // //   useEffect(() => {
// // // //     fetch("https://nitesh-portfolio-backend.onrender.com/api/experience")
// // // //       .then(res => res.json())
// // // //       .then(data => setData(data));
// // // //   }, []);

// // // //   return (
// // // //     <Reveal>
// // // //       <section id="experience" style={styles.section}>
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 60 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.7 }}
// // // //           viewport={{ once: true }}
// // // //         >
// // // //           <h2 style={styles.heading}>Experience</h2>
// // // //           <p style={styles.subtitle}>
// // // //             Professional experience, internships, and hands-on industry exposure.
// // // //           </p>

// // // //           <div style={styles.timeline}>
// // // //             {data.map(exp => (
// // // //               <motion.div
// // // //                 key={exp.id}
// // // //                 style={styles.item}
// // // //                 whileHover={{ x: 6 }}
// // // //                 transition={{ type: "spring", stiffness: 120 }}
// // // //               >
// // // //                 <div style={styles.dot}></div>

// // // //                 <div style={styles.card}>
// // // //                   <h3 style={styles.role}>{exp.role}</h3>
// // // //                   <p style={styles.company}>{exp.company}</p>
// // // //                   <p style={styles.description}>{exp.description}</p>
// // // //                   <span style={styles.date}>
// // // //                     {exp.start_date} — {exp.end_date}
// // // //                   </span>
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>
// // // //       </section>
// // // //     </Reveal>
// // // //   );
// // // // }

// // // // /* ==================== STYLES ==================== */

// // // // const styles = {
// // // //   section: {
// // // //     padding: "100px 10%",
// // // //     background: "#020617"
// // // //   },

// // // //   heading: {
// // // //     fontSize: "28px",
// // // //     fontWeight: 600,
// // // //     color: "#38bdf8",
// // // //     marginBottom: "10px"
// // // //   },

// // // //   subtitle: {
// // // //     fontSize: "14px",
// // // //     color: "#94a3b8",
// // // //     marginBottom: "50px",
// // // //     maxWidth: "650px"
// // // //   },

// // // //   timeline: {
// // // //     position: "relative" as const,
// // // //     marginLeft: "20px",
// // // //     borderLeft: "2px solid #1e293b",
// // // //     paddingLeft: "40px"
// // // //   },

// // // //   item: {
// // // //     position: "relative" as const,
// // // //     marginBottom: "50px",
// // // //     display: "flex",
// // // //     alignItems: "flex-start"
// // // //   },

// // // //   dot: {
// // // //     position: "absolute" as const,
// // // //     left: "-51px",
// // // //     top: "20px",
// // // //     width: "14px",
// // // //     height: "14px",
// // // //     background: "#38bdf8",
// // // //     borderRadius: "50%",
// // // //     boxShadow: "0 0 20px rgba(56,189,248,0.6)"
// // // //   },

// // // //   card: {
// // // //     background: "rgba(15, 23, 42, 0.7)",
// // // //     border: "1px solid #1e293b",
// // // //     borderRadius: "16px",
// // // //     padding: "26px",
// // // //     backdropFilter: "blur(14px)",
// // // //     maxWidth: "720px",
// // // //     transition: "all 0.3s ease"
// // // //   },

// // // //   role: {
// // // //     fontSize: "18px",
// // // //     fontWeight: 600,
// // // //     color: "#e5e7eb",
// // // //     marginBottom: "4px"
// // // //   },

// // // //   company: {
// // // //     fontSize: "14px",
// // // //     color: "#38bdf8",
// // // //     marginBottom: "12px"
// // // //   },

// // // //   description: {
// // // //     fontSize: "14px",
// // // //     color: "#94a3b8",
// // // //     lineHeight: 1.7,
// // // //     marginBottom: "10px"
// // // //   },

// // // //   date: {
// // // //     fontSize: "12px",
// // // //     color: "#64748b"
// // // //   }
// // // // };
// // // import { motion } from "framer-motion";
// // // import Reveal from "./Reveal";
// // // import { experience } from "../data/experience";

// // // export default function Experience() {
// // //   return (
// // //     <Reveal>
// // //       <section id="experience" style={styles.section}>
// // //         <h2 style={styles.heading}>Experience</h2>
// // //         <p style={styles.subtitle}>
// // //           Internships and hands-on industry experience.
// // //         </p>

// // //         <div style={styles.timeline}>
// // //           {experience.map((exp, i) => (
// // //             <motion.div
// // //               key={i}
// // //               style={styles.item}
// // //               whileHover={{ x: 6 }}
// // //               transition={{ type: "spring", stiffness: 120 }}
// // //             >
// // //               <span style={styles.dot} />

// // //               <div style={styles.card}>
// // //                 <h3 style={styles.role}>{exp.role}</h3>
// // //                 <p style={styles.company}>{exp.company}</p>
// // //                 <p style={styles.description}>{exp.description}</p>
// // //                 <span style={styles.date}>
// // //                   {exp.start} — {exp.end}
// // //                 </span>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </section>
// // //     </Reveal>
// // //   );
// // // }

// // // const styles = {
// // //   section: {
// // //     padding: "90px 10%",
// // //     background: "#020617"
// // //   },
// // //   heading: {
// // //     fontSize: "26px",
// // //     fontWeight: 600,
// // //     color: "#38bdf8"
// // //   },
// // //   subtitle: {
// // //     fontSize: "14px",
// // //     color: "#94a3b8",
// // //     marginBottom: "48px"
// // //   },
// // //   timeline: {
// // //     borderLeft: "2px solid #1e293b",
// // //     paddingLeft: "36px"
// // //   },
// // //   item: {
// // //     position: "relative" as const,
// // //     marginBottom: "40px"
// // //   },
// // //   dot: {
// // //     position: "absolute" as const,
// // //     left: "-44px",
// // //     top: "22px",
// // //     width: "12px",
// // //     height: "12px",
// // //     borderRadius: "50%",
// // //     background: "#38bdf8"
// // //   },
// // //   card: {
// // //     background: "rgba(15,23,42,0.7)",
// // //     border: "1px solid #1e293b",
// // //     borderRadius: "16px",
// // //     padding: "24px"
// // //   },
// // //   role: {
// // //     fontSize: "16px",
// // //     fontWeight: 600,
// // //     color: "#e5e7eb"
// // //   },
// // //   company: {
// // //     fontSize: "14px",
// // //     color: "#38bdf8",
// // //     marginBottom: "8px"
// // //   },
// // //   description: {
// // //     fontSize: "14px",
// // //     color: "#94a3b8",
// // //     lineHeight: 1.7
// // //   },
// // //   date: {
// // //     fontSize: "12px",
// // //     color: "#64748b"
// // //   }
// // // };
// // import { motion } from "framer-motion";
// // import Reveal from "./Reveal";
// // import { experience } from "../data/experience";

// // export default function Experience() {
// //   return (
// //     <Reveal>
// //       <section id="experience" style={styles.section}>
// //         <h2 style={styles.heading}>Experience</h2>

// //         <div style={styles.timeline}>
// //           {experience.map(exp => (
// //             <motion.div key={exp.id} style={styles.item} whileHover={{ x: 6 }}>
// //               <div style={styles.dot} />

// //               <div style={styles.card}>
// //                 <h3 style={styles.role}>{exp.role}</h3>
// //                 <p style={styles.company}>{exp.company}</p>
// //                 <p style={styles.description}>{exp.description}</p>
// //                 <span style={styles.date}>
// //                   {exp.start} — {exp.end}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>
// //     </Reveal>
// //   );
// // }

// // const styles = {
// //   section: {
// //     padding: "100px 10%",
// //     background: "#020617"
// //   },
// //   heading: {
// //     fontSize: "28px",
// //     color: "#38bdf8",
// //     fontWeight: 600,
// //     marginBottom: "40px"
// //   },
// //   timeline: {
// //     borderLeft: "2px solid #1e293b",
// //     paddingLeft: "40px"
// //   },
// //   item: {
// //     position: "relative" as const,
// //     marginBottom: "40px"
// //   },
// //   dot: {
// //     position: "absolute" as const,
// //     left: "-51px",
// //     top: "20px",
// //     width: "14px",
// //     height: "14px",
// //     background: "#38bdf8",
// //     borderRadius: "50%"
// //   },
// //   card: {
// //     background: "rgba(15,23,42,0.7)",
// //     border: "1px solid #1e293b",
// //     borderRadius: "16px",
// //     padding: "24px"
// //   },
// //   role: {
// //     color: "#e5e7eb",
// //     fontWeight: 600
// //   },
// //   company: {
// //     color: "#38bdf8",
// //     fontSize: "14px"
// //   },
// //   description: {
// //     color: "#94a3b8",
// //     fontSize: "14px",
// //     margin: "10px 0"
// //   },
// //   date: {
// //     fontSize: "12px",
// //     color: "#64748b"
// //   }
// // };
// import { motion } from "framer-motion";
// import Reveal from "./Reveal";
// import { experience } from "../data/experience";

// /*
// Expected experience shape:

// {
//   id: number;
//   role: string;
//   company: string;
//   description: string;
//   start: string;
//   end: string;
// }
// */

// export default function Experience() {
//   return (
//     <section id="experience" style={styles.section}>
//       <Reveal>
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           viewport={{ once: true }}
//           style={styles.container}
//         >
//           {/* SECTION HEADER */}
//           <h2 style={styles.heading}>Experience</h2>
//           <p style={styles.subtitle}>
//             Internships and hands-on industry experience where I applied
//             engineering principles to real-world systems.
//           </p>

//           {/* TIMELINE */}
//           <div style={styles.timeline}>
//             {experience.map(exp => (
//               <motion.div
//                 key={exp.id}
//                 style={styles.item}
//                 whileHover={{ x: 6 }}
//                 transition={{ type: "spring", stiffness: 140 }}
//               >
//                 <span style={styles.dot} />

//                 <div style={styles.card}>
//                   <h3 style={styles.role}>{exp.role}</h3>
//                   <p style={styles.company}>{exp.company}</p>

//                   <p style={styles.description}>
//                     {exp.description}
//                   </p>

//                   <span style={styles.date}>
//                     {exp.start} — {exp.end}
//                   </span>
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
//     padding: "100px 10%",
//     background: "#020617"
//   },

//   container: {
//     maxWidth: "1000px"
//   },

//   heading: {
//     fontSize: "28px",
//     fontWeight: 600,
//     color: "#38bdf8",
//     marginBottom: "14px"
//   },

//   subtitle: {
//     fontSize: "15px",
//     color: "#94a3b8",
//     marginBottom: "48px",
//     maxWidth: "720px",
//     lineHeight: 1.7
//   },

//   timeline: {
//     position: "relative" as const,
//     borderLeft: "2px solid #1e293b",
//     paddingLeft: "42px"
//   },

//   item: {
//     position: "relative" as const,
//     marginBottom: "42px"
//   },

//   dot: {
//     position: "absolute" as const,
//     left: "-51px",
//     top: "22px",
//     width: "14px",
//     height: "14px",
//     background: "#38bdf8",
//     borderRadius: "50%",
//     boxShadow: "0 0 16px rgba(56,189,248,0.5)"
//   },

//   card: {
//     background: "rgba(15, 23, 42, 0.7)",
//     border: "1px solid #1e293b",
//     borderRadius: "16px",
//     padding: "24px",
//     backdropFilter: "blur(12px)"
//   },

//   role: {
//     fontSize: "17px",
//     fontWeight: 600,
//     color: "#e5e7eb",
//     marginBottom: "4px"
//   },

//   company: {
//     fontSize: "14px",
//     color: "#38bdf8",
//     marginBottom: "10px"
//   },

//   description: {
//     fontSize: "14px",
//     color: "#94a3b8",
//     lineHeight: 1.7,
//     marginBottom: "12px"
//   },

//   date: {
//     fontSize: "12px",
//     color: "#64748b"
//   }
// };
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { experience } from "../data/experience";
import type { CSSProperties } from "react";

/*
Expected experience shape:

{
  id: number;
  role: string;
  company: string;
  description: string;
  start: string;
  end: string;
}
*/

export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          style={styles.container}
        >
          {/* HEADER */}
          <h2 style={styles.heading}>Experience</h2>
          <p style={styles.subtitle}>
            Internships and hands-on industry experience where I applied
            engineering principles to real-world systems.
          </p>

          {/* TIMELINE */}
          <div style={styles.timeline}>
            {experience.map(exp => (
              <motion.div
                key={exp.id}
                style={styles.item}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 140 }}
              >
                <span style={styles.dot} />

                <div style={styles.card}>
                  <h3 style={styles.role}>{exp.role}</h3>
                  <p style={styles.company}>{exp.company}</p>

                  <p style={styles.description}>{exp.description}</p>

                  <span style={styles.date}>
                    {exp.start} — {exp.end}
                  </span>
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
    padding: "100px 10%",
    background: "#020617"
  },

  container: {
    maxWidth: "1000px"
  },

  heading: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#38bdf8",
    marginBottom: "14px"
  },

  subtitle: {
    fontSize: "15px",
    color: "#94a3b8",
    marginBottom: "48px",
    maxWidth: "720px",
    lineHeight: 1.7
  },

  timeline: {
    position: "relative",
    borderLeft: "2px solid #1e293b",
    paddingLeft: "42px"
  },

  item: {
    position: "relative",
    marginBottom: "42px"
  },

  dot: {
    position: "absolute",
    left: "-51px",
    top: "22px",
    width: "14px",
    height: "14px",
    background: "#38bdf8",
    borderRadius: "50%",
    boxShadow: "0 0 16px rgba(56,189,248,0.5)"
  },

  card: {
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
    backdropFilter: "blur(12px)"
  },

  role: {
    fontSize: "17px",
    fontWeight: 600,
    color: "#e5e7eb",
    marginBottom: "4px"
  },

  company: {
    fontSize: "14px",
    color: "#38bdf8",
    marginBottom: "10px"
  },

  description: {
    fontSize: "14px",
    color: "#94a3b8",
    lineHeight: 1.7,
    marginBottom: "12px"
  },

  date: {
    fontSize: "12px",
    color: "#64748b"
  }
};
