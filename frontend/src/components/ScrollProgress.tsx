import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.2
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[9999] h-0.5 origin-left bg-grad-amber shadow-[0_0_6px_var(--amber-glow-md)]"
      style={{ scaleX }}
    />
  );
}
