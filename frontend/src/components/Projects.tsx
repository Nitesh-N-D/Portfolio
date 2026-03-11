// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import Reveal from "./Reveal";

// // // // // // // interface Project {
// // // // // // //   id: number;
// // // // // // //   title: string;
// // // // // // //   description: string;
// // // // // // //   tech_stack: string;
// // // // // // //   image_url: string;
// // // // // // // }

// // // // // // // export default function Projects() {
// // // // // // //   const [projects, setProjects] = useState<Project[]>([]);

// // // // // // //   useEffect(() => {
// // // // // // //     fetch("http://localhost:5000/api/projects")
// // // // // // //       .then(res => res.json())
// // // // // // //       .then(data => setProjects(data));
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <Reveal>
// // // // // // //       <section id="projects">
// // // // // // //         <h2>Projects</h2>

// // // // // // //         <div className="grid">
// // // // // // //           {projects.map(p => (
// // // // // // //             <div className="card" key={p.id}>
// // // // // // //               <img src={p.image_url} style={{ width: "100%", borderRadius: "12px", marginBottom: "16px" }} />
// // // // // // //               <h3>{p.title}</h3>
// // // // // // //               <p>{p.description}</p>
// // // // // // //               <small style={{ color: "#38bdf8" }}>{p.tech_stack}</small>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </section>
// // // // // // //     </Reveal>
// // // // // // //   );
// // // // // // // }
// // // // // // import { useEffect, useState } from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import Reveal from "./Reveal";

// // // // // // interface Project {
// // // // // //   id: number;
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // //   tech_stack: string;
// // // // // //   image_url: string;
// // // // // // }

// // // // // // export default function Projects() {
// // // // // //   const [projects, setProjects] = useState<Project[]>([]);

// // // // // //   useEffect(() => {
// // // // // //     fetch("https://nitesh-portfolio-backend.onrender.com/api/projects")
// // // // // //       .then(res => res.json())
// // // // // //       .then(data => setProjects(data));
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <Reveal>
// // // // // //       <section id="projects" style={styles.section}>
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 60 }}
// // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.7 }}
// // // // // //           viewport={{ once: true }}
// // // // // //         >
// // // // // //           <h2 style={styles.heading}>Projects</h2>
// // // // // //           <p style={styles.subtitle}>
// // // // // //             A selection of projects demonstrating my skills in full-stack development,
// // // // // //             system design, and problem solving.
// // // // // //           </p>

// // // // // //           <div style={styles.grid}>
// // // // // //             {projects.map(project => (
// // // // // //               <motion.div
// // // // // //                 key={project.id}
// // // // // //                 style={styles.card}
// // // // // //                 whileHover={{ y: -10, scale: 1.02 }}
// // // // // //                 transition={{ type: "spring", stiffness: 180 }}
// // // // // //               >
// // // // // //                 {/* Image */}
// // // // // //                 <div style={styles.imageWrapper}>
// // // // // //                   <img
// // // // // //                     src={project.image_url}
// // // // // //                     alt={project.title}
// // // // // //                     style={styles.image}
// // // // // //                   />
// // // // // //                 </div>

// // // // // //                 {/* Content */}
// // // // // //                 <div style={styles.content}>
// // // // // //                   <h3 style={styles.title}>{project.title}</h3>
// // // // // //                   <p style={styles.description}>{project.description}</p>

// // // // // //                   <div style={styles.stack}>
// // // // // //                     {project.tech_stack.split(",").map((tech, i) => (
// // // // // //                       <span key={i} style={styles.badge}>
// // // // // //                         {tech.trim()}
// // // // // //                       </span>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </motion.div>
// // // // // //       </section>
// // // // // //     </Reveal>
// // // // // //   );
// // // // // // }

// // // // // // /* ==================== STYLES ==================== */

// // // // // // const styles = {
// // // // // //   section: {
// // // // // //     padding: "100px 10%",
// // // // // //     background: "#020617"
// // // // // //   },

// // // // // //   heading: {
// // // // // //     fontSize: "28px",
// // // // // //     fontWeight: 600,
// // // // // //     color: "#38bdf8",
// // // // // //     marginBottom: "10px"
// // // // // //   },

// // // // // //   subtitle: {
// // // // // //     fontSize: "14px",
// // // // // //     color: "#94a3b8",
// // // // // //     marginBottom: "48px",
// // // // // //     maxWidth: "650px"
// // // // // //   },

// // // // // //   grid: {
// // // // // //     display: "grid",
// // // // // //     gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
// // // // // //     gap: "36px"
// // // // // //   },

