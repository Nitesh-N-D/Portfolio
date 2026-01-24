// // import { motion } from "framer-motion";

// // export default function Hero() {
// //   return (
// //     <section style={styles.section} id="home">
// //       {/* Background Glow */}
// //       <div style={styles.glow}></div>

// //       <motion.div
// //         initial={{ opacity: 0, y: 60 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1, ease: "easeOut" }}
// //         style={styles.container}
// //       >
// //         <h1 style={styles.title}>
// //           Hi, I'm <span style={styles.highlight}>N.D. Nitesh</span>
// //         </h1>

// //         <h2 style={styles.subtitle}>
// //           Computer Science Engineering Student
// //         </h2>

// //         <p style={styles.description}>
// //           Aspiring Software Developer passionate about AI, Cloud, and Web Development.
// //           Focused on building scalable full-stack applications and modern backend platforms.
// //         </p>

// //         <div style={styles.actions}>
// //           <a href="#contact" className="btn">Get In Touch</a>
// //           <a href="/Nitesh_Resume.pdf" className="btn-outline" download>
// //             Download Resume
// //           </a>
// //         </div>

// //         {/* Social Icons */}
// //         <div style={styles.socials}>
// //           <a href="https://github.com/Nitesh-N-D" target="_blank">GitHub</a>
// //           <a href="https://linkedin.com/in/nitesh-n-d-249ab6325" target="_blank">LinkedIn</a>
// //           <a href="mailto:niteshdwaraka@gmail.com">Email</a>
// //         </div>

// //         {/* Scroll Indicator */}
// //         <motion.div
// //           animate={{ y: [0, 10, 0] }}
// //           transition={{ repeat: Infinity, duration: 1.6 }}
// //           style={styles.scroll}
// //         >
// //           ⌄
// //         </motion.div>
// //       </motion.div>
// //     </section>
// //   );
// // }

// // const styles = {
// //   section: {
// //     minHeight: "100vh",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     position: "relative" as const,
// //     overflow: "hidden",
// //     padding: "0 10%",
// //   },

// //   glow: {
// //     position: "absolute" as const,
// //     width: "600px",
// //     height: "600px",
// //     background: "radial-gradient(circle, rgba(56,189,248,0.15), transparent 60%)",
// //     top: "-100px",
// //     left: "-100px",
// //     zIndex: 0,
// //   },

// //   container: {
// //     maxWidth: "780px",
// //     zIndex: 2,
// //   },

// //   title: {
// //     fontSize: "46px",
// //     fontWeight: 700,
// //     marginBottom: "12px",
// //     color: "#e5e7eb",
// //     letterSpacing: "0.5px",
// //   },

// //   highlight: {
// //     color: "#60a5fa",
// //   },

// //   subtitle: {
// //     fontSize: "22px",
// //     fontWeight: 500,
// //     marginBottom: "16px",
// //     color: "#cbd5f5",
// //   },

// //   description: {
// //     fontSize: "16px",
// //     lineHeight: 1.7,
// //     color: "#94a3b8",
// //     maxWidth: "640px",
// //   },

// //   actions: {
// //     marginTop: "28px",
// //     display: "flex",
// //     gap: "18px",
// //     flexWrap: "wrap" as const,
// //   },

// //   socials: {
// //     marginTop: "26px",
// //     display: "flex",
// //     gap: "22px",
// //     fontSize: "14px",
// //     color: "#94a3b8",
// //   },

// //   scroll: {
// //     marginTop: "60px",
// //     fontSize: "24px",
// //     color: "#60a5fa",
// //     opacity: 0.8,
// //   }
// // };
// import { motion } from "framer-motion";
// import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// export default function Hero() {
//   return (
//     <section id="home" style={styles.section}>
//       {/* Background glow */}
//       <div style={styles.glow} />

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         style={styles.container}
//       >
//         <h1 style={styles.title}>
//           N.D. <span style={styles.highlight}>Nitesh</span>
//         </h1>

//         <h2 style={styles.subtitle}>
//           Full Stack Developer · Computer Science Engineer
//         </h2>

//         <p style={styles.description}>
//           I build scalable, user-focused web applications using modern
//           technologies like React, Node.js, and cloud platforms. Actively
//           seeking internship and entry-level opportunities.
//         </p>

//         {/* CTA BUTTONS */}
//         <div style={styles.actions}>
//           <a href="#projects" className="btn">
//             View Projects
//           </a>
//           <a href="/resume.pdf" className="btn-outline" download>
//             Download Resume
//           </a>
//         </div>

//         {/* SOCIAL ICONS */}
//         <div style={styles.socials}>
//           <a
//             href="https://github.com/Nitesh-N-D"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub"
//             style={styles.socialIcon}
//           >
//             <FiGithub size={20} />
//           </a>

//           <a
//             href="https://linkedin.com/in/nitesh-n-d-249ab6325"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//             style={styles.socialIcon}
//           >
//             <FiLinkedin size={20} />
//           </a>

