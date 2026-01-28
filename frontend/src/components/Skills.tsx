// // // // // // // import { motion } from "framer-motion";
// // // // // // // import Reveal from "./Reveal";

// // // // // // // const skills = [
// // // // // // //   "Java",
// // // // // // //   "JavaScript",
// // // // // // //   "React",
// // // // // // //   "Node.js",
// // // // // // //   "MySQL",
// // // // // // //   "Git",
// // // // // // //   "HTML",
// // // // // // //   "CSS",
// // // // // // //   "Express",
// // // // // // //   "MongoDB"
// // // // // // // ];

// // // // // // // export default function Skills() {
// // // // // // //   return (
// // // // // // //     <section id="skills" style={styles.section}>
// // // // // // //       <Reveal>
// // // // // // //         <motion.div
// // // // // // //           initial={{ opacity: 0, y: 60 }}
// // // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ duration: 0.7 }}
// // // // // // //           viewport={{ once: true }}
// // // // // // //         >
// // // // // // //           <h2 style={styles.heading}>Skills & Technologies</h2>
// // // // // // //           <p style={styles.subtitle}>
// // // // // // //             Technologies I work with and continuously improve.
// // // // // // //           </p>

// // // // // // //           <div style={styles.grid}>
// // // // // // //             {skills.map((skill, index) => (
// // // // // // //               <motion.div
// // // // // // //                 key={index}
// // // // // // //                 style={styles.card}
// // // // // // //                 whileHover={{
// // // // // // //                   scale: 1.05,
// // // // // // //                   boxShadow: "0 0 40px rgba(56,189,248,0.15)"
// // // // // // //                 }}
// // // // // // //                 transition={{ duration: 0.25 }}
// // // // // // //               >
// // // // // // //                 {skill}
// // // // // // //               </motion.div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </motion.div>
// // // // // // //       </Reveal>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // // /* ==================== STYLES ==================== */

// // // // // // // const styles = {
// // // // // // //   section: {
// // // // // // //     padding: "100px 10%",
// // // // // // //     background: "#020617"
// // // // // // //   },

// // // // // // //   heading: {
// // // // // // //     fontSize: "28px",
// // // // // // //     fontWeight: 600,
// // // // // // //     color: "#38bdf8",
// // // // // // //     marginBottom: "12px"
// // // // // // //   },

// // // // // // //   subtitle: {
// // // // // // //     fontSize: "14px",
// // // // // // //     color: "#94a3b8",
// // // // // // //     marginBottom: "40px",
// // // // // // //     maxWidth: "600px"
// // // // // // //   },

// // // // // // //   grid: {
// // // // // // //     display: "grid",
// // // // // // //     gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
// // // // // // //     gap: "22px",
// // // // // // //     maxWidth: "900px"
// // // // // // //   },

// // // // // // //   card: {
// // // // // // //     background: "rgba(15, 23, 42, 0.7)",
// // // // // // //     border: "1px solid #1e293b",
// // // // // // //     borderRadius: "14px",
// // // // // // //     padding: "22px 18px",
// // // // // // //     fontSize: "14px",
// // // // // // //     fontWeight: 500,
// // // // // // //     color: "#e5e7eb",
// // // // // // //     textAlign: "center" as const,
// // // // // // //     letterSpacing: "0.3px",
// // // // // // //     cursor: "default",
// // // // // // //     backdropFilter: "blur(12px)"
// // // // // // //   }
// // // // // // // };
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import Reveal from "./Reveal";
// // // // // // // import {
// // // // // // //   SiJava,
// // // // // // //   SiJavascript,
// // // // // // //   SiReact,
// // // // // // //   SiNodedotjs,
// // // // // // //   SiExpress,
// // // // // // //   SiMongodb,
// // // // // // //   SiMysql,
// // // // // // //   SiGit,
// // // // // // //   SiGithub,
// // // // // // //   SiHtml5,
// // // // // // //   SiCss3
// // // // // // // } from "react-icons/si";
// // // // // // import { FaJava } from "react-icons/fa";
// // // // // // import {
// // // // // //   SiJavascript,
// // // // // //   SiReact,
// // // // // //   SiNodedotjs,
// // // // // //   SiExpress,
// // // // // //   SiMongodb,
// // // // // //   SiMysql,
// // // // // //   SiGit,
// // // // // //   SiGithub,
// // // // // //   SiHtml5,
// // // // // //   SiCss3
// // // // // // } from "react-icons/si";

// // // // // // const skillGroups = [
// // // // // //   {
// // // // // //     title: "Programming Languages",
// // // // // //     skills: [
// // // // // //       { name: "Java", level: "Advanced", icon: <FaJava /> },
// // // // // //       { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> }
// // // // // //     ]
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Frontend Development",
// // // // // //     skills: [
// // // // // //       { name: "React", level: "Intermediate", icon: <SiReact /> },
// // // // // //       { name: "HTML", level: "Advanced", icon: <SiHtml5 /> },
// // // // // //       { name: "CSS", level: "Intermediate", icon: <SiCss3 /> }
// // // // // //     ]
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Backend Development",
// // // // // //     skills: [
// // // // // //       { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
// // // // // //       { name: "Express", level: "Intermediate", icon: <SiExpress /> }
// // // // // //     ]
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Databases",
// // // // // //     skills: [
// // // // // //       { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
// // // // // //       { name: "MongoDB", level: "Beginner", icon: <SiMongodb /> }
// // // // // //     ]
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Tools & Version Control",
// // // // // //     skills: [
// // // // // //       { name: "Git", level: "Intermediate", icon: <SiGit /> },
// // // // // //       { name: "GitHub", level: "Intermediate", icon: <SiGithub /> }
// // // // // //     ]
// // // // // //   }
// // // // // // ];