// // // // // //   card: {
// // // // // //     background: "rgba(15, 23, 42, 0.7)",
// // // // // //     border: "1px solid #1e293b",
// // // // // //     borderRadius: "18px",
// // // // // //     overflow: "hidden",
// // // // // //     backdropFilter: "blur(14px)",
// // // // // //     transition: "all 0.3s ease"
// // // // // //   },

// // // // // //   imageWrapper: {
// // // // // //     width: "100%",
// // // // // //     height: "200px",
// // // // // //     overflow: "hidden"
// // // // // //   },

// // // // // //   image: {
// // // // // //     width: "100%",
// // // // // //     height: "100%",
// // // // // //     objectFit: "cover" as const
// // // // // //   },

// // // // // //   content: {
// // // // // //     padding: "26px"
// // // // // //   },

// // // // // //   title: {
// // // // // //     fontSize: "18px",
// // // // // //     fontWeight: 600,
// // // // // //     color: "#e5e7eb",
// // // // // //     marginBottom: "10px"
// // // // // //   },

// // // // // //   description: {
// // // // // //     fontSize: "14px",
// // // // // //     color: "#94a3b8",
// // // // // //     lineHeight: 1.6,
// // // // // //     marginBottom: "18px"
// // // // // //   },

// // // // // //   stack: {
// // // // // //     display: "flex",
// // // // // //     flexWrap: "wrap" as const,
// // // // // //     gap: "10px"
// // // // // //   },

// // // // // //   badge: {
// // // // // //     background: "rgba(56,189,248,0.12)",
// // // // // //     color: "#38bdf8",
// // // // // //     borderRadius: "999px",
// // // // // //     padding: "6px 14px",
// // // // // //     fontSize: "12px",
// // // // // //     fontWeight: 500
// // // // // //   }
// // // // // // };
// // // // // import { motion } from "framer-motion";
// // // // // import Reveal from "./Reveal";
// // // // // import { projects } from "../data/projects";

// // // // // export default function Projects() {
// // // // //   return (
// // // // //     <Reveal>
// // // // //       <section id="projects" style={styles.section}>
// // // // //         <h2 style={styles.heading}>Projects</h2>
// // // // //         <p style={styles.subtitle}>
// // // // //           Selected projects showcasing full-stack development skills.
// // // // //         </p>

// // // // //         <motion.div
// // // // //           drag="x"
// // // // //           dragConstraints={{ left: -600, right: 0 }}
// // // // //           style={styles.carousel}
// // // // //         >
// // // // //           {projects.map(project => (
// // // // //             <motion.div
// // // // //               key={project.id}
// // // // //               style={styles.card}
// // // // //               whileHover={{ y: -8, scale: 1.02 }}
// // // // //             >
// // // // //               <img
// // // // //                 src={project.image}
// // // // //                 alt={project.title}
// // // // //                 style={styles.image}
// // // // //               />

// // // // //               <div style={styles.content}>
// // // // //                 <h3 style={styles.title}>{project.title}</h3>
// // // // //                 <p style={styles.description}>{project.description}</p>

// // // // //                 <div style={styles.stack}>
// // // // //                   {project.tech_stack.map((tech, i) => (
// // // // //                     <span key={i} style={styles.badge}>
// // // // //                       {tech}
// // // // //                     </span>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </motion.div>
// // // // //       </section>
// // // // //     </Reveal>
// // // // //   );
// // // // // }

// // // // // const styles = {
// // // // //   section: {
// // // // //     padding: "100px 10%",
// // // // //     background: "#020617",
// // // // //     overflow: "hidden"
// // // // //   },
// // // // //   heading: {
// // // // //     fontSize: "28px",
// // // // //     color: "#38bdf8",
// // // // //     fontWeight: 600
// // // // //   },
// // // // //   subtitle: {
// // // // //     fontSize: "14px",
// // // // //     color: "#94a3b8",
// // // // //     marginBottom: "36px"
// // // // //   },
// // // // //   carousel: {
// // // // //     display: "flex",
// // // // //     gap: "28px",
// // // // //     cursor: "grab"
// // // // //   },
// // // // //   card: {
// // // // //     minWidth: "340px",
// // // // //     background: "rgba(15,23,42,0.75)",
// // // // //     borderRadius: "18px",
// // // // //     border: "1px solid #1e293b",
// // // // //     overflow: "hidden"
// // // // //   },
// // // // //   image: {
// // // // //     width: "100%",
// // // // //     height: "190px",
// // // // //     objectFit: "cover" as const
// // // // //   },
// // // // //   content: {
// // // // //     padding: "22px"
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: "16px",
// // // // //     color: "#e5e7eb",
// // // // //     fontWeight: 600
// // // // //   },
// // // // //   description: {
// // // // //     fontSize: "14px",
// // // // //     color: "#94a3b8",
// // // // //     margin: "10px 0"
// // // // //   },
// // // // //   stack: {
// // // // //     display: "flex",
// // // // //     gap: "8px",
// // // // //     flexWrap: "wrap" as const
// // // // //   },
// // // // //   badge: {
// // // // //     fontSize: "12px",
// // // // //     padding: "6px 12px",
// // // // //     borderRadius: "999px",
// // // // //     background: "rgba(56,189,248,0.12)",
// // // // //     color: "#38bdf8"
// // // // //   }
// // // // // };
// // // // import { motion } from "framer-motion";
// // // // import { useRef, useEffect, useState } from "react";
// // // // import Reveal from "./Reveal";
// // // // import { projects } from "../data/projects";

