// // // // import { useEffect, useState } from "react";

// // // // interface Certification {
// // // //   id: number;
// // // //   title: string;
// // // //   provider: string;
// // // //   image_url: string;
// // // //   issued_date: string;
// // // // }

// // // // export default function Certifications() {
// // // //   const [data, setData] = useState<Certification[]>([]);

// // // //   useEffect(() => {
// // // //     fetch("http://localhost:5000/api/certifications")
// // // //       .then(res => res.json())
// // // //       .then(data => setData(data));
// // // //   }, []);

// // // //   return (
// // // //     <section id="certifications">
// // // //       <h2>Certifications</h2>

// // // //       <div className="grid">
// // // //         {data.map(cert => (
// // // //           <div className="card" key={cert.id}>
// // // //             <img src={cert.image_url} />
// // // //             <h3>{cert.title}</h3>
// // // //             <small>{cert.provider}</small>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // import { useEffect, useState } from "react";
// // // import { motion } from "framer-motion";
// // // import Reveal from "./Reveal";

// // // interface Certification {
// // //   id: number;
// // //   title: string;
// // //   provider: string;
// // //   image_url: string;
// // //   issued_date: string;
// // // }

// // // export default function Certifications() {
// // //   const [data, setData] = useState<Certification[]>([]);

// // //   useEffect(() => {
// // //     fetch("https://nitesh-portfolio-backend.onrender.com/api/certifications")
// // //       .then(res => res.json())
// // //       .then(data => setData(data));
// // //   }, []);

// // //   return (
// // //     <Reveal>
// // //       <section id="certifications" style={styles.section}>
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 60 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.7 }}
// // //           viewport={{ once: true }}
// // //         >
// // //           <h2 style={styles.heading}>Certifications</h2>
// // //           <p style={styles.subtitle}>
// // //             Professional certifications and credentials earned through recognized platforms.
// // //           </p>

// // //           <div style={styles.grid}>
// // //             {data.map(cert => (
// // //               <motion.div
// // //                 key={cert.id}
// // //                 style={styles.card}
// // //                 whileHover={{ y: -8, scale: 1.02 }}
// // //                 transition={{ type: "spring", stiffness: 180 }}
// // //               >
// // //                 {/* Certificate Image */}
// // //                 <div style={styles.imageWrapper}>
// // //                   <img
// // //                     src={cert.image_url}
// // //                     alt={cert.title}
// // //                     style={styles.image}
// // //                   />
// // //                 </div>

// // //                 {/* Content */}
// // //                 <div style={styles.content}>
// // //                   <h3 style={styles.title}>{cert.title}</h3>
// // //                   <p style={styles.provider}>{cert.provider}</p>
// // //                   <span style={styles.date}>Issued: {cert.issued_date}</span>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </motion.div>
// // //       </section>
// // //     </Reveal>
// // //   );
// // // }

// // // /* ==================== STYLES ==================== */

// // // const styles = {
// // //   section: {
// // //     padding: "100px 10%",
// // //     background: "#020617"
// // //   },

// // //   heading: {
// // //     fontSize: "28px",
// // //     fontWeight: 600,
// // //     color: "#38bdf8",
// // //     marginBottom: "10px"
// // //   },

// // //   subtitle: {
// // //     fontSize: "14px",
// // //     color: "#94a3b8",
// // //     marginBottom: "48px",
// // //     maxWidth: "650px"
// // //   },

// // //   grid: {
// // //     display: "grid",
// // //     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
// // //     gap: "36px"
// // //   },

// // //   card: {
// // //     background: "rgba(15, 23, 42, 0.7)",
// // //     border: "1px solid #1e293b",
// // //     borderRadius: "18px",
// // //     overflow: "hidden",
// // //     backdropFilter: "blur(14px)",
// // //     transition: "all 0.3s ease"
// // //   },

// // //   imageWrapper: {
// // //     width: "100%",
// // //     height: "200px",
// // //     overflow: "hidden",
// // //     background: "#020617"
// // //   },

// // //   image: {
// // //     width: "100%",
// // //     height: "100%",
// // //     objectFit: "cover" as const
// // //   },

// // //   content: {
// // //     padding: "26px"
// // //   },

// // //   title: {
// // //     fontSize: "16px",
// // //     fontWeight: 600,
// // //     color: "#e5e7eb",
// // //     marginBottom: "6px"
// // //   },

// // //   provider: {
// // //     fontSize: "14px",
// // //     color: "#38bdf8",
// // //     marginBottom: "6px"
// // //   },

// // //   date: {
// // //     fontSize: "12px",
// // //     color: "#64748b"
// // //   }
// // // };
// // import { motion } from "framer-motion";
// // import Reveal from "./Reveal";
// // import { certifications } from "../data/certifications";

// // export default function Certifications() {
// //   return (
// //     <Reveal>
// //       <section id="certifications" style={styles.section}>
// //         <h2 style={styles.heading}>Certifications</h2>
// //         <p style={styles.subtitle}>
// //           Professional certifications from trusted platforms.
// //         </p>