// // // // // // export default function Skills() {
// // // // // //   return (
// // // // // //     <section id="skills" style={styles.section}>
// // // // // //       <Reveal>
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 40 }}
// // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.6 }}
// // // // // //           viewport={{ once: true }}
// // // // // //           style={styles.container}
// // // // // //         >
// // // // // //           <h2 style={styles.heading}>Skills & Technologies</h2>
// // // // // //           <p style={styles.subtitle}>
// // // // // //             A structured overview of my technical skill set, tools, and current
// // // // // //             proficiency levels.
// // // // // //           </p>

// // // // // //           <div style={styles.grid}>
// // // // // //             {skillGroups.map((group, index) => (
// // // // // //               <motion.div
// // // // // //                 key={index}
// // // // // //                 style={styles.groupCard}
// // // // // //                 whileHover={{ y: -6 }}
// // // // // //                 transition={{ type: "spring", stiffness: 180 }}
// // // // // //               >
// // // // // //                 <h3 style={styles.groupTitle}>{group.title}</h3>

// // // // // //                 <div style={styles.skillList}>
// // // // // //                   {group.skills.map((skill, i) => (
// // // // // //                     <div key={i} style={styles.skillItem}>
// // // // // //                       <div style={styles.skillLeft}>
// // // // // //                         <span style={styles.icon}>{skill.icon}</span>
// // // // // //                         <span>{skill.name}</span>
// // // // // //                       </div>

// // // // // //                       <span
// // // // // //                         style={{
// // // // // //                           ...styles.level,
// // // // // //                           ...levelStyles[skill.level]
// // // // // //                         }}
// // // // // //                       >
// // // // // //                         {skill.level}
// // // // // //                       </span>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </motion.div>
// // // // // //       </Reveal>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // /* ==================== STYLES ==================== */

// // // // // // const styles = {
// // // // // //   section: {
// // // // // //     padding: "100px 10%",
// // // // // //     background: "#020617",
// // // // // //     display: "flex",
// // // // // //     justifyContent: "center"
// // // // // //   },

// // // // // //   container: {
// // // // // //     maxWidth: "1100px",
// // // // // //     width: "100%"
// // // // // //   },

// // // // // //   heading: {
// // // // // //     fontSize: "28px",
// // // // // //     fontWeight: 600,
// // // // // //     color: "#38bdf8",
// // // // // //     marginBottom: "14px"
// // // // // //   },

// // // // // //   subtitle: {
// // // // // //     fontSize: "15px",
// // // // // //     color: "#94a3b8",
// // // // // //     marginBottom: "44px",
// // // // // //     maxWidth: "720px"
// // // // // //   },

// // // // // //   grid: {
// // // // // //     display: "grid",
// // // // // //     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
// // // // // //     gap: "28px"
// // // // // //   },

// // // // // //   groupCard: {
// // // // // //     background: "rgba(15, 23, 42, 0.65)",
// // // // // //     border: "1px solid #1e293b",
// // // // // //     borderRadius: "18px",
// // // // // //     padding: "26px",
// // // // // //     backdropFilter: "blur(14px)"
// // // // // //   },

// // // // // //   groupTitle: {
// // // // // //     fontSize: "16px",
// // // // // //     fontWeight: 600,
// // // // // //     color: "#e5e7eb",
// // // // // //     marginBottom: "18px"
// // // // // //   },

// // // // // //   skillList: {
// // // // // //     display: "flex",
// // // // // //     flexDirection: "column" as const,
// // // // // //     gap: "12px"
// // // // // //   },

// // // // // //   skillItem: {
// // // // // //     display: "flex",
// // // // // //     justifyContent: "space-between",
// // // // // //     alignItems: "center",
// // // // // //     background: "rgba(2, 6, 23, 0.6)",
// // // // // //     border: "1px solid #1e293b",
// // // // // //     borderRadius: "12px",
// // // // // //     padding: "10px 14px",
// // // // // //     fontSize: "14px",
// // // // // //     color: "#e5e7eb"
// // // // // //   },

// // // // // //   skillLeft: {
// // // // // //     display: "flex",
// // // // // //     alignItems: "center",
// // // // // //     gap: "10px"
// // // // // //   },

// // // // // //   icon: {
// // // // // //     fontSize: "18px",
// // // // // //     color: "#38bdf8"
// // // // // //   },

// // // // // //   level: {
// // // // // //     fontSize: "12px",
// // // // // //     fontWeight: 500,
// // // // // //     padding: "4px 10px",
// // // // // //     borderRadius: "999px"
// // // // // //   }
// // // // // // };

// // // // // // const levelStyles: Record<string, any> = {
// // // // // //   Beginner: {
// // // // // //     background: "rgba(148,163,184,0.15)",
// // // // // //     color: "#94a3b8"
// // // // // //   },
// // // // // //   Intermediate: {
// // // // // //     background: "rgba(56,189,248,0.15)",
// // // // // //     color: "#38bdf8"
// // // // // //   },
// // // // // //   Advanced: {
// // // // // //     background: "rgba(34,197,94,0.15)",
// // // // // //     color: "#22c55e"
// // // // // //   }
// // // // // // }import { motion } from "framer-motion";
// // // // // import Reveal from "./Reveal";
// // // // // import { FaJava } from "react-icons/fa";
// // // // // import {
// // // // //   SiJavascript,
// // // // //   SiReact,
// // // // //   SiNodedotjs,
// // // // //   SiExpress,
// // // // //   SiMongodb,
// // // // //   SiMysql,
// // // // //   SiGit,
// // // // //   SiGithub,
// // // // //   SiHtml5,
// // // // //   SiCss3
// // // // // } from "react-icons/si";