// // // // export default function Projects() {
// // // //   const carouselRef = useRef<HTMLDivElement>(null);
// // // //   const [dragWidth, setDragWidth] = useState(0);

// // // //   useEffect(() => {
// // // //     if (carouselRef.current) {
// // // //       const scrollWidth = carouselRef.current.scrollWidth;
// // // //       const offsetWidth = carouselRef.current.offsetWidth;
// // // //       setDragWidth(scrollWidth - offsetWidth);
// // // //     }
// // // //   }, []);

// // // //   return (
// // // //     <Reveal>
// // // //       <section id="projects" style={styles.section}>
// // // //         <h2 style={styles.heading}>Projects</h2>
// // // //         <p style={styles.subtitle}>
// // // //           Swipe horizontally to explore my work.
// // // //         </p>

// // // //         {/* MOBILE HINT */}
// // // //         <div style={styles.hint}>← Swipe →</div>

// // // //         <motion.div
// // // //           ref={carouselRef}
// // // //           style={styles.carousel}
// // // //           drag="x"
// // // //           dragConstraints={{ left: -dragWidth, right: 0 }}
// // // //           dragElastic={0.08}
// // // //           dragMomentum={true}
// // // //         >
// // // //           {projects.map(project => (
// // // //             <motion.div
// // // //               key={project.id}
// // // //               style={styles.card}
// // // //               whileHover={{ y: -6 }}
// // // //               whileTap={{ scale: 0.97 }}
// // // //             >
// // // //               <img
// // // //                 src={project.image}
// // // //                 alt={project.title}
// // // //                 style={styles.image}
// // // //               />

// // // //               <div style={styles.content}>
// // // //                 <h3 style={styles.title}>{project.title}</h3>
// // // //                 <p style={styles.description}>{project.description}</p>

// // // //                 <div style={styles.stack}>
// // // //                   {project.tech_stack.map((tech, i) => (
// // // //                     <span key={i} style={styles.badge}>
// // // //                       {tech}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>

// // // //                 <div style={styles.actions}>
// // // //                   <a
// // // //                     href={project.github}
// // // //                     target="_blank"
// // // //                     rel="noopener noreferrer"
// // // //                     style={styles.githubBtn}
// // // //                   >
// // // //                     GitHub
// // // //                   </a>

// // // //                   {project.live && (
// // // //                     <a
// // // //                       href={project.live}
// // // //                       target="_blank"
// // // //                       rel="noopener noreferrer"
// // // //                       style={styles.liveBtn}
// // // //                     >
// // // //                       Live Demo
// // // //                     </a>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </motion.div>
// // // //       </section>
// // // //     </Reveal>
// // // //   );
// // // // }

// // // // /* ================= STYLES ================= */

