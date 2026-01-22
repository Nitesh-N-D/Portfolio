// export default function Hero() {
//   return (
//     <section className="hero">
//       <h1>N.D. Nitesh</h1>
//       <p>Software Engineer | Full Stack Developer</p>
//       <div className="hero-actions">
//         <a href="#projects" className="btn">View Projects</a>
//         <a href="#contact" className="btn-outline">Contact Me</a>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ maxWidth: "700px" }}
      >
        <h1 style={{ fontSize: "48px", color: "#38bdf8" }}>Hi, I'm Nitesh</h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#cbd5f5" }}>
          Computer Science Engineering student building scalable full-stack applications
          and modern backend platforms.
        </p>

        <div style={{ marginTop: "32px", display: "flex", gap: "20px" }}>
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
}
