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
      className="fixed inset-x-0 top-0 z-[1200] h-0.5 origin-left bg-gradient-to-r from-sky-300 via-slate-100 to-blue-200 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
      style={{ scaleX }}
    />
  );
}