// // // // const styles = {
// // // //   section: {
// // // //     padding: "100px 10%",
// // // //     background: "#020617",
// // // //     overflow: "hidden"
// // // //   },
// // // //   heading: {
// // // //     fontSize: "28px",
// // // //     color: "#38bdf8",
// // // //     fontWeight: 600
// // // //   },
// // // //   subtitle: {
// // // //     fontSize: "14px",
// // // //     color: "#94a3b8",
// // // //     marginBottom: "10px"
// // // //   },
// // // //   hint: {
// // // //     fontSize: "12px",
// // // //     color: "#64748b",
// // // //     marginBottom: "18px"
// // // //   },
// // // //   carousel: {
// // // //     display: "flex",
// // // //     gap: "24px",
// // // //     cursor: "grab",
// // // //     touchAction: "pan-y" as const
// // // //   },
// // // //   card: {
// // // //     minWidth: "300px",
// // // //     maxWidth: "300px",
// // // //     background: "rgba(15,23,42,0.75)",
// // // //     borderRadius: "18px",
// // // //     border: "1px solid #1e293b",
// // // //     overflow: "hidden"
// // // //   },
// // // //   image: {
// // // //     width: "100%",
// // // //     height: "180px",
// // // //     objectFit: "cover" as const
// // // //   },
// // // //   content: {
// // // //     padding: "20px"
// // // //   },
// // // //   title: {
// // // //     fontSize: "16px",
// // // //     color: "#e5e7eb",
// // // //     fontWeight: 600
// // // //   },
// // // //   description: {
// // // //     fontSize: "14px",
// // // //     color: "#94a3b8",
// // // //     margin: "10px 0"
// // // //   },
// // // //   stack: {
// // // //     display: "flex",
// // // //     gap: "8px",
// // // //     flexWrap: "wrap" as const,
// // // //     marginBottom: "14px"
// // // //   },
// // // //   badge: {
// // // //     fontSize: "12px",
// // // //     padding: "6px 12px",
// // // //     borderRadius: "999px",
// // // //     background: "rgba(56,189,248,0.12)",
// // // //     color: "#38bdf8"
// // // //   },
// // // //   actions: {
// // // //     display: "flex",
// // // //     gap: "12px"
// // // //   },
// // // //   githubBtn: {
// // // //     padding: "8px 14px",
// // // //     borderRadius: "10px",
// // // //     border: "1px solid #38bdf8",
// // // //     color: "#38bdf8",
// // // //     fontSize: "13px",
// // // //     textDecoration: "none",
// // // //     fontWeight: 500
// // // //   },
// // // //   liveBtn: {
// // // //     padding: "8px 14px",
// // // //     borderRadius: "10px",
// // // //     background: "#38bdf8",
// // // //     color: "#020617",
// // // //     fontSize: "13px",
// // // //     textDecoration: "none",
// // // //     fontWeight: 600
// // // //   }
// // // // };
// // // import { motion } from "framer-motion";
// // // import Reveal from "./Reveal";
// // // import { projects } from "../data/projects";

// // // /*
// // // Expected project shape:
// // // {
// // //   id: number;
// // //   title: string;
// // //   description: string;
// // //   tech_stack: string[];
// // //   image: string;
// // //   github: string;
// // //   live?: string;
// // // }
// // // */

// // // export default function Projects() {
// // //   return (
// // //     <section id="projects" style={styles.section}>
// // //       <Reveal>
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 24 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.5, ease: "easeOut" }}
// // //           viewport={{ once: true }}
// // //           style={styles.container}
// // //         >
// // //           <h2 style={styles.heading}>Projects</h2>
// // //           <p style={styles.subtitle}>
// // //             A selection of real-world projects demonstrating full-stack
// // //             development, problem-solving ability, and clean engineering
// // //             practices.
// // //           </p>

// // //           <div style={styles.grid}>
// // //             {projects.map(project => (
// // //               <motion.article
// // //                 key={project.id}
// // //                 style={styles.card}
// // //                 whileHover={{ y: -4 }}
// // //                 transition={{ type: "spring", stiffness: 140 }}
// // //               >
// // //                 {/* PROJECT IMAGE */}
// // //                 <div style={styles.imageWrapper}>
// // //                   <img
// // //                     src={project.image}
// // //                     alt={project.title}
// // //                     style={styles.image}
// // //                   />
// // //                 </div>

// // //                 {/* PROJECT CONTENT */}
// // //                 <div style={styles.content}>
// // //                   <h3 style={styles.title}>{project.title}</h3>

// // //                   <p style={styles.description}>
// // //                     {project.description}
// // //                   </p>

// // //                   {/* TECH STACK */}
// // //                   <div style={styles.stack}>
// // //                     {project.tech_stack.map((tech, i) => (
// // //                       <span key={i} style={styles.badge}>
// // //                         {tech}
// // //                       </span>
// // //                     ))}
// // //                   </div>

// // //                   {/* ACTIONS */}
// // //                   <div style={styles.actions}>
// // //                     <a
// // //                       href={project.github}
// // //                       target="_blank"
// // //                       rel="noopener noreferrer"
// // //                       style={styles.githubBtn}
// // //                     >
// // //                       View Code
// // //                     </a>

// // //                     {project.live && (
// // //                       <a
// // //                         href={project.live}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                         style={styles.liveBtn}
// // //                       >
// // //                         Live Demo
// // //                       </a>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </motion.article>
// // //             ))}
// // //           </div>
// // //         </motion.div>
// // //       </Reveal>
// // //     </section>
// // //   );
// // // }

// // // /* ================= STYLES ================= */

