// // import { motion } from "framer-motion";
// // import Reveal from "./Reveal";
// // import { profile } from "../data/profile";

// // export default function About() {
// //   return (
// //     <section id="about" style={styles.section}>
// //       <Reveal>
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.45, ease: "easeOut" }}
// //           viewport={{ once: true }}
// //           style={styles.wrapper}
// //         >
// //           <h2 style={styles.heading}>About</h2>
// //           <p style={styles.role}>{profile.title}</p>

// //           <div style={styles.content}>
// //             <p style={styles.text}>
// //               I am a <strong>Computer Science Engineering student</strong> with a
// //               strong interest in building{" "}
// //               <strong>scalable, reliable, and maintainable software systems</strong>.
// //               I enjoy working across the full stack — from crafting intuitive user
// //               interfaces to developing backend services and data-driven applications.
// //             </p>

// //             <p style={styles.text}>
// //               My development approach emphasizes{" "}
// //               <strong>clean code</strong>,{" "}
// //               <strong>system design fundamentals</strong>, and{" "}
// //               <strong>real-world problem solving</strong>. Through academic projects,
// //               internships, and self-driven learning, I have translated requirements
// //               into production-ready solutions while continuously improving
// //               performance, usability, and code quality.
// //             </p>

// //             <p style={styles.focus}>
// //               <strong>Primary focus areas:</strong> Full Stack Development (React,
// //               Node.js), Backend APIs & Databases, Data Structures & Algorithms,
// //               Version Control, and Collaborative Development.
// //             </p>

// //             {/* PROFESSIONAL STATS */}
// //             <div style={styles.statsRow}>
// //               <div style={styles.stat}>
// //                 <span style={styles.statValue}>10+</span>
// //                 <span style={styles.statLabel}>Projects Built</span>
// //               </div>

// //               <div style={styles.stat}>
// //                 <span style={styles.statValue}>2+</span>
// //                 <span style={styles.statLabel}>Years of Hands-on Learning</span>
// //               </div>

// //               <div style={styles.stat}>
// //                 <span style={styles.statValue}>5+</span>
// //                 <span style={styles.statLabel}>Core Technologies</span>
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </Reveal>
// //     </section>
// //   );
// // }

// // /* ===================== STYLES ===================== */

// // const styles = {
// //   section: {
// //     padding: "90px 10%",
// //     background: "#020617"
// //   },

// //   wrapper: {
// //     maxWidth: "920px"
// //   },

// //   heading: {
// //     fontSize: "26px",
// //     fontWeight: 600,
// //     color: "#38bdf8",
// //     marginBottom: "6px"
// //   },

// //   role: {
// //     fontSize: "14px",
// //     color: "#94a3b8",
// //     marginBottom: "28px"
// //   },

// //   content: {
// //     borderLeft: "3px solid #1e293b",
// //     paddingLeft: "28px"
// //   },

// //   text: {
// //     fontSize: "15px",
// //     lineHeight: 1.75,
// //     color: "#cbd5f5",
// //     marginBottom: "18px"
// //   },

// //   focus: {
// //     fontSize: "14px",
// //     lineHeight: 1.7,
// //     color: "#94a3b8",
// //     marginTop: "6px",
// //     marginBottom: "28px"
// //   },

// //   statsRow: {
// //     display: "flex",
// //     flexWrap: "wrap" as const,
// //     gap: "32px",
// //     marginTop: "10px"
// //   },

// //   stat: {
// //     display: "flex",
// //     flexDirection: "column" as const
// //   },

// //   statValue: {
// //     fontSize: "20px",
// //     fontWeight: 600,
// //     color: "#38bdf8",
// //     lineHeight: 1.2
// //   },

// //   statLabel: {
// //     fontSize: "13px",
// //     color: "#94a3b8",
// //     marginTop: "4px"
// //   }
// // };
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
  return (
   <section
  id="about"
  style={{
    width: "100%",
    background: "#020617",
    padding: "100px 6%",
    display: "flex",
    justifyContent: "center"
  }}
>
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
         style={{
  maxWidth: "920px",
  margin: "0 auto"
}}
        >
          {/* HEADING */}
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 26px)",
              fontWeight: 600,
              color: "var(--primary)",
              marginBottom: "6px",
            }}
          >
            About
          </h2>

          <p
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              marginBottom: "28px",
            }}
          >
            {profile.title}
          </p>

          {/* CONTENT */}
          <div
            style={{
              borderLeft: "3px solid var(--border)",
              paddingLeft: "28px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#cbd5f5",
                marginBottom: "18px",
              }}
            >
              I am a <strong>Computer Science Engineering student</strong> with a
              strong interest in building{" "}
              <strong>scalable, reliable, and maintainable software systems</strong>.
              I enjoy working across the full stack — from crafting intuitive user
              interfaces to developing backend services and data-driven applications.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#cbd5f5",
                marginBottom: "18px",
              }}
            >
              My development approach emphasizes{" "}
              <strong>clean code</strong>,{" "}
              <strong>system design fundamentals</strong>, and{" "}
              <strong>real-world problem solving</strong>. Through academic projects,
              internships, and self-driven learning, I have translated requirements
              into production-ready solutions while continuously improving
              performance, usability, and code quality.
            </p>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "var(--muted)",
                marginBottom: "28px",
              }}
            >
              <strong>Primary focus areas:</strong> Full Stack Development (React,
              Node.js), Backend APIs & Databases, Data Structures & Algorithms,
              Version Control, and Collaborative Development.
            </p>

            {/* STATS */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "32px",
              }}
            >
              <Stat value="10+" label="Projects Built" />
              <Stat value="2+" label="Years of Hands-on Learning" />
              <Stat value="5+" label="Core Technologies" />
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}

/* ---------- SMALL COMPONENT ---------- */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontSize: "20px",
          fontWeight: 600,
          color: "var(--primary)",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: "13px",
          color: "var(--muted)",
          marginTop: "4px",
        }}
      >
        {label}
      </span>
    </div>
  );
}
