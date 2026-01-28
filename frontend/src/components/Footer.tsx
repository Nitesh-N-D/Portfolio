// // import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// // export default function Footer() {
// //   return (
// //     <footer style={styles.footer}>
// //       <div style={styles.container}>
// //         {/* LEFT */}
// //         <div style={styles.brand}>
// //           <span style={styles.name}>Nitesh N D</span>
// //           <span style={styles.role}>
// //             Software Engineer · Full Stack Developer
// //           </span>
// //           <span style={styles.copy}>
// //             © {new Date().getFullYear()} All rights reserved
// //           </span>
// //         </div>

// //         {/* RIGHT */}
// //         <nav style={styles.links}>
// //           <a href="mailto:niteshdwaraka@gmail.com" style={styles.link}>
// //             <FiMail size={15} />
// //             <span>Email</span>
// //           </a>

// //           <a
// //             href="https://github.com/Nitesh-N-D"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             style={styles.link}
// //           >
// //             <FiGithub size={15} />
// //             <span>GitHub</span>
// //           </a>

// //           <a
// //             href="https://linkedin.com/in/nitesh-n-d-249ab6325"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             style={styles.link}
// //           >
// //             <FiLinkedin size={15} />
// //             <span>LinkedIn</span>
// //           </a>
// //         </nav>
// //       </div>
// //     </footer>
// //   );
// // }

// // /* ==================== STYLES ==================== */

// // const styles = {
// //   footer: {
// //     background: "#020617",
// //     borderTop: "1px solid #1e293b",
// //     padding: "28px 10%",     // ↓ reduced
// //     marginTop: "40px"        // ↓ reduced
// //   },

// //   container: {
// //     display: "flex",
// //     flexWrap: "wrap" as const,
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     gap: "24px"
// //   },

// //   brand: {
// //     display: "flex",
// //     flexDirection: "column" as const,
// //     gap: "4px"
// //   },

// //   name: {
// //     fontSize: "14px",
// //     fontWeight: 600,
// //     color: "#e5e7eb"
// //   },

// //   role: {
// //     fontSize: "13px",
// //     color: "#94a3b8"
// //   },

// //   copy: {
// //     fontSize: "12px",
// //     color: "#64748b"
// //   },

// //   links: {
// //     display: "flex",
// //     gap: "20px"
// //   },

// //   link: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "6px",
// //     fontSize: "13px",
// //     color: "#94a3b8",
// //     textDecoration: "none"
// //   }
// // };
// import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// export default function Footer() {
//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         {/* LEFT */}
//         <div style={styles.brand}>
//           <span style={styles.name}>Nitesh N D</span>
//           <span style={styles.role}>
//             Software Engineer · Full Stack Developer
//           </span>
//           <span style={styles.copy}>
//             © {new Date().getFullYear()} All rights reserved
//           </span>
//         </div>

//         {/* RIGHT */}
//         <nav style={styles.links}>
//           <a href="mailto:niteshdwaraka@gmail.com" style={styles.link}>
//             <FiMail size={15} />
//             <span>Email</span>
//           </a>

//           <a
//             href="https://github.com/Nitesh-N-D"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={styles.link}
//           >
//             <FiGithub size={15} />
//             <span>GitHub</span>
//           </a>

//           <a
//             href="https://linkedin.com/in/nitesh-n-d-249ab6325"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={styles.link}
//           >
//             <FiLinkedin size={15} />
//             <span>LinkedIn</span>
//           </a>
//         </nav>
//       </div>
//     </footer>
//   );
// }

// /* ==================== STYLES ==================== */

// const styles = {
//   footer: {
//     background: "#020617",
//     borderTop: "1px solid #1e293b",
//     padding: "28px 10%",
//     marginTop: "40px",
//   },

//   container: {
//     display: "flex",
//     flexWrap: "wrap" as const,
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "24px",
//   },

//   brand: {
//     display: "flex",
//     flexDirection: "column" as const,
//     gap: "4px",
//   },

//   name: {
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#e5e7eb",
//   },

//   role: {
//     fontSize: "13px",
//     color: "#94a3b8",
//   },

//   copy: {
//     fontSize: "12px",
//     color: "#64748b",
//   },

//   links: {
//     display: "flex",
//     gap: "20px",
//   },

//   link: {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//     fontSize: "13px",
//     color: "#94a3b8",
//     textDecoration: "none",
//   },
// };
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* BRAND */}
        <div style={styles.brand}>
          <span style={styles.name}>Nitesh N D</span>
          <span style={styles.role}>
            Software Engineer · Full Stack Developer
          </span>
          <span style={styles.copy}>
            © {new Date().getFullYear()} All rights reserved
          </span>
        </div>

        {/* LINKS */}
        <nav style={styles.links}>
          <a href="mailto:niteshdwaraka@gmail.com" style={styles.link}>
            <FiMail size={16} />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/Nitesh-N-D"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FiGithub size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/nitesh-n-d-249ab6325"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FiLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </nav>
      </div>

      {/* MOBILE RESPONSIVE */}
      <style>
        {`
          @media (max-width: 768px) {
            footer div {
              flex-direction: column;
              text-align: center;
            }

            footer nav {
              justify-content: center;
              flex-wrap: wrap;
              gap: 16px;
            }
          }
        `}
      </style>
    </footer>
  );
}

/* ==================== STYLES ==================== */

const styles = {
  footer: {
    background: "#020617",
    borderTop: "1px solid #1e293b",
    padding: "28px 10%",
    marginTop: "40px"
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "24px",
    flexWrap: "wrap" as const
  },

  brand: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px"
  },

  name: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#e5e7eb"
  },

  role: {
    fontSize: "13px",
    color: "#94a3b8"
  },

  copy: {
    fontSize: "12px",
    color: "#64748b"
  },

  links: {
    display: "flex",
    gap: "20px"
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    color: "#94a3b8",
    textDecoration: "none"
  }
};