// // // const styles = {
// // //   section: {
// // //     padding: "100px 10%",
// // //     background: "#020617"
// // //   },

// // //   container: {
// // //     maxWidth: "1200px"
// // //   },

// // //   heading: {
// // //     fontSize: "28px",
// // //     fontWeight: 600,
// // //     color: "#38bdf8",
// // //     marginBottom: "14px"
// // //   },

// // //   subtitle: {
// // //     fontSize: "15px",
// // //     color: "#94a3b8",
// // //     marginBottom: "48px",
// // //     maxWidth: "760px",
// // //     lineHeight: 1.7
// // //   },

// // //   grid: {
// // //     display: "grid",
// // //     gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
// // //     gap: "36px",
// // //     alignItems: "stretch"
// // //   },

// // //   card: {
// // //     background: "rgba(15, 23, 42, 0.75)",
// // //     border: "1px solid #1e293b",
// // //     borderRadius: "18px",
// // //     overflow: "hidden",
// // //     display: "flex",
// // //     flexDirection: "column" as const
// // //   },

// // //   imageWrapper: {
// // //     width: "100%",
// // //     height: "190px",
// // //     overflow: "hidden"
// // //   },

// // //   image: {
// // //     width: "100%",
// // //     height: "100%",
// // //     objectFit: "cover" as const
// // //   },

// // //   content: {
// // //     padding: "24px",
// // //     display: "flex",
// // //     flexDirection: "column" as const,
// // //     flexGrow: 1
// // //   },

// // //   title: {
// // //     fontSize: "18px",
// // //     fontWeight: 600,
// // //     color: "#e5e7eb",
// // //     marginBottom: "10px"
// // //   },

// // //   description: {
// // //     fontSize: "14px",
// // //     color: "#94a3b8",
// // //     lineHeight: 1.6,
// // //     marginBottom: "18px",
// // //     flexGrow: 1
// // //   },

// // //   stack: {
// // //     display: "flex",
// // //     flexWrap: "wrap" as const,
// // //     gap: "8px",
// // //     marginBottom: "20px"
// // //   },

// // //   badge: {
// // //     fontSize: "12px",
// // //     padding: "6px 12px",
// // //     borderRadius: "999px",
// // //     background: "rgba(56,189,248,0.12)",
// // //     color: "#38bdf8",
// // //     fontWeight: 500
// // //   },

// // //   actions: {
// // //     display: "flex",
// // //     gap: "14px"
// // //   },

// // //   githubBtn: {
// // //     padding: "8px 16px",
// // //     borderRadius: "10px",
// // //     border: "1px solid #38bdf8",
// // //     color: "#38bdf8",
// // //     fontSize: "13px",
// // //     fontWeight: 500,
// // //     textDecoration: "none"
// // //   },

// // //   liveBtn: {
// // //     padding: "8px 16px",
// // //     borderRadius: "10px",
// // //     background: "#38bdf8",
// // //     color: "#020617",
// // //     fontSize: "13px",
// // //     fontWeight: 600,
// // //     textDecoration: "none"
// // //   }
// // // };
// // import { motion } from "framer-motion";
// // import Reveal from "./Reveal";
// // import { projects } from "../data/projects";

// // /*
// // Project shape (from data/projects.ts):

// // {
// //   id: number;
// //   title: string;
// //   description: string;
// //   role: string;
// //   impact?: string;
// //   tech_stack: string[];
// //   image: string;
// //   github: string;
// //   live?: string;
// //   featured?: boolean;
// // }
// // */

// // export default function Projects() {
// //   return (
// //     <section id="projects" style={styles.section}>
// //       <Reveal>
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, ease: "easeOut" }}
// //           viewport={{ once: true }}
// //           style={styles.container}
// //         >
// //           {/* SECTION HEADER */}
// //           <h2 style={styles.heading}>Projects</h2>
// //           <p style={styles.subtitle}>
// //             Selected projects demonstrating real-world problem solving,
// //             full-stack development, and measurable impact.
// //           </p>

// //           {/* PROJECT GRID */}
// //           <div style={styles.grid}>
// //             {projects.map(project => (
// //               <motion.article
// //                 key={project.id}
// //                 style={{
// //                   ...styles.card,
// //                   ...(project.featured ? styles.featuredCard : {})
// //                 }}
// //                 whileHover={{ y: -4 }}
// //                 transition={{ type: "spring", stiffness: 140 }}
// //               >
// //                 {/* FEATURED BADGE */}
// //                 {project.featured && (
// //                   <span style={styles.featuredBadge}>Featured</span>
// //                 )}

