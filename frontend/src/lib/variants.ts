import { Variants } from "framer-motion";

export const fadeUp = (delay = 0, distance = 40): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  }
});

export const fadeLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  }
});

export const fadeRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  }
});

export const staggerContainer = (stagger = 0.08, delay = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } }
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay, ease: [0.34, 1.56, 0.64, 1] }
  }
});

export const charReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export const cardHover = {
  whileHover: { y: -6, transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] } },
  whileTap: { y: -2, scale: 0.99 }
};

export const navItem = (i: number): Variants => ({
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 + i * 0.06 } }
});