// // // // // const skillGroups = [
// // // // //   {
// // // // //     title: "Programming Languages",
// // // // //     skills: [
// // // // //       { name: "Java", level: "Advanced", icon: <FaJava /> },
// // // // //       { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> }
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     title: "Frontend Development",
// // // // //     skills: [
// // // // //       { name: "React", level: "Intermediate", icon: <SiReact /> },
// // // // //       { name: "HTML", level: "Advanced", icon: <SiHtml5 /> },
// // // // //       { name: "CSS", level: "Intermediate", icon: <SiCss3 /> }
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     title: "Backend Development",
// // // // //     skills: [
// // // // //       { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
// // // // //       { name: "Express", level: "Intermediate", icon: <SiExpress /> }
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     title: "Databases",
// // // // //     skills: [
// // // // //       { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
// // // // //       { name: "MongoDB", level: "Beginner", icon: <SiMongodb /> }
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     title: "Tools & Version Control",
// // // // //     skills: [
// // // // //       { name: "Git", level: "Intermediate", icon: <SiGit /> },
// // // // //       { name: "GitHub", level: "Intermediate", icon: <SiGithub /> }
// // // // //     ]
// // // // //   }
// // // // // ];

// // // // // export default function Skills() {
// // // // //   return (
// // // // //     <section id="skills" style={styles.section}>
// // // // //       <Reveal>
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 40 }}
// // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.6 }}
// // // // //           viewport={{ once: true }}
// // // // //           style={styles.container}
// // // // //         >
// // // // //           <h2 style={styles.heading}>Skills & Technologies</h2>
// // // // //           <p style={styles.subtitle}>
// // // // //             A structured overview of my technical skills and current proficiency
// // // // //             levels.
// // // // //           </p>

// // // // //           <div style={styles.grid}>
// // // // //             {skillGroups.map((group, index) => (
// // // // //               <motion.div
// // // // //                 key={index}
// // // // //                 style={styles.groupCard}
// // // // //                 whileHover={{ y: -6 }}
// // // // //                 transition={{ type: "spring", stiffness: 180 }}
// // // // //               >
// // // // //                 <h3 style={styles.groupTitle}>{group.title}</h3>

// // // // //                 <div style={styles.skillList}>
// // // // //                   {group.skills.map((skill, i) => (
// // // // //                     <div key={i} style={styles.skillItem}>
// // // // //                       <div style={styles.skillLeft}>
// // // // //                         <span style={styles.icon}>{skill.icon}</span>
// // // // //                         <span>{skill.name}</span>
// // // // //                       </div>

// // // // //                       <span
// // // // //                         style={{
// // // // //                           ...styles.level,
// // // // //                           ...levelStyles[skill.level]
// // // // //                         }}
// // // // //                       >
// // // // //                         {skill.level}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       </Reveal>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // /* ==================== STYLES ==================== */

// // // // // const styles = {
// // // // //   section: {
// // // // //     padding: "100px 10%",
// // // // //     background: "#020617",
// // // // //     display: "flex",
// // // // //     justifyContent: "center"
// // // // //   },

// // // // //   container: {
// // // // //     maxWidth: "1100px",
// // // // //     width: "100%"
// // // // //   },

// // // // //   heading: {
// // // // //     fontSize: "28px",
// // // // //     fontWeight: 600,
// // // // //     color: "#38bdf8",
// // // // //     marginBottom: "14px"
// // // // //   },

// // // // //   subtitle: {
// // // // //     fontSize: "15px",
// // // // //     color: "#94a3b8",
// // // // //     marginBottom: "44px",
// // // // //     maxWidth: "720px"
// // // // //   },

// // // // //   grid: {
// // // // //     display: "grid",
// // // // //     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
// // // // //     gap: "28px"
// // // // //   },

// // // // //   groupCard: {
// // // // //     background: "rgba(15, 23, 42, 0.65)",
// // // // //     border: "1px solid #1e293b",
// // // // //     borderRadius: "18px",
// // // // //     padding: "26px",
// // // // //     backdropFilter: "blur(14px)"
// // // // //   },

// // // // //   groupTitle: {
// // // // //     fontSize: "16px",
// // // // //     fontWeight: 600,
// // // // //     color: "#e5e7eb",
// // // // //     marginBottom: "18px"
// // // // //   },

// // // // //   skillList: {
// // // // //     display: "flex",
// // // // //     flexDirection: "column" as const,
// // // // //     gap: "12px"
// // // // //   },

// // // // //   skillItem: {
// // // // //     display: "flex",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //     background: "rgba(2, 6, 23, 0.6)",
// // // // //     border: "1px solid #1e293b",
// // // // //     borderRadius: "12px",
// // // // //     padding: "10px 14px",
// // // // //     fontSize: "14px",
// // // // //     color: "#e5e7eb"
// // // // //   },

// // // // //   skillLeft: {
// // // // //     display: "flex",
// // // // //     alignItems: "center",
// // // // //     gap: "10px"
// // // // //   },

// // // // //   icon: {
// // // // //     fontSize: "18px",
// // // // //     color: "#38bdf8"
// // // // //   },

