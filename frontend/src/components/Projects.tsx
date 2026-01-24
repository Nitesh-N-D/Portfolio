// // // import { useEffect, useState } from "react";
// // // import Reveal from "./Reveal";

// // // interface Project {
// // //   id: number;
// // //   title: string;
// // //   description: string;
// // //   tech_stack: string;
// // //   image_url: string;
// // // }

// // // export default function Projects() {
// // //   const [projects, setProjects] = useState<Project[]>([]);

// // //   useEffect(() => {
// // //     fetch("http://localhost:5000/api/projects")
// // //       .then(res => res.json())
// // //       .then(data => setProjects(data));
// // //   }, []);

// // //   return (
// // //     <Reveal>
// // //       <section id="projects">
// // //         <h2>Projects</h2>

// // //         <div className="grid">
// // //           {projects.map(p => (
// // //             <div className="card" key={p.id}>
// // //               <img src={p.image_url} style={{ width: "100%", borderRadius: "12px", marginBottom: "16px" }} />
// // //               <h3>{p.title}</h3>
// // //               <p>{p.description}</p>
// // //               <small style={{ color: "#38bdf8" }}>{p.tech_stack}</small>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>
// // //     </Reveal>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import Reveal from "./Reveal";

// // interface Project {
// //   id: number;
// //   title: string;
// //   description: string;
// //   tech_stack: string;
// //   image_url: string;
// // }

// // export default function Projects() {
// //   const [projects, setProjects] = useState<Project[]>([]);

// //   useEffect(() => {
// //     fetch("https://nitesh-portfolio-backend.onrender.com/api/projects")
// //       .then(res => res.json())
// //       .then(data => setProjects(data));
// //   }, []);

// //   return (
// //     <Reveal>
// //       <section id="projects" style={styles.section}>
// //         <motion.div
// //           initial={{ opacity: 0, y: 60 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.7 }}
// //           viewport={{ once: true }}
// //         >
// //           <h2 style={styles.heading}>Projects</h2>
// //           <p style={styles.subtitle}>
// //             A selection of projects demonstrating my skills in full-stack development,
// //             system design, and problem solving.
// //           </p>

// //           <div style={styles.grid}>
// //             {projects.map(project => (
// //               <motion.div
// //                 key={project.id}
// //                 style={styles.card}
// //                 whileHover={{ y: -10, scale: 1.02 }}
// //                 transition={{ type: "spring", stiffness: 180 }}
// //               >
// //                 {/* Image */}
// //                 <div style={styles.imageWrapper}>
// //                   <img
// //                     src={project.image_url}
// //                     alt={project.title}
// //                     style={styles.image}
// //                   />
// //                 </div>

// //                 {/* Content */}
// //                 <div style={styles.content}>
// //                   <h3 style={styles.title}>{project.title}</h3>
// //                   <p style={styles.description}>{project.description}</p>

// //                   <div style={styles.stack}>
// //                     {project.tech_stack.split(",").map((tech, i) => (
// //                       <span key={i} style={styles.badge}>
// //                         {tech.trim()}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </section>
// //     </Reveal>
// //   );
// // }

// // /* ==================== STYLES ==================== */

// // const styles = {
// //   section: {
// //     padding: "100px 10%",
// //     background: "#020617"
// //   },

// //   heading: {
// //     fontSize: "28px",
// //     fontWeight: 600,
// //     color: "#38bdf8",
// //     marginBottom: "10px"
// //   },

// //   subtitle: {
// //     fontSize: "14px",
// //     color: "#94a3b8",
// //     marginBottom: "48px",
// //     maxWidth: "650px"
// //   },

// //   grid: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
// //     gap: "36px"
// //   },

// //   card: {
// //     background: "rgba(15, 23, 42, 0.7)",
// //     border: "1px solid #1e293b",
// //     borderRadius: "18px",
// //     overflow: "hidden",
// //     backdropFilter: "blur(14px)",
// //     transition: "all 0.3s ease"
// //   },

// //   imageWrapper: {
// //     width: "100%",
// //     height: "200px",
// //     overflow: "hidden"
// //   },

// //   image: {
// //     width: "100%",
// //     height: "100%",
// //     objectFit: "cover" as const
// //   },

// //   content: {
// //     padding: "26px"
// //   },

// //   title: {
// //     fontSize: "18px",
// //     fontWeight: 600,
// //     color: "#e5e7eb",
// //     marginBottom: "10px"
// //   },

// //   description: {
// //     fontSize: "14px",
// //     color: "#94a3b8",
// //     lineHeight: 1.6,
// //     marginBottom: "18px"
// //   },

// //   stack: {
// //     display: "flex",
// //     flexWrap: "wrap" as const,
// //     gap: "10px"
// //   },

// //   badge: {
// //     background: "rgba(56,189,248,0.12)",
// //     color: "#38bdf8",
// //     borderRadius: "999px",
// //     padding: "6px 14px",
// //     fontSize: "12px",
// //     fontWeight: 500
// //   }
// // };
// import { motion } from "framer-motion";
// import Reveal from "./Reveal";
// import { projects } from "../data/projects";

