export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} Nitesh Portfolio. All rights reserved.
        </p>

        <div style={styles.links}>
          <a href="https://github.com/Nitesh-N-D" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/nitesh-n-d-249ab6325" target="_blank">LinkedIn</a>
          <a href="mailto:niteshdwaraka@gmail.com">Email</a>
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
    padding: "36px 10%",
    marginTop: "120px"
  },

  container: {
    display: "flex",
    flexWrap: "wrap" as const,
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px"
  },

  text: {
    fontSize: "13px",
    color: "#94a3b8"
  },

  links: {
    display: "flex",
    gap: "24px",
    fontSize: "13px"
  }
};
