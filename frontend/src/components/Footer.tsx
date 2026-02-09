import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

export default function Footer() {
  const handleHover = (
    e: React.MouseEvent<HTMLAnchorElement>,
    enter: boolean
  ) => {
    e.currentTarget.style.color = enter ? "#e5e7eb" : "#94a3b8";
  };

  return (
    <footer className="footer" style={styles.footer}>
      <div style={styles.container} className="footer-container">
        {/* BRAND */}
        <div style={styles.brand}>
          <span style={styles.name}>Nitesh N D</span>

          <span style={styles.role}>
            Software Engineer · Full Stack Developer
          </span>

          <span style={styles.tech}>
            Java • React • Full Stack Development
          </span>

          <span style={styles.copy}>
            © {new Date().getFullYear()} Nitesh N D. All rights reserved.
          </span>
        </div>

        {/* LINKS */}
        <nav style={styles.links}>
          <a
            href="mailto:niteshdwaraka@gmail.com"
            aria-label="Send email to Nitesh N D"
            style={styles.link}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            <FiMail size={16} />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/Nitesh-N-D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile of Nitesh N D"
            style={styles.link}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            <FiGithub size={16} />
            <span>GitHub</span>
          </a>
           <a
            href="https://www.hackerrank.com/profile/niteshdwaraka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit HackerRank profile of Nitesh N D"
            style={styles.link}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
        <SiHackerrank size={16} />
  <span>HackerRank</span>
</a>

          <a
            href="https://leetcode.com/u/Nitesh_N_D/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View LeetCode profile of Nitesh N D"
            style={styles.link}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            <SiLeetcode size={16} />
            <span>LeetCode</span>
          </a>

          <a
            href="https://linkedin.com/in/nitesh-n-d-249ab6325"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile of Nitesh N D"
            style={styles.link}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            <FiLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}

/* ==================== STYLES ==================== */

const styles = {
  footer: {
    background: "#020617",
    borderTop: "1px solid #1e293b",
    padding: "28px 10%",
    marginTop: "40px",
    position: "relative" as const
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

  tech: {
    fontSize: "12px",
    color: "#64748b"
  },

  copy: {
    fontSize: "12px",
    color: "#64748b",
    marginTop: "4px"
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
    textDecoration: "none",
    transition: "color 0.2s ease"
  }
};
