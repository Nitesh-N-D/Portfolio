// // import { motion } from "framer-motion";

// // export default function Reveal({ children }: { children: React.ReactNode }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 40 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.6, ease: "easeOut" }}
// //       viewport={{ once: true }}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // }
// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// interface RevealProps {
//   children: ReactNode;
//   delay?: number;
// }

// export default function Reveal({ children, delay = 0 }: RevealProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.7,
//         ease: "easeOut",
//         delay
//       }}
//       viewport={{ once: true, margin: "-80px" }}
//     >
//       {children}
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay
      }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
