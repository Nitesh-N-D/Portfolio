// export default function Footer() {
//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         <p style={styles.text}>
//           © {new Date().getFullYear()} Nitesh Portfolio. All rights reserved.
//         </p>

//         <div style={styles.links}>
//           <a href="https://github.com/Nitesh-N-D" target="_blank">GitHub</a>
//           <a href="https://linkedin.com/in/nitesh-n-d-249ab6325" target="_blank">LinkedIn</a>
//           <a href="mailto:niteshdwaraka@gmail.com">Email</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* ==================== STYLES ==================== */

// const styles = {
//   footer: {
//     background: "#020617",
//     borderTop: "1px solid #1e293b",
//     padding: "36px 10%",
//     marginTop: "120px"
//   },

//   container: {
//     display: "flex",
//     flexWrap: "wrap" as const,
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "20px"
//   },

//   text: {
//     fontSize: "13px",
//     color: "#94a3b8"
//   },

//   links: {
//     display: "flex",
//     gap: "24px",
//     fontSize: "13px"
//   }
// };
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* LEFT: BRAND */}
        <div style={styles.brand}>
          <h4 style={styles.name}>N.D. Nitesh</h4>
          <p style={styles.text}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* RIGHT: LINKS */}
        <div style={styles.links}>
          <a
            href="mailto:niteshdwaraka@gmail.com"
            style={styles.link}
            aria-label="Email"
          >
            <FiMail size={16} />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/Nitesh-N-D"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="GitHub"
          >
            <FiGithub size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/nitesh-n-d-249ab6325"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ==================== STYLES ==================== */

const styles = {
  footer: {
    background: "#020617",
    borderTop: "1px solid #1e293b",
    padding: "40px 10%",
    marginTop: "120px"
  },

  container: {
    display: "flex",
    flexWrap: "wrap" as const,
    justifyContent: "space-between",
    alignItems: "center",
    gap: "28px"
  },

  brand: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px"
  },

  name: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#e5e7eb"
  },

  text: {
    fontSize: "13px",
    color: "#94a3b8"
  },

  links: {
    display: "flex",
    gap: "22px",
    fontSize: "13px"
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#94a3b8",
    textDecoration: "none",
    transition: "0.25s"
  }
};
