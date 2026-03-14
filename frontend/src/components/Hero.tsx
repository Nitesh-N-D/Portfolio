import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { ReactNode } from "react";
import { profile } from "../data/profile";

const stats = [
  { value: "10+", label: "Projects built", proof: "Shipped across product and platform work" },
  { value: "2+", label: "Years building", proof: "Consistent hands-on execution" },
  { value: "12+", label: "Core technologies", proof: "Frontend, backend, and deployment" }
];

export default function Hero() {
  return (
    <section id="home" className="section hero-section" aria-labelledby="hero-title">
      <div className="hero-shell">
        <motion.div
          className="hero-glow"
          aria-hidden="true"
          animate={{ scale: [1, 1.04, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        />

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="hero-copy">
            <span className="hero-eyebrow">Open to internships and entry-level software roles</span>

            <div>
              <h1 id="hero-title" className="hero-title">
                {profile.name} designs <span className="hero-title-accent">developer-first</span>,
                production-minded web products.
              </h1>
              <p className="hero-role">{profile.title}</p>
            </div>

            <p className="hero-description">
              I build full-stack experiences that feel sharp in demos, stay clean in code review,
              and make it easy for recruiters and engineering teams to quickly understand
              <strong> impact</strong>, <strong>system thinking</strong>, and <strong>execution quality</strong>.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <motion.a href="#projects" className="btn" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                View Projects
                <FiArrowRight />
              </motion.a>
              <motion.a href="#contact" className="btn-outline" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                Contact
              </motion.a>
              <motion.a
                href="/Nitesh_Resume.pdf"
                className="btn-ghost"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Resume
                <FiDownload />
              </motion.a>
            </div>

            <div className="hero-socials" aria-label="Social links">
              <Social href="https://github.com/Nitesh-N-D" label="GitHub profile">
                <FiGithub size={20} />
              </Social>
              <Social href="https://linkedin.com/in/nitesh-n-d-249ab6325" label="LinkedIn profile">
                <FiLinkedin size={20} />
              </Social>
              <Social href={`mailto:${profile.email}`} label="Send email">
                <FiMail size={20} />
              </Social>
            </div>
          </div>

          <div className="hero-stats" aria-label="Portfolio proof points">
            {stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                className="card hero-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
                <span className="hero-stat-proof">{stat.proof}</span>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Social({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <motion.a
      href={href}
      className="hero-social"
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={label}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}