// //                 {/* PROJECT IMAGE */}
// //                 <div style={styles.imageWrapper}>
// //                   <img
// //                     src={project.image}
// //                     alt={project.title}
// //                     style={styles.image}
// //                   />
// //                 </div>

// //                 {/* PROJECT CONTENT */}
// //                 <div style={styles.content}>
// //                   <h3 style={styles.title}>{project.title}</h3>

// //                   <p style={styles.role}>
// //                     <strong>Role:</strong> {project.role}
// //                   </p>

// //                   <p style={styles.description}>
// //                     {project.description}
// //                   </p>

// //                   {project.impact && (
// //                     <p style={styles.impact}>
// //                       <strong>Impact:</strong> {project.impact}
// //                     </p>
// //                   )}

// //                   {/* TECH STACK */}
// //                   <div style={styles.stack}>
// //                     {project.tech_stack.map((tech, i) => (
// //                       <span key={i} style={styles.badge}>
// //                         {tech}
// //                       </span>
// //                     ))}
// //                   </div>

// //                   {/* ACTION BUTTONS */}
// //                   <div style={styles.actions}>
// //                     <a
// //                       href={project.github}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       style={styles.githubBtn}
// //                     >
// //                       View Code
// //                     </a>

// //                     {project.live && (
// //                       <a
// //                         href={project.live}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         style={styles.liveBtn}
// //                       >
// //                         Live Demo
// //                       </a>
// //                     )}
// //                   </div>
// //                 </div>
// //               </motion.article>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </Reveal>
// //     </section>
// //   );
// // }

// // /* ===================== STYLES ===================== */

// // const styles = {
// //   section: {
// //     padding: "100px 10%",
// //     background: "#020617"
// //   },

// //   container: {
// //     maxWidth: "1200px"
// //   },

// //   heading: {
// //     fontSize: "28px",
// //     fontWeight: 600,
// //     color: "#38bdf8",
// //     marginBottom: "14px"
// //   },

// //   subtitle: {
// //     fontSize: "15px",
// //     color: "#94a3b8",
// //     marginBottom: "48px",
// //     maxWidth: "760px",
// //     lineHeight: 1.7
// //   },

// //   grid: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
// //     gap: "36px",
// //     alignItems: "stretch"
// //   },

// //   card: {
// //     position: "relative" as const,
// //     background: "rgba(15, 23, 42, 0.75)",
// //     border: "1px solid #1e293b",
// //     borderRadius: "18px",
// //     overflow: "hidden",
// //     display: "flex",
// //     flexDirection: "column" as const
// //   },

// //   featuredCard: {
// //     borderColor: "#38bdf8"
// //   },

// //   featuredBadge: {
// //     position: "absolute" as const,
// //     top: "14px",
// //     left: "14px",
// //     background: "#38bdf8",
// //     color: "#020617",
// //     fontSize: "11px",
// //     fontWeight: 700,
// //     padding: "4px 10px",
// //     borderRadius: "999px",
// //     zIndex: 2
// //   },

// //   imageWrapper: {
// //     width: "100%",
// //     height: "190px",
// //     overflow: "hidden"
// //   },

// //   image: {
// //     width: "100%",
// //     height: "100%",
// //     objectFit: "cover" as const
// //   },

// //   content: {
// //     padding: "24px",
// //     display: "flex",
// //     flexDirection: "column" as const,
// //     flexGrow: 1
// //   },

// //   title: {
// //     fontSize: "18px",
// //     fontWeight: 600,
// //     color: "#e5e7eb",
// //     marginBottom: "6px"
// //   },

// //   role: {
// //     fontSize: "13px",
// //     color: "#cbd5f5",
// //     marginBottom: "10px"
// //   },

// //   description: {
// //     fontSize: "14px",
// //     color: "#94a3b8",
// //     lineHeight: 1.6,
// //     marginBottom: "12px"
// //   },

// //   impact: {
// //     fontSize: "14px",
// //     color: "#cbd5f5",
// //     marginBottom: "18px"
// //   },

// //   stack: {
// //     display: "flex",
// //     flexWrap: "wrap" as const,
// //     gap: "8px",
// //     marginBottom: "20px"
// //   },

// //   badge: {
// //     fontSize: "12px",
// //     padding: "6px 12px",
// //     borderRadius: "999px",
// //     background: "rgba(56,189,248,0.12)",
// //     color: "#38bdf8",
// //     fontWeight: 500
// //   },

// //   actions: {
// //     display: "flex",
// //     gap: "14px",
// //     marginTop: "auto"
// //   },