//           <a
//             href="mailto:niteshdwaraka@gmail.com"
//             aria-label="Email"
//             style={styles.socialIcon}
//           >
//             <FiMail size={20} />
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* ==================== STYLES ==================== */

// const styles = {
//   section: {
//     minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//     position: "relative" as const,
//     padding: "0 10%",
//     overflow: "hidden"
//   },

//   glow: {
//     position: "absolute" as const,
//     width: "520px",
//     height: "520px",
//     background:
//       "radial-gradient(circle, rgba(56,189,248,0.18), transparent 60%)",
//     top: "-120px",
//     left: "-120px",
//     zIndex: 0
//   },

//   container: {
//     maxWidth: "820px",
//     zIndex: 1
//   },

//   title: {
//     fontSize: "52px",
//     fontWeight: 700,
//     color: "#e5e7eb",
//     marginBottom: "12px",
//     letterSpacing: "0.5px"
//   },

//   highlight: {
//     color: "#38bdf8"
//   },

//   subtitle: {
//     fontSize: "20px",
//     fontWeight: 500,
//     color: "#cbd5f5",
//     marginBottom: "18px"
//   },

//   description: {
//     fontSize: "16px",
//     lineHeight: 1.7,
//     color: "#94a3b8",
//     maxWidth: "680px"
//   },

//   actions: {
//     marginTop: "28px",
//     display: "flex",
//     gap: "16px",
//     flexWrap: "wrap" as const
//   },

//   socials: {
//     marginTop: "32px",
//     display: "flex",
//     gap: "18px"
//   },

//   socialIcon: {
//     width: "42px",
//     height: "42px",
//     borderRadius: "50%",
//     border: "1px solid #1e293b",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#94a3b8",
//     transition: "0.25s",
//     textDecoration: "none"
//   }
// };
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={styles.container}
      >
        {/* NAME */}
        <h1 style={styles.title}>
          N.D. <span style={styles.highlight}>Nitesh</span>
        </h1>

        {/* ROLE */}
        <h2 style={styles.subtitle}>
          Full Stack Developer · Computer Science Engineer
        </h2>

        {/* VALUE PROPOSITION */}
        <p style={styles.description}>
          I build scalable, production-ready web applications using modern
          technologies like <strong>React</strong>, <strong>Node.js</strong>,
          and <strong>cloud platforms</strong>. Passionate about clean code,
          system design, and solving real-world problems. Currently seeking
          internship and entry-level software engineering opportunities.
        </p>

        {/* QUICK STATS (RECRUITER SIGNAL) */}
        <div style={styles.stats}>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>10+</span>
            <span style={styles.statLabel}>Projects Built</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>2+</span>
            <span style={styles.statLabel}>Years Learning</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>5+</span>
            <span style={styles.statLabel}>Core Technologies</span>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div style={styles.actions}>
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>

          <a
            href="/Nitesh_Resume.pdf"
            className="btn-outline"
            download
          >
            Download Resume
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div style={styles.socials}>
          <a
            href="https://github.com/Nitesh-N-D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={styles.socialIcon}
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/nitesh-n-d-249ab6325"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={styles.socialIcon}
          >
            <FiLinkedin size={20} />
          </a>

          <a
            href="mailto:niteshdwaraka@gmail.com"
            aria-label="Email"
            style={styles.socialIcon}
          >
            <FiMail size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ==================== STYLES ==================== */

const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10%",
    background: "#020617"
  },

 container: {
  maxWidth: "900px",
  textAlign: "left" as const
},

  title: {
    fontSize: "clamp(40px, 6vw, 56px)",
    fontWeight: 700,
    color: "#e5e7eb",
    marginBottom: "12px",
    letterSpacing: "0.5px"
  },

  highlight: {
    color: "#38bdf8"
  },

  subtitle: {
    fontSize: "clamp(18px, 2.5vw, 22px)",
    fontWeight: 500,
    color: "#cbd5f5",
    marginBottom: "22px"
  },

  description: {
    fontSize: "16px",
    lineHeight: 1.75,
    color: "#94a3b8",
    maxWidth: "760px",
    margin: "0 auto"
  },

  stats: {
    marginTop: "36px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap" as const
  },

  statCard: {
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "16px 20px",
    minWidth: "140px"
  },

  statNumber: {
    display: "block",
    fontSize: "20px",
    fontWeight: 600,
    color: "#38bdf8"
  },

  statLabel: {
    fontSize: "13px",
    color: "#94a3b8",
    marginTop: "4px"
  },

  actions: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap" as const
  },

  socials: {
    marginTop: "44px",
    display: "flex",
    justifyContent: "center",
    gap: "18px"
  },

  socialIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "1px solid #1e293b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#94a3b8",
    textDecoration: "none",
    transition: "0.25s"
  }
};