// export default function Projects() {
//   return (
//     <Reveal>
//       <section id="projects" style={styles.section}>
//         <h2 style={styles.heading}>Projects</h2>
//         <p style={styles.subtitle}>
//           Selected projects showcasing full-stack development skills.
//         </p>

//         <motion.div
//           drag="x"
//           dragConstraints={{ left: -600, right: 0 }}
//           style={styles.carousel}
//         >
//           {projects.map(project => (
//             <motion.div
//               key={project.id}
//               style={styles.card}
//               whileHover={{ y: -8, scale: 1.02 }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 style={styles.image}
//               />

//               <div style={styles.content}>
//                 <h3 style={styles.title}>{project.title}</h3>
//                 <p style={styles.description}>{project.description}</p>

//                 <div style={styles.stack}>
//                   {project.tech_stack.map((tech, i) => (
//                     <span key={i} style={styles.badge}>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </Reveal>
//   );
// }

// const styles = {
//   section: {
//     padding: "100px 10%",
//     background: "#020617",
//     overflow: "hidden"
//   },
//   heading: {
//     fontSize: "28px",
//     color: "#38bdf8",
//     fontWeight: 600
//   },
//   subtitle: {
//     fontSize: "14px",
//     color: "#94a3b8",
//     marginBottom: "36px"
//   },
//   carousel: {
//     display: "flex",
//     gap: "28px",
//     cursor: "grab"
//   },
//   card: {
//     minWidth: "340px",
//     background: "rgba(15,23,42,0.75)",
//     borderRadius: "18px",
//     border: "1px solid #1e293b",
//     overflow: "hidden"
//   },
//   image: {
//     width: "100%",
//     height: "190px",
//     objectFit: "cover" as const
//   },
//   content: {
//     padding: "22px"
//   },
//   title: {
//     fontSize: "16px",
//     color: "#e5e7eb",
//     fontWeight: 600
//   },
//   description: {
//     fontSize: "14px",
//     color: "#94a3b8",
//     margin: "10px 0"
//   },
//   stack: {
//     display: "flex",
//     gap: "8px",
//     flexWrap: "wrap" as const
//   },
//   badge: {
//     fontSize: "12px",
//     padding: "6px 12px",
//     borderRadius: "999px",
//     background: "rgba(56,189,248,0.12)",
//     color: "#38bdf8"
//   }
// };
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setDragWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <Reveal>
      <section id="projects" style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>
        <p style={styles.subtitle}>
          Swipe horizontally to explore my work.
        </p>

        {/* MOBILE HINT */}
        <div style={styles.hint}>← Swipe →</div>

        <motion.div
          ref={carouselRef}
          style={styles.carousel}
          drag="x"
          dragConstraints={{ left: -dragWidth, right: 0 }}
          dragElastic={0.08}
          dragMomentum={true}
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              style={styles.card}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={styles.image}
              />

              <div style={styles.content}>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>

                <div style={styles.stack}>
                  {project.tech_stack.map((tech, i) => (
                    <span key={i} style={styles.badge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={styles.actions}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.githubBtn}
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.liveBtn}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Reveal>
  );
}

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "100px 10%",
    background: "#020617",
    overflow: "hidden"
  },
  heading: {
    fontSize: "28px",
    color: "#38bdf8",
    fontWeight: 600
  },
  subtitle: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "10px"
  },
  hint: {
    fontSize: "12px",
    color: "#64748b",
    marginBottom: "18px"
  },
  carousel: {
    display: "flex",
    gap: "24px",
    cursor: "grab",
    touchAction: "pan-y" as const
  },
  card: {
    minWidth: "300px",
    maxWidth: "300px",
    background: "rgba(15,23,42,0.75)",
    borderRadius: "18px",
    border: "1px solid #1e293b",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover" as const
  },
  content: {
    padding: "20px"
  },
  title: {
    fontSize: "16px",
    color: "#e5e7eb",
    fontWeight: 600
  },
  description: {
    fontSize: "14px",
    color: "#94a3b8",
    margin: "10px 0"
  },
  stack: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap" as const,
    marginBottom: "14px"
  },
  badge: {
    fontSize: "12px",
    padding: "6px 12px",
    borderRadius: "999px",
    background: "rgba(56,189,248,0.12)",
    color: "#38bdf8"
  },
  actions: {
    display: "flex",
    gap: "12px"
  },
  githubBtn: {
    padding: "8px 14px",
    borderRadius: "10px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    fontSize: "13px",
    textDecoration: "none",
    fontWeight: 500
  },
  liveBtn: {
    padding: "8px 14px",
    borderRadius: "10px",
    background: "#38bdf8",
    color: "#020617",
    fontSize: "13px",
    textDecoration: "none",
    fontWeight: 600
  }
};