// //   githubBtn: {
// //     padding: "8px 16px",
// //     borderRadius: "10px",
// //     border: "1px solid #38bdf8",
// //     color: "#38bdf8",
// //     fontSize: "13px",
// //     fontWeight: 500,
// //     textDecoration: "none"
// //   },

// //   liveBtn: {
// //     padding: "8px 16px",
// //     borderRadius: "10px",
// //     background: "#38bdf8",
// //     color: "#020617",
// //     fontSize: "13px",
// //     fontWeight: 600,
// //     textDecoration: "none"
// //   }
// // };
// import { motion } from "framer-motion";
// import Reveal from "./Reveal";
// import { projects } from "../data/projects";
// import type { CSSProperties } from "react";

// /*
// Project shape:

// {
//   id: number;
//   title: string;
//   description: string;
//   role: string;
//   impact?: string;
//   tech_stack: string[];
//   image: string;
//   github: string;
//   live?: string;
//   featured?: boolean;
// }
// */

// export default function Projects() {
//   return (
//     <section id="projects" style={styles.section}>
//       <Reveal>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           viewport={{ once: true }}
//           style={styles.container}
//         >
//           {/* HEADER */}
//           <h2 style={styles.heading}>Projects</h2>
//           <p style={styles.subtitle}>
//             Selected projects demonstrating real-world problem solving,
//             full-stack development, and measurable impact.
//           </p>

//           {/* GRID */}
//           <div style={styles.grid}>
//             {projects.map(project => (
//               <motion.article
//                 key={project.id}
//                 style={{
//                   ...styles.card,
//                   ...(project.featured ? styles.featuredCard : {})
//                 }}
//                 whileHover={{ y: -4 }}
//                 transition={{ type: "spring", stiffness: 140 }}
//               >
//                 {project.featured && (
//                   <span style={styles.featuredBadge}>Featured</span>
//                 )}

//                 <div style={styles.imageWrapper}>
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     style={styles.image}
//                   />
//                 </div>

//                 <div style={styles.content}>
//                   <h3 style={styles.title}>{project.title}</h3>

//                   <p style={styles.role}>
//                     <strong>Role:</strong> {project.role}
//                   </p>

//                   <p style={styles.description}>{project.description}</p>

//                   {project.impact && (
//                     <p style={styles.impact}>
//                       <strong>Impact:</strong> {project.impact}
//                     </p>
//                   )}

//                   <div style={styles.stack}>
//                     {project.tech_stack.map((tech, i) => (
//                       <span key={i} style={styles.badge}>
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div style={styles.actions}>
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={styles.githubBtn}
//                     >
//                       View Code
//                     </a>

//                     {project.live && (
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={styles.liveBtn}
//                       >
//                         Live Demo
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </motion.div>
//       </Reveal>
//     </section>
//   );
// }

// /* ================= STYLES ================= */

// const styles: Record<string, CSSProperties> = {
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
//     marginBottom: "14px"
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
//     gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
//     gap: "36px",
//     alignItems: "stretch"
//   },

//   card: {
//     position: "relative",
//     background: "rgba(15, 23, 42, 0.75)",
//     border: "1px solid #1e293b",
//     borderRadius: "18px",
//     overflow: "hidden",
//     display: "flex",
//     flexDirection: "column"
//   },

//   featuredCard: {
//     borderColor: "#38bdf8"
//   },

//   featuredBadge: {
//     position: "absolute",
//     top: "14px",
//     left: "14px",
//     background: "#38bdf8",
//     color: "#020617",
//     fontSize: "11px",
//     fontWeight: 700,
//     padding: "4px 10px",
//     borderRadius: "999px",
//     zIndex: 2
//   },

//   imageWrapper: {
//     width: "100%",
//     height: "190px",
//     overflow: "hidden"
//   },

//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover"
//   },

//   content: {
//     padding: "24px",
//     display: "flex",
//     flexDirection: "column",
//     flexGrow: 1
//   },

//   title: {
//     fontSize: "18px",
//     fontWeight: 600,
//     color: "#e5e7eb",
//     marginBottom: "6px"
//   },

//   role: {
//     fontSize: "13px",
//     color: "#cbd5f5",
//     marginBottom: "10px"
//   },

//   description: {
//     fontSize: "14px",
//     color: "#94a3b8",
//     lineHeight: 1.6,
//     marginBottom: "12px"
//   },

//   impact: {
//     fontSize: "14px",
//     color: "#cbd5f5",
//     marginBottom: "18px"
//   },

//   stack: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "8px",
//     marginBottom: "20px"
//   },

//   badge: {
//     fontSize: "12px",
//     padding: "6px 12px",
//     borderRadius: "999px",
//     background: "rgba(56,189,248,0.12)",
//     color: "#38bdf8",
//     fontWeight: 500
//   },

