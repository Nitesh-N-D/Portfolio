import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { motion } from "framer-motion";
// import Reveal from "./Reveal";
// import { profile } from "../data/profile";
// export default function About() {
//   return (
//     <section id="about" style={styles.section}>
//       <Reveal>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45, ease: "easeOut" }}
//           viewport={{ once: true }}
//           style={styles.wrapper}
//         >
//           <h2 style={styles.heading}>About</h2>
//           <p style={styles.role}>{profile.title}</p>
//           <div style={styles.content}>
//             <p style={styles.text}>
//               I am a <strong>Computer Science Engineering student</strong> with a
//               strong interest in building{" "}
//               <strong>scalable, reliable, and maintainable software systems</strong>.
//               I enjoy working across the full stack — from crafting intuitive user
//               interfaces to developing backend services and data-driven applications.
//             </p>
//             <p style={styles.text}>
//               My development approach emphasizes{" "}
//               <strong>clean code</strong>,{" "}
//               <strong>system design fundamentals</strong>, and{" "}
//               <strong>real-world problem solving</strong>. Through academic projects,
//               internships, and self-driven learning, I have translated requirements
//               into production-ready solutions while continuously improving
//               performance, usability, and code quality.
//             </p>
//             <p style={styles.focus}>
//               <strong>Primary focus areas:</strong> Full Stack Development (React,
//               Node.js), Backend APIs & Databases, Data Structures & Algorithms,
//               Version Control, and Collaborative Development.
//             </p>
//             {/* PROFESSIONAL STATS */}
//             <div style={styles.statsRow}>
//               <div style={styles.stat}>
//                 <span style={styles.statValue}>10+</span>
//                 <span style={styles.statLabel}>Projects Built</span>
//               </div>
//               <div style={styles.stat}>
//                 <span style={styles.statValue}>2+</span>
//                 <span style={styles.statLabel}>Years of Hands-on Learning</span>
//               </div>
//               <div style={styles.stat}>
//                 <span style={styles.statValue}>5+</span>
//                 <span style={styles.statLabel}>Core Technologies</span>
//               </div>
//             </div>
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
//   wrapper: {
//     maxWidth: "920px"
//   },
//   heading: {
//     fontSize: "26px",
//     fontWeight: 600,
//     color: "#38bdf8",
//     marginBottom: "6px"
//   },
//   role: {
//     fontSize: "14px",
//     color: "#94a3b8",
//     marginBottom: "28px"
//   },
//   content: {
//     borderLeft: "3px solid #1e293b",
//     paddingLeft: "28px"
//   },
//   text: {
//     fontSize: "15px",
//     lineHeight: 1.75,
//     color: "#cbd5f5",
//     marginBottom: "18px"
//   },
//   focus: {
//     fontSize: "14px",
//     lineHeight: 1.7,
//     color: "#94a3b8",
//     marginTop: "6px",
//     marginBottom: "28px"
//   },
//   statsRow: {
//     display: "flex",
//     flexWrap: "wrap" as const,
//     gap: "32px",
//     marginTop: "10px"
//   },
//   stat: {
//     display: "flex",
//     flexDirection: "column" as const
//   },
//   statValue: {
//     fontSize: "20px",
//     fontWeight: 600,
//     color: "#38bdf8",
//     lineHeight: 1.2
//   },
//   statLabel: {
//     fontSize: "13px",
//     color: "#94a3b8",
//     marginTop: "4px"
//   }
// };
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { profile } from "../data/profile";
export default function About() {
    return (_jsx("section", { id: "about", style: styles.section, children: _jsx(Reveal, { children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.45, ease: "easeOut" }, viewport: { once: true }, style: styles.wrapper, children: [_jsx("h2", { style: styles.heading, children: "About" }), _jsx("p", { style: styles.role, children: profile.title }), _jsxs("div", { style: styles.content, children: [_jsxs("p", { style: styles.text, children: ["I am a ", _jsx("strong", { children: "Computer Science Engineering student" }), " with a strong interest in building", " ", _jsx("strong", { children: "scalable, reliable, and maintainable software systems" }), ". I enjoy working across the full stack \u2014 from crafting intuitive user interfaces to developing backend services and data-driven applications."] }), _jsxs("p", { style: styles.text, children: ["My development approach emphasizes", " ", _jsx("strong", { children: "clean code" }), ",", " ", _jsx("strong", { children: "system design fundamentals" }), ", and", " ", _jsx("strong", { children: "real-world problem solving" }), ". Through academic projects, internships, and self-driven learning, I have translated requirements into production-ready solutions while continuously improving performance, usability, and code quality."] }), _jsxs("p", { style: styles.focus, children: [_jsx("strong", { children: "Primary focus areas:" }), " Full Stack Development (React, Node.js), Backend APIs & Databases, Data Structures & Algorithms, Version Control, and Collaborative Development."] }), _jsxs("div", { style: styles.statsRow, children: [_jsxs("div", { style: styles.stat, children: [_jsx("span", { style: styles.statValue, children: "10+" }), _jsx("span", { style: styles.statLabel, children: "Projects Built" })] }), _jsxs("div", { style: styles.stat, children: [_jsx("span", { style: styles.statValue, children: "2+" }), _jsx("span", { style: styles.statLabel, children: "Years of Hands-on Learning" })] }), _jsxs("div", { style: styles.stat, children: [_jsx("span", { style: styles.statValue, children: "5+" }), _jsx("span", { style: styles.statLabel, children: "Core Technologies" })] })] })] })] }) }) }));
}
/* ===================== STYLES ===================== */
const styles = {
    section: {
        padding: "90px 10%",
        background: "#020617"
    },
    wrapper: {
        maxWidth: "920px"
    },
    heading: {
        fontSize: "26px",
        fontWeight: 600,
        color: "#38bdf8",
        marginBottom: "6px"
    },
    role: {
        fontSize: "14px",
        color: "#94a3b8",
        marginBottom: "28px"
    },
    content: {
        borderLeft: "3px solid #1e293b",
        paddingLeft: "28px"
    },
    text: {
        fontSize: "15px",
        lineHeight: 1.75,
        color: "#cbd5f5",
        marginBottom: "18px"
    },
    focus: {
        fontSize: "14px",
        lineHeight: 1.7,
        color: "#94a3b8",
        marginTop: "6px",
        marginBottom: "28px"
    },
    statsRow: {
        display: "flex",
        flexWrap: "wrap",
        gap: "32px",
        marginTop: "10px"
    },
    stat: {
        display: "flex",
        flexDirection: "column"
    },
    statValue: {
        fontSize: "20px",
        fontWeight: 600,
        color: "#38bdf8",
        lineHeight: 1.2
    },
    statLabel: {
        fontSize: "13px",
        color: "#94a3b8",
        marginTop: "4px"
    }
};
