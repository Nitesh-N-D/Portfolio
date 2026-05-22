import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const smoothX = useSpring(ringX, { stiffness: 180, damping: 24, mass: 0.18 });
  const smoothY = useSpring(ringY, { stiffness: 180, damping: 24, mass: 0.18 });
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;
    setEnabled(true);

    let frame = 0;
    const updateMousePosition = (event: MouseEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        dotX.set(event.clientX - 3);
        dotY.set(event.clientY - 3);
        ringX.set(event.clientX - 19);
        ringY.set(event.clientY - 19);
        const target = event.target as HTMLElement | null;
        setHovering(Boolean(target?.closest("a,button,input,textarea,[data-cursor='hover']")));
      });
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [dotX, dotY, ringX, ringY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[99999] h-1.5 w-1.5 rounded-full bg-amber-400"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        aria-hidden="true"
        className="custom-cursor-ring pointer-events-none fixed left-0 top-0 z-[99998] h-[38px] w-[38px] rounded-full border border-amber-500 bg-transparent"
        animate={{ opacity: hovering ? 0.9 : 0.45, scale: hovering ? 1.5 : 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        style={{ x: smoothX, y: smoothY }}
      />
    </>
  );
}
