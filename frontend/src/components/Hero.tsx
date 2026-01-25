import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { ReactNode } from "react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "transparent",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* NAME */}
          <h1 style={{ fontSize: "clamp(40px, 6vw, 56px)" }}>
            N.D. <span style={{ color: "var(--primary)" }}>Nitesh</span>
          </h1>

          {/* ROLE */}
          <h2 style={{ marginBottom: "22px" }}>
            Full Stack Developer · Computer Science Engineer
          </h2>

          {/* DESCRIPTION */}
          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            I build scalable, production-ready web applications using modern
            technologies like <strong>React</strong>,{" "}
            <strong>Node.js</strong>, and <strong>cloud platforms</strong>.
            Passionate about clean code, system design, and solving real-world
            problems. Seeking internship and entry-level software engineering
            roles.
          </p>

          {/* STATS */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <Stat value="10+" label="Projects Built" />
            <Stat value="2+" label="Years Learning" />
            <Stat value="5+" label="Core Technologies" />
          </div>

          {/* ACTIONS */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
            <a href="/Nitesh_Resume.pdf" className="btn-outline" download>
              Download Resume
            </a>
          </div>

          {/* SOCIALS */}
          <div
            style={{
              marginTop: "44px",
              display: "flex",
              justifyContent: "center",
              gap: "18px",
            }}
          >
            <Social href="https://github.com/Nitesh-N-D" label="GitHub">
              <FiGithub size={20} />
            </Social>

            <Social
              href="https://linkedin.com/in/nitesh-n-d-249ab6325"
              label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </Social>

            <Social href="mailto:niteshdwaraka@gmail.com" label="Email">
              <FiMail size={20} />
            </Social>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "18px 26px",
        minWidth: "160px",
      }}
    >
      <span
        style={{
          fontSize: "22px",
          fontWeight: 600,
          color: "var(--primary)",
        }}
      >
        {value}
      </span>
      <p>{label}</p>
    </div>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--muted)",
      }}
    >
      {children}
    </a>
  );
}
