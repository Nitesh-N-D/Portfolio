import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={styles.loader}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        style={styles.spinner}
      />
      <p style={styles.text}>Loading portfolio…</p>
    </motion.div>
  );
}

const styles = {
  loader: {
    position: "fixed" as const,
    inset: 0,
    background: "#020617",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  },

  spinner: {
    width: "46px",
    height: "46px",
    border: "3px solid #1e293b",
    borderTop: "3px solid #38bdf8",
    borderRadius: "50%",
    marginBottom: "16px"
  },

  text: {
    fontSize: "13px",
    color: "#94a3b8",
    letterSpacing: "0.3px"
  }
};