// // // // //   level: {
// // // // //     fontSize: "12px",
// // // // //     fontWeight: 500,
// // // // //     padding: "4px 10px",
// // // // //     borderRadius: "999px"
// // // // //   }
// // // // // };

// // // // // const levelStyles: Record<string, any> = {
// // // // //   Beginner: {
// // // // //     background: "rgba(148,163,184,0.15)",
// // // // //     color: "#94a3b8"
// // // // //   },
// // // // //   Intermediate: {
// // // // //     background: "rgba(56,189,248,0.15)",
// // // // //     color: "#38bdf8"
// // // // //   },
// // // // //   Advanced: {
// // // // //     background: "rgba(34,197,94,0.15)",
// // // // //     color: "#22c55e"
// // // // //   }
// // // // // };
// // // // // ;
// // // // import { motion } from "framer-motion";
// // // // import Reveal from "./Reveal";
// // // // import { FaJava } from "react-icons/fa";
// // // // import {
// // // //   SiJavascript,
// // // //   SiReact,
// // // //   SiNodedotjs,
// // // //   SiExpress,
// // // //   SiMongodb,
// // // //   SiMysql,
// // // //   SiGit,
// // // //   SiGithub,
// // // //   SiHtml5,
// // // //   SiCss3
// // // // } from "react-icons/si";
// // // // import { JSX } from "react";

// // // // type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

// // // // interface Skill {
// // // //   name: string;
// // // //   level: SkillLevel;
// // // //   icon: JSX.Element;
// // // // }

// // // // interface SkillGroup {
// // // //   title: string;
// // // //   skills: Skill[];
// // // // }

// // // // const skillGroups: SkillGroup[] = [
// // // //   {
// // // //     title: "Programming Languages",
// // // //     skills: [
// // // //       { name: "Java", level: "Advanced", icon: <FaJava /> },
// // // //       { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> }
// // // //     ]
// // // //   },
// // // //   {
// // // //     title: "Frontend Development",
// // // //     skills: [
// // // //       { name: "React", level: "Intermediate", icon: <SiReact /> },
// // // //       { name: "HTML", level: "Advanced", icon: <SiHtml5 /> },
// // // //       { name: "CSS", level: "Intermediate", icon: <SiCss3 /> }
// // // //     ]
// // // //   },
// // // //   {
// // // //     title: "Backend Development",
// // // //     skills: [
// // // //       { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
// // // //       { name: "Express", level: "Intermediate", icon: <SiExpress /> }
// // // //     ]
// // // //   },
// // // //   {
// // // //     title: "Databases",
// // // //     skills: [
// // // //       { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
// // // //       { name: "MongoDB", level: "Beginner", icon: <SiMongodb /> }
// // // //     ]
// // // //   },
// // // //   {
// // // //     title: "Tools & Version Control",
// // // //     skills: [
// // // //       { name: "Git", level: "Intermediate", icon: <SiGit /> },
// // // //       { name: "GitHub", level: "Intermediate", icon: <SiGithub /> }
// // // //     ]
// // // //   }
// // // // ];

// // // // export default function Skills() {
// // // //   return (
// // // //     <section id="skills" style={styles.section}>
// // // //       <Reveal>
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 40 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.6 }}
// // // //           viewport={{ once: true }}
// // // //           style={styles.container}
// // // //         >
// // // //           <h2 style={styles.heading}>Skills & Technologies</h2>
// // // //           <p style={styles.subtitle}>
// // // //             A structured overview of my technical skills, tools, and current
// // // //             proficiency levels.
// // // //           </p>

// // // //           <div style={styles.grid}>
// // // //             {skillGroups.map((group, index) => (
// // // //               <motion.div
// // // //                 key={index}
// // // //                 style={styles.groupCard}
// // // //                 whileHover={{ y: -6 }}
// // // //                 transition={{ type: "spring", stiffness: 180 }}
// // // //               >
// // // //                 <h3 style={styles.groupTitle}>{group.title}</h3>

// // // //                 <div style={styles.skillList}>
// // // //                   {group.skills.map((skill, i) => (
// // // //                     <div key={i} style={styles.skillItem}>
// // // //                       <div style={styles.skillLeft}>
// // // //                         <span style={styles.icon}>{skill.icon}</span>
// // // //                         <span>{skill.name}</span>
// // // //                       </div>

// // // //                       <span
// // // //                         style={{
// // // //                           ...styles.level,
// // // //                           ...levelStyles[skill.level]
// // // //                         }}
// // // //                       >
// // // //                         {skill.level}
// // // //                       </span>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>
// // // //       </Reveal>
// // // //     </section>
// // // //   );
// // // // }

// // // // /* ==================== STYLES ==================== */

// // // // const styles = {
// // // //   section: {
// // // //     padding: "100px 10%",
// // // //     background: "#020617",
// // // //     display: "flex",
// // // //     justifyContent: "center"
// // // //   },

// // // //   container: {
// // // //     maxWidth: "1100px",
// // // //     width: "100%"
// // // //   },

// // // //   heading: {
// // // //     fontSize: "28px",
// // // //     fontWeight: 600,
// // // //     color: "#38bdf8",
// // // //     marginBottom: "14px"
// // // //   },

// // // //   subtitle: {
// // // //     fontSize: "15px",
// // // //     color: "#94a3b8",
// // // //     marginBottom: "44px",
// // // //     maxWidth: "720px"
// // // //   },

// // // //   grid: {
// // // //     display: "grid",
// // // //     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
// // // //     gap: "28px"
// // // //   },

