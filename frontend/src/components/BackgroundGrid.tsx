import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="background-grid" aria-hidden="true">
      <motion.div
        className="background-grid-orb background-grid-orb-left"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], opacity: [0.55, 0.75, 0.55] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="background-grid-orb background-grid-orb-right"
        animate={{ x: [0, -24, 0], y: [0, -18, 0], opacity: [0.5, 0.68, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="background-grid-lines"
        animate={{ backgroundPosition: ["0px 0px", "0px 36px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