// //         <div style={styles.grid}>
// //           {certifications.map((c, i) => (
// //             <motion.div
// //               key={i}
// //               style={styles.card}
// //               whileHover={{ y: -8 }}
// //             >
// //               <img src={c.image} alt={c.title} style={styles.image} />
// //               <div style={styles.content}>
// //                 <h3 style={styles.title}>{c.title}</h3>
// //                 <p style={styles.provider}>{c.provider}</p>
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
// //     padding: "90px 10%",
// //     background: "#020617"
// //   },
// //   heading: {
// //     fontSize: "26px",
// //     fontWeight: 600,
// //     color: "#38bdf8"
// //   },
// //   subtitle: {
// //     fontSize: "14px",
// //     color: "#94a3b8",
// //     marginBottom: "40px"
// //   },
// //   grid: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
// //     gap: "32px"
// //   },
// //   card: {
// //     background: "rgba(15,23,42,0.7)",
// //     border: "1px solid #1e293b",
// //     borderRadius: "16px",
// //     overflow: "hidden"
// //   },
// //   image: {
// //     width: "100%",
// //     height: "180px",
// //     objectFit: "cover" as const
// //   },
// //   content: {
// //     padding: "20px"
// //   },
// //   title: {
// //     fontSize: "15px",
// //     fontWeight: 600,
// //     color: "#e5e7eb"
// //   },
// //   provider: {
// //     fontSize: "13px",
// //     color: "#38bdf8",
// //     marginTop: "6px"
// //   }
// // };
// import { motion } from "framer-motion";
// import Reveal from "./Reveal";
// import { certifications } from "../data/certifications";

// export default function Certifications() {
//   return (
//     <Reveal>
//       <section id="certifications" style={styles.section}>
//         <h2 style={styles.heading}>Certifications</h2>
//         <p style={styles.subtitle}>
//           Professional certifications from trusted platforms.
//         </p>

//         <div style={styles.grid}>
//           {certifications.map((c, index) => (
//             <motion.div
//               key={index}
//               style={styles.card}
//               whileHover={{ y: -8, scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <img
//                 src={c.image}
//                 alt={c.title}
//                 style={styles.image}
//               />

//               <div style={styles.content}>
//                 <h3 style={styles.title}>{c.title}</h3>
//                 <p style={styles.provider}>{c.provider}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </Reveal>
//   );
// }

// const styles = {
//   section: {
//     padding: "90px 10%",
//     background: "#020617"
//   },
//   heading: {
//     fontSize: "26px",
//     fontWeight: 600,
//     color: "#38bdf8",
//     marginBottom: "8px"
//   },
//   subtitle: {
//     fontSize: "14px",
//     color: "#94a3b8",
//     marginBottom: "40px"
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//     gap: "32px"
//   },
//   card: {
//     background: "rgba(15,23,42,0.7)",
//     border: "1px solid #1e293b",
//     borderRadius: "16px",
//     overflow: "hidden",
//     transition: "all 0.3s ease"
//   },
//   image: {
//     width: "100%",
//     height: "180px",
//     objectFit: "cover" as const
//   },
//   content: {
//     padding: "20px"
//   },
//   title: {
//     fontSize: "15px",
//     fontWeight: 600,
//     color: "#e5e7eb"
//   },
//   provider: {
//     fontSize: "13px",
//     color: "#38bdf8",
//     marginTop: "6px"
//   }
// };
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { certifications, Certification } from "../data/certifications";

export default function Certifications() {
  return (
    <Reveal>
      <section id="certifications" style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          style={styles.container}
        >
          <h2 style={styles.heading}>Certifications</h2>
          <p style={styles.subtitle}>
            Industry-recognized certifications validating my technical skills
            and continuous learning mindset.
          </p>

          <div style={styles.grid}>
            {certifications.map((c, i) => (
              <motion.article
                key={i}
                style={styles.card}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 140 }}
              >
                <div style={styles.content}>
                  <h3 style={styles.title}>{c.title}</h3>
                  <p style={styles.provider}>{c.provider}</p>
                  <span style={styles.issued}>Issued {c.issued}</span>

                  <a
                    href={c.proof}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.proofBtn}
                  >
                    {getProofLabel(c)}
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </Reveal>
  );
}

/* ================= HELPERS ================= */

function getProofLabel(c: Certification) {
  if (c.type === "pdf") return "View Certificate (PDF)";
  if (c.type === "image") return "View Certificate";
  return "Verify Credential";
}

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "100px 10%",
    background: "#020617"
  },

  container: {
    maxWidth: "1200px"
  },

  heading: {
    fontSize: "28px",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px"
  },

  card: {
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "26px",
    display: "flex",
    alignItems: "flex-start"
  },

  content: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px"
  },

  title: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#e5e7eb"
  },

  provider: {
    fontSize: "14px",
    color: "#38bdf8"
  },

  issued: {
    fontSize: "12px",
    color: "#64748b",
    marginBottom: "10px"
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