// // // //   groupCard: {
// // // //     background: "rgba(15, 23, 42, 0.65)",
// // // //     border: "1px solid #1e293b",
// // // //     borderRadius: "18px",
// // // //     padding: "26px",
// // // //     backdropFilter: "blur(14px)"
// // // //   },

// // // //   groupTitle: {
// // // //     fontSize: "16px",
// // // //     fontWeight: 600,
// // // //     color: "#e5e7eb",
// // // //     marginBottom: "18px"
// // // //   },

// // // //   skillList: {
// // // //     display: "flex",
// // // //     flexDirection: "column" as const,
// // // //     gap: "12px"
// // // //   },

// // // //   skillItem: {
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     background: "rgba(2, 6, 23, 0.6)",
// // // //     border: "1px solid #1e293b",
// // // //     borderRadius: "12px",
// // // //     padding: "10px 14px",
// // // //     fontSize: "14px",
// // // //     color: "#e5e7eb"
// // // //   },

// // // //   skillLeft: {
// // // //     display: "flex",
// // // //     alignItems: "center",
// // // //     gap: "10px"
// // // //   },

// // // //   icon: {
// // // //     fontSize: "18px",
// // // //     color: "#38bdf8"
// // // //   },

// // // //   level: {
// // // //     fontSize: "12px",
// // // //     fontWeight: 500,
// // // //     padding: "4px 10px",
// // // //     borderRadius: "999px"
// // // //   }
// // // // };

// // // // const levelStyles: Record<SkillLevel, any> = {
// // // //   Beginner: {
// // // //     background: "rgba(148,163,184,0.15)",
// // // //     color: "#94a3b8"
// // // //   },
// // // //   Intermediate: {
// // // //     background: "rgba(56,189,248,0.15)",
// // // //     color: "#38bdf8"
// // // //   },
// // // //   Advanced: {
// // // //     background: "rgba(34,197,94,0.15)",
// // // //     color: "#22c55e"
// // // //   }
// // // // };
// // // import { motion } from "framer-motion";
// // // import Reveal from "./Reveal";
// // // import { FaJava, FaPython } from "react-icons/fa";
// // // import { SiC, SiCplusplus } from "react-icons/si";
// // // import {
// // //   SiJavascript,
// // //   SiReact,
// // //   SiNodedotjs,
// // //   SiExpress,
// // //   SiMongodb,
// // //   SiMysql,
// // //   SiGit,
// // //   SiGithub,
// // //   SiHtml5,
// // //   SiCss3
// // // } from "react-icons/si";
// // // import { JSX } from "react";

// // // /* ================= TYPES ================= */

// // // type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

// // // interface Skill {
// // //   name: string;
// // //   level: SkillLevel;
// // //   icon: JSX.Element;
// // // }

// // // interface SkillGroup {
// // //   title: string;
// // //   skills: Skill[];
// // // }

// // // /* ================= DATA ================= */

// // // const skillGroups: SkillGroup[] = [
// // //   {
// // //     title: "Programming Languages",
// // //     skills: [
// // //       { name: "C", level: "Intermediate", icon: <SiC /> },
// // //       { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
// // //       { name: "Java", level: "Advanced", icon: <FaJava /> },
// // //       { name: "Python", level: "Intermediate", icon: <FaPython /> },
// // //       { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> }
// // //     ]
// // //   },
// // //   {
// // //     title: "Frontend Development",
// // //     skills: [
// // //       { name: "React", level: "Intermediate", icon: <SiReact /> },
// // //       { name: "HTML", level: "Advanced", icon: <SiHtml5 /> },
// // //       { name: "CSS", level: "Intermediate", icon: <SiCss3 /> }
// // //     ]
// // //   },
// // //   {
// // //     title: "Backend Development",
// // //     skills: [
// // //       { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
// // //       { name: "Express", level: "Intermediate", icon: <SiExpress /> }
// // //     ]
// // //   },
// // //   {
// // //     title: "Databases",
// // //     skills: [
// // //       { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
// // //       { name: "MongoDB", level: "Beginner", icon: <SiMongodb /> }
// // //     ]
// // //   },
// // //   {
// // //     title: "Tools & Version Control",
// // //     skills: [
// // //       { name: "Git", level: "Intermediate", icon: <SiGit /> },
// // //       { name: "GitHub", level: "Intermediate", icon: <SiGithub /> }
// // //     ]
// // //   }
// // // ];

// // // /* ================= COMPONENT ================= */

// // // export default function Skills() {
// // //   return (
// // //     <section id="skills" style={styles.section}>
// // //       <Reveal>
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 40 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           viewport={{ once: true }}
// // //           style={styles.container}
// // //         >
// // //           <h2 style={styles.heading}>Skills & Technologies</h2>
// // //           <p style={styles.subtitle}>
// // //             A concise, recruiter-focused overview of my technical expertise,
// // //             tools, and proficiency levels.
// // //           </p>

// // //           <div style={styles.gridWrapper}>
// // //             <div style={styles.grid}>
// // //               {skillGroups.map((group, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   style={styles.groupCard}
// // //                   whileHover={{ y: -6 }}
// // //                   transition={{ type: "spring", stiffness: 180 }}
// // //                 >
// // //                   <h3 style={styles.groupTitle}>{group.title}</h3>

// // //                   <div style={styles.skillList}>
// // //                     {group.skills.map((skill, i) => (
// // //                       <div key={i} style={styles.skillItem}>
// // //                         <div style={styles.skillLeft}>
// // //                           <span style={styles.icon}>{skill.icon}</span>
// // //                           <span>{skill.name}</span>
// // //                         </div>

