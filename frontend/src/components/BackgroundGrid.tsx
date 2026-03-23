import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="background-grid" aria-hidden="true">
      <motion.div
        className="background-grid-orb background-grid-orb-left"
        animate={{ x: [0, 16, 0], y: [0, 10, 0], opacity: [0.36, 0.46, 0.36] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="background-grid-orb background-grid-orb-right"
        animate={{ x: [0, -14, 0], y: [0, -10, 0], opacity: [0.34, 0.42, 0.34] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="background-grid-lines"
        animate={{ backgroundPosition: ["0px 0px", "0px 52px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
