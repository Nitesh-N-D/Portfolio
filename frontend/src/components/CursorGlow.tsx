import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      mouseX.set(event.clientX - 160);
      mouseY.set(event.clientY - 160);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[-1] hidden h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08),rgba(99,102,241,0.05),transparent_72%)] blur-3xl lg:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