// // //                         <span
// // //                           style={{
// // //                             ...styles.level,
// // //                             ...levelStyles[skill.level]
// // //                           }}
// // //                         >
// // //                           {skill.level}
// // //                         </span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
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
// // //     background: "#020617",
// // //     display: "flex",
// // //     justifyContent: "center"
// // //   },

// // //   container: {
// // //     maxWidth: "1200px",
// // //     width: "100%"
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
// // //     maxWidth: "760px"
// // //   },

// // //   gridWrapper: {
// // //     display: "flex",
// // //     justifyContent: "center"
// // //   },

// // //   grid: {
// // //     display: "grid",
// // //     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
// // //     gap: "28px",
// // //     width: "100%",
// // //     maxWidth: "1000px"
// // //   },

// // //   groupCard: {
// // //     background: "rgba(15, 23, 42, 0.65)",
// // //     border: "1px solid #1e293b",
// // //     borderRadius: "18px",
// // //     padding: "26px",
// // //     backdropFilter: "blur(14px)"
// // //   },

// // //   groupTitle: {
// // //     fontSize: "16px",
// // //     fontWeight: 600,
// // //     color: "#e5e7eb",
// // //     marginBottom: "18px"
// // //   },

// // //   skillList: {
// // //     display: "flex",
// // //     flexDirection: "column" as const,
// // //     gap: "12px"
// // //   },

// // //   skillItem: {
// // //     display: "flex",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     background: "rgba(2, 6, 23, 0.6)",
// // //     border: "1px solid #1e293b",
// // //     borderRadius: "12px",
// // //     padding: "10px 14px",
// // //     fontSize: "14px",
// // //     color: "#e5e7eb"
// // //   },

// // //   skillLeft: {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "10px"
// // //   },

// // //   icon: {
// // //     fontSize: "18px",
// // //     color: "#38bdf8"
// // //   },

// // //   level: {
// // //     fontSize: "12px",
// // //     fontWeight: 500,
// // //     padding: "4px 10px",
// // //     borderRadius: "999px"
// // //   }
// // // };

// // // const levelStyles: Record<SkillLevel, any> = {
// // //   Beginner: {
// // //     background: "rgba(148,163,184,0.15)",
// // //     color: "#94a3b8"
// // //   },
// // //   Intermediate: {
// // //     background: "rgba(56,189,248,0.15)",
// // //     color: "#38bdf8"
// // //   },
// // //   Advanced: {
// // //     background: "rgba(34,197,94,0.15)",
// // //     color: "#22c55e"
// // //   }
// // // };
// // import { motion } from "framer-motion";
// // import Reveal from "./Reveal";
// // import { FaJava, FaPython } from "react-icons/fa";
// // import { SiC, SiCplusplus } from "react-icons/si";
// // import {
// //   SiJavascript,
// //   SiReact,
// //   SiNodedotjs,
// //   SiExpress,
// //   SiMongodb,
// //   SiMysql,
// //   SiGit,
// //   SiGithub,
// //   SiHtml5,
// //   SiCss3
// // } from "react-icons/si";
// // import { JSX } from "react";

// // /* ================= TYPES ================= */

// // type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

// // interface Skill {
// //   name: string;
// //   level: SkillLevel;
// //   icon: JSX.Element;
// // }

// // interface SkillGroup {
// //   title: string;
// //   skills: Skill[];
// // }

// // /* ================= DATA ================= */

// // const skillGroups: SkillGroup[] = [
// //   {
// //     title: "Programming Languages",
// //     skills: [
// //       { name: "C", level: "Intermediate", icon: <SiC /> },
// //       { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
// //       { name: "Java", level: "Advanced", icon: <FaJava /> },
// //       { name: "Python", level: "Intermediate", icon: <FaPython /> },
// //       { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> }
// //     ]
// //   },
// //   {
// //     title: "Frontend Development",
// //     skills: [
// //       { name: "React", level: "Intermediate", icon: <SiReact /> },
// //       { name: "HTML", level: "Advanced", icon: <SiHtml5 /> },
// //       { name: "CSS", level: "Intermediate", icon: <SiCss3 /> }
// //     ]
// //   },
// //   {
// //     title: "Backend Development",
// //     skills: [
// //       { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
// //       { name: "Express", level: "Intermediate", icon: <SiExpress /> }
// //     ]
// //   },
// //   {
// //     title: "Databases",
// //     skills: [
// //       { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
// //       { name: "MongoDB", level: "Beginner", icon: <SiMongodb /> }
// //     ]
// //   },
// //   {
// //     title: "Tools & Version Control",
// //     skills: [
// //       { name: "Git", level: "Intermediate", icon: <SiGit /> },
// //       { name: "GitHub", level: "Intermediate", icon: <SiGithub /> }
// //     ]
// //   }
// // ];

// // /* ================= COMPONENT ================= */

// // export default function Skills() {
// //   return (
// //     <section id="skills" style={styles.section}>
// //       <Reveal>
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           style={styles.container}
// //         >
// //           <h2 style={styles.heading}>Skills & Technologies</h2>
// //           <p style={styles.subtitle}>
// //             A structured overview of programming languages, frameworks, tools,
// //             and technologies I use to build reliable software systems.
// //           </p>