//   actions: {
//     display: "flex",
//     gap: "14px",
//     marginTop: "auto"
//   },

//   githubBtn: {
//     padding: "8px 16px",
//     borderRadius: "10px",
//     border: "1px solid #38bdf8",
//     color: "#38bdf8",
//     fontSize: "13px",
//     fontWeight: 500,
//     textDecoration: "none"
//   },

//   liveBtn: {
//     padding: "8px 16px",
//     borderRadius: "10px",
//     background: "#38bdf8",
//     color: "#020617",
//     fontSize: "13px",
//     fontWeight: 600,
//     textDecoration: "none"
//   }
// };
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "../data/projects";
import type { CSSProperties } from "react";

/*
Project shape:

{
  id: number;
  title: string;
  description: string;
  role: string;
  impact?: string;
  tech_stack: string[];
  image: string;
  github: string;
  live?: string;
  featured?: boolean;
}
*/

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          style={styles.container}
        >
          {/* HEADER */}
          <h2 style={styles.heading}>Projects</h2>
          <p style={styles.subtitle}>
            Selected projects demonstrating real-world problem solving,
            full-stack development, and measurable impact.
          </p>

          {/* GRID */}
          <div style={styles.grid}>
            {projects.map(project => (
              <motion.article
                key={project.id}
                style={{
                  ...styles.card,
                  ...(project.featured ? styles.featuredCard : {})
                }}
               whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 140 }}
              >
                {project.featured && (
                  <span style={styles.featuredBadge}>Featured</span>
                )}

                <div style={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={styles.image}
                  />
                </div>

                <div style={styles.content}>
                  <h3 style={styles.title}>{project.title}</h3>

                  <p style={styles.role}>
                    <strong>Role:</strong> {project.role}
                  </p>

                  <p style={styles.description}>{project.description}</p>

                  {project.impact && (
                    <p style={styles.impact}>
                      <strong>Impact:</strong> {project.impact}
                    </p>
                  )}

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
                      View Code
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
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Reveal>

      {/* ✅ MOBILE-ONLY RESPONSIVE FIX */}
      <style>
        {`
          @media (max-width: 768px) {
            #projects {
              padding: 80px 5%;
            }
          }
        `}
      </style>
    </section>
  );
}

/* ================= STYLES ================= */
const styles: Record<string, CSSProperties> = {
  section: {
    padding: "120px 8%",
    background: "#020617"
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto"
  },

  heading: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#38bdf8",
    marginBottom: "16px"
  },

  subtitle: {
    fontSize: "15px",
    color: "#94a3b8",
    marginBottom: "56px",
    maxWidth: "700px",
    lineHeight: 1.7
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "32px"
  },

  card: {
    position: "relative",
    background: "rgba(15,23,42,0.75)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
    backdropFilter: "blur(12px)"
  },

  featuredCard: {
    borderColor: "#38bdf8",
    boxShadow: "0 0 25px rgba(56,189,248,0.15)"
  },

  featuredBadge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    background: "#38bdf8",
    color: "#020617",
    fontSize: "11px",
    fontWeight: 700,
    padding: "4px 10px",
    borderRadius: "999px",
    zIndex: 2
  },

  imageWrapper: {
    width: "100%",
    height: "200px",
    overflow: "hidden"
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease"
  },

  content: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  },

  title: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#e5e7eb",
    marginBottom: "6px"
  },

  role: {
    fontSize: "13px",
    color: "#cbd5f5",
    marginBottom: "10px"
  },

  description: {
    fontSize: "14px",
    color: "#94a3b8",
    lineHeight: 1.6,
    marginBottom: "14px",

    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  },

  impact: {
    fontSize: "13px",
    color: "#cbd5f5",
    marginBottom: "16px"
  },

  stack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "20px"
  },

  badge: {
    fontSize: "12px",
    padding: "5px 12px",
    borderRadius: "999px",
    background: "rgba(56,189,248,0.12)",
    color: "#38bdf8",
    fontWeight: 500
  },

  actions: {
    display: "flex",
    gap: "12px",
    marginTop: "auto"
  },

  githubBtn: {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    fontSize: "13px",
    fontWeight: 500,
    textDecoration: "none",
    transition: "all 0.25s ease"
  },

  liveBtn: {
    padding: "8px 16px",
    borderRadius: "8px",
    background: "#38bdf8",
    color: "#020617",
    fontSize: "13px",
    fontWeight: 600,
    textDecoration: "none",
    transition: "all 0.25s ease"
  }
};