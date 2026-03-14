import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="page-loader"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="page-loader-spinner"
      />
      <p className="page-loader-title">Welcome to my portfolio</p>
      <p className="page-loader-text">Loading projects, experience, and code highlights.</p>
    </motion.div>
  );
}