// //           <div style={styles.grid}>
// //             {skillGroups.map((group, index) => (
// //               <motion.div
// //                 key={index}
// //                 style={styles.groupCard}
// //                 whileHover={{ y: -4 }}
// //                 transition={{ type: "spring", stiffness: 160 }}
// //               >
// //                 <h3 style={styles.groupTitle}>{group.title}</h3>

// //                 <div style={styles.skillList}>
// //                   {group.skills.map((skill, i) => (
// //                     <div key={i} style={styles.skillItem}>
// //                       <div style={styles.skillLeft}>
// //                         <span style={styles.icon}>{skill.icon}</span>
// //                         <span>{skill.name}</span>
// //                       </div>

// //                       <span
// //                         style={{
// //                           ...styles.level,
// //                           ...levelStyles[skill.level]
// //                         }}
// //                       >
// //                         {skill.level}
// //                       </span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </Reveal>
// //     </section>
// //   );
// // }

// // /* ================= STYLES ================= */

// // const styles = {
// //   section: {
// //     padding: "100px 10%",
// //     background: "#020617",
// //     display: "flex",
// //     justifyContent: "center"
// //   },

// //   container: {
// //     maxWidth: "1200px",
// //     width: "100%"
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
// //     maxWidth: "760px"
// //   },

// //   grid: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
// //     gap: "28px",
// //     alignItems: "start"
// //   },

// //   groupCard: {
// //     background: "rgba(15, 23, 42, 0.65)",
// //     border: "1px solid #1e293b",
// //     borderRadius: "18px",
// //     padding: "26px",
// //     backdropFilter: "blur(14px)"
// //   },

// //   groupTitle: {
// //     fontSize: "16px",
// //     fontWeight: 600,
// //     color: "#e5e7eb",
// //     marginBottom: "18px"
// //   },

// //   skillList: {
// //     display: "flex",
// //     flexDirection: "column" as const,
// //     gap: "12px"
// //   },

// //   skillItem: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     background: "rgba(2, 6, 23, 0.6)",
// //     border: "1px solid #1e293b",
// //     borderRadius: "12px",
// //     padding: "10px 14px",
// //     fontSize: "14px",
// //     color: "#e5e7eb"
// //   },

// //   skillLeft: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "10px"
// //   },

// //   icon: {
// //     fontSize: "18px",
// //     color: "#38bdf8"
// //   },

// //   level: {
// //     fontSize: "12px",
// //     fontWeight: 500,
// //     padding: "4px 10px",
// //     borderRadius: "999px"
// //   }
// // };

// // const levelStyles: Record<SkillLevel, any> = {
// //   Beginner: {
// //     background: "rgba(148,163,184,0.15)",
// //     color: "#94a3b8"
// //   },
// //   Intermediate: {
// //     background: "rgba(56,189,248,0.15)",
// //     color: "#38bdf8"
// //   },
// //   Advanced: {
// //     background: "rgba(34,197,94,0.15)",
// //     color: "#22c55e"
// //   }
// // };
// import { motion } from "framer-motion";
// import Reveal from "./Reveal";
// import { FaJava, FaPython } from "react-icons/fa";
// import {
//   SiC,
//   SiCplusplus,
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiMysql,
//   SiGit,
//   SiGithub,
//   SiHtml5,
//   SiCss3
// } from "react-icons/si";
// import type { JSX } from "react";

// /* ================= TYPES ================= */

// type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

// interface Skill {
//   name: string;
//   level: SkillLevel;
//   icon: JSX.Element;
// }

// interface SkillGroup {
//   title: string;
//   skills: Skill[];
// }

// /* ================= DATA ================= */

// const skillGroups: SkillGroup[] = [
//   {
//     title: "Programming Languages",
//     skills: [
//       { name: "C", level: "Intermediate", icon: <SiC /> },
//       { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
//       { name: "Java", level: "Advanced", icon: <FaJava /> },
//       { name: "Python", level: "Intermediate", icon: <FaPython /> },
//       { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> }
//     ]
//   },
//   {
//     title: "Frontend Development",
//     skills: [
//       { name: "React", level: "Intermediate", icon: <SiReact /> },
//       { name: "HTML", level: "Advanced", icon: <SiHtml5 /> },
//       { name: "CSS", level: "Intermediate", icon: <SiCss3 /> }
//     ]
//   },
//   {
//     title: "Backend Development",
//     skills: [
//       { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
//       { name: "Express", level: "Intermediate", icon: <SiExpress /> }
//     ]
//   },
//   {
//     title: "Databases",
//     skills: [
//       { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
//       { name: "MongoDB", level: "Beginner", icon: <SiMongodb /> }
//     ]
//   },
//   {
//     title: "Tools & Version Control",
//     skills: [
//       { name: "Git", level: "Intermediate", icon: <SiGit /> },
//       { name: "GitHub", level: "Intermediate", icon: <SiGithub /> }
//     ]
//   }
// ];

// /* ================= COMPONENT ================= */

// export default function Skills() {
//   return (
//     <section id="skills" style={styles.section}>
//       <Reveal>
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           viewport={{ once: true }}
//           style={styles.container}
//         >
//           <h2 style={styles.heading}>Skills & Technologies</h2>
//           <p style={styles.subtitle}>
//             A concised overview of programming languages,
//             frameworks, tools, and technologies I use to build reliable software.
//           </p>

//           <div style={styles.grid}>
//             {skillGroups.map((group, index) => (
//               <motion.div
//                 key={index}
//                 style={styles.groupCard}
//                 whileHover={{ y: -4 }}
//                 transition={{ type: "spring", stiffness: 140 }}
//               >
//                 <h3 style={styles.groupTitle}>{group.title}</h3>

