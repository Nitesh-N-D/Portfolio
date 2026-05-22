import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 z-[1400] flex flex-col items-center justify-center bg-bg-base"
    >
      <motion.div
        className="font-display text-[8rem] italic leading-none text-amber-500"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        N
      </motion.div>

      <div className="mt-8 h-0.5 w-[120px] overflow-hidden bg-white/[0.04]">
        <motion.div
          className="h-full origin-left bg-grad-amber shadow-[0_0_10px_var(--amber-glow-md)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      <motion.p
        className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-text-muted"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
      >
        N.D. Nitesh
      </motion.p>
    </motion.div>
  );
}