//                 <div style={styles.skillList}>
//                   {group.skills.map((skill, i) => (
//                     <div key={i} style={styles.skillItem}>
//                       <div style={styles.skillLeft}>
//                         <span style={styles.icon}>{skill.icon}</span>
//                         <span>{skill.name}</span>
//                       </div>

//                       <span
//                         style={{
//                           ...styles.level,
//                           ...levelStyles[skill.level]
//                         }}
//                       >
//                         {skill.level}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </Reveal>
//     </section>
//   );
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
//     marginBottom: "14px"
//   },

//   subtitle: {
//     fontSize: "15px",
//     color: "#94a3b8",
//     marginBottom: "48px",
//     maxWidth: "760px"
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//     gap: "28px",
//     alignItems: "start"
//   },

//   groupCard: {
//     background: "rgba(15, 23, 42, 0.65)",
//     border: "1px solid #1e293b",
//     borderRadius: "18px",
//     padding: "26px",
//     backdropFilter: "blur(14px)"
//   },

//   groupTitle: {
//     fontSize: "16px",
//     fontWeight: 600,
//     color: "#e5e7eb",
//     marginBottom: "18px"
//   },

//   skillList: {
//     display: "flex",
//     flexDirection: "column" as const,
//     gap: "12px"
//   },

//   skillItem: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     background: "rgba(2, 6, 23, 0.6)",
//     border: "1px solid #1e293b",
//     borderRadius: "12px",
//     padding: "10px 14px",
//     fontSize: "14px",
//     color: "#e5e7eb"
//   },

//   skillLeft: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px"
//   },

//   icon: {
//     fontSize: "18px",
//     color: "#38bdf8"
//   },

//   level: {
//     fontSize: "12px",
//     fontWeight: 500,
//     padding: "4px 10px",
//     borderRadius: "999px"
//   }
// };

// /* ================= LEVEL STYLES ================= */

// const levelStyles: Record<SkillLevel, { background: string; color: string }> = {
//   Beginner: {
//     background: "rgba(148,163,184,0.15)",
//     color: "#94a3b8"
//   },
//   Intermediate: {
//     background: "rgba(56,189,248,0.15)",
//     color: "#38bdf8"
//   },
//   Advanced: {
//     background: "rgba(34,197,94,0.15)",
//     color: "#22c55e"
//   }
// };
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaJava, FaPython } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import type { JSX, CSSProperties } from "react";

/* ================= TYPES ================= */

type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

interface Skill {
  name: string;
  level: SkillLevel;
  icon: JSX.Element;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

/* ================= DATA ================= */

const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: "Intermediate", icon: <SiC /> },
      { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
      { name: "Java", level: "Advanced", icon: <FaJava /> },
      { name: "Python", level: "Intermediate", icon: <FaPython /> },
      { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: "Intermediate", icon: <SiReact /> },
      { name: "HTML", level: "Advanced", icon: <SiHtml5 /> },
      { name: "CSS", level: "Intermediate", icon: <SiCss3 /> }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
      { name: "Express", level: "Intermediate", icon: <SiExpress /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
      { name: "MongoDB", level: "Beginner", icon: <SiMongodb /> }
    ]
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", level: "Intermediate", icon: <SiGit /> },
      { name: "GitHub", level: "Intermediate", icon: <SiGithub /> }
    ]
  }
];

/* ================= COMPONENT ================= */

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          style={styles.container}
        >
          <h2 style={styles.heading}>Skills & Technologies</h2>
          <p style={styles.subtitle}>
            A concise overview of programming languages, frameworks, tools, and
            technologies I use to build reliable software.
          </p>

          <div style={styles.grid}>
            {skillGroups.map((group, index) => (
              <motion.div
                key={index}
                style={styles.groupCard}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 140 }}
              >
                <h3 style={styles.groupTitle}>{group.title}</h3>

                <div style={styles.skillList}>
                  {group.skills.map((skill, i) => (
                    <div key={i} style={styles.skillItem}>
                      <div style={styles.skillLeft}>
                        <span style={styles.icon}>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>

                      <span
                        style={{
                          ...styles.level,
                          ...levelStyles[skill.level]
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}

/* ================= STYLES ================= */

const styles: Record<string, CSSProperties> = {
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
    marginBottom: "14px"
  },

  subtitle: {
    fontSize: "15px",
    color: "#94a3b8",
    marginBottom: "48px",
    maxWidth: "760px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "28px",
    alignItems: "start"
  },

  groupCard: {
    background: "rgba(15, 23, 42, 0.65)",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "26px",
    backdropFilter: "blur(14px)"
  },

  groupTitle: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#e5e7eb",
    marginBottom: "18px"
  },

  skillList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  skillItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(2, 6, 23, 0.6)",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "#e5e7eb"
  },

  skillLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  icon: {
    fontSize: "18px",
    color: "#38bdf8"
  },

  level: {
    fontSize: "12px",
    fontWeight: 500,
    padding: "4px 10px",
    borderRadius: "999px"
  }
};

/* ================= LEVEL STYLES ================= */

const levelStyles: Record<SkillLevel, { background: string; color: string }> = {
  Beginner: {
    background: "rgba(148,163,184,0.15)",
    color: "#94a3b8"
  },
  Intermediate: {
    background: "rgba(56,189,248,0.15)",
    color: "#38bdf8"
  },
  Advanced: {
    background: "rgba(34,197,94,0.15)",
    color: "#22c55e"
  }
};
