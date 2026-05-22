import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { ReactNode } from "react";

import { charReveal, staggerContainer } from "../lib/variants";

const roles = ["Software Developer", "Full Stack Engineer", "Problem Solver"];
const floatingBadges = ["10+ Projects", "12+ Certifications", "2+ Internships"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const name = "Nitesh N D";

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const completedTyping = displayText === currentRole;
    const finishedDeleting = displayText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !completedTyping) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          return;
        }

        if (!isDeleting && completedTyping) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !finishedDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          return;
        }

        setIsDeleting(false);
        setRoleIndex(index => (index + 1) % roles.length);
      },
      isDeleting ? 55 : displayText === currentRole ? 1400 : 90
    );

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="premium-section flex min-h-[100svh] items-center overflow-hidden pt-[calc(var(--navbar-h)+48px)]"
    >
      <div className="absolute inset-0 -z-10 bg-[var(--grad-hero-radial)]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-[spin-slow_80s_linear_infinite] rounded-full border border-[rgba(212,146,42,0.05)]" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-[spin_50s_linear_infinite_reverse] rounded-full border border-dashed border-[rgba(212,146,42,0.04)]" aria-hidden="true" />

      <div className="premium-container grid items-center gap-14 lg:grid-cols-[58%_42%]">
        <motion.div className="text-center lg:text-left" initial="hidden" animate="visible">
          <motion.p
            className="mb-5 font-mono text-[0.9rem] tracking-[0.15em] text-amber-500"
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay: 0.3 } } }}
          >
            Open to internships and software roles
          </motion.p>

          <motion.h1
            id="home-heading"
            className="mx-auto flex max-w-5xl flex-wrap justify-center font-display text-[var(--fs-hero)] font-black leading-[0.95] tracking-[-0.02em] text-text-primary lg:mx-0 lg:justify-start"
            variants={staggerContainer(0.035, 0.5)}
          >
            {name.split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} className={char === " " ? "w-[0.28em]" : ""} variants={charReveal}>
                {char === " " ? "\u00a0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="mt-6 flex min-h-[2.5rem] flex-wrap items-center justify-center gap-2 font-sans text-[clamp(1.2rem,3vw,1.8rem)] font-medium text-text-secondary lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span>Role:</span>
            <span className="text-amber-gradient">{displayText}</span>
            <span className="animate-[blink-cursor_1s_step-end_infinite] text-amber-500">|</span>
          </motion.div>

          <motion.p
            className="mx-auto mt-7 max-w-[520px] text-[var(--fs-body)] leading-[1.8] text-text-secondary lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Full-stack developer focused on polished UX, scalable engineering, and clear
            presentation of real project work across frontend and backend systems.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.55 }}
          >
            <a href="#projects" className="secondary-button min-w-[11rem]" data-cursor="hover">
              View Projects
              <FiArrowDownRight />
            </a>
            <a href="/Nitesh_Resume.pdf" className="primary-button min-w-[11rem]" download data-cursor="hover">
              Download Resume
              <FiDownload />
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.45 }}
          >
            <Social href="https://github.com/Nitesh-N-D" label="GitHub profile">
              <FiGithub size={20} />
            </Social>
            <Social href="https://linkedin.com/in/nitesh-n-d-249ab6325" label="LinkedIn profile">
              <FiLinkedin size={20} />
            </Social>
            <Social href="mailto:niteshdwaraka@gmail.com" label="Email Nitesh">
              <FiMail size={20} />
            </Social>
          </motion.div>
        </motion.div>

        <motion.aside
          className="relative mx-auto hidden w-[clamp(300px,38vw,460px)] md:block"
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="absolute -left-5 -top-8 z-10 grid gap-3">
            {floatingBadges.map((badge, index) => (
              <motion.span
                key={badge}
                className="premium-pill w-fit bg-[var(--bg-card)]"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>

          <div className="overflow-hidden rounded-[var(--r-lg)] border border-[var(--border-default)] bg-[#0d0d14] shadow-[var(--shadow-lg),var(--shadow-amber-sm)] [animation:float-a_9s_ease-in-out_infinite,amber-pulse_4s_ease-in-out_infinite]">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[#0a0a11] px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28ca42]" />
              </div>
              <span className="font-mono text-[0.72rem] text-text-muted">developer.ts</span>
              <span className="font-mono text-[0.72rem] text-text-muted">nitesh.config.ts</span>
            </div>

            <pre className="overflow-x-auto px-7 py-6 font-mono text-[0.82rem] leading-[1.8]">
              <code>
                <span className="text-text-muted">// developer profile</span>{"\n"}
                <span className="text-amber-500">const</span> <span className="text-text-primary">nitesh</span> <span className="text-[#6e6b66]">= {"{"}</span>{"\n"}
                {"  "}<span className="text-[#87c3ff]">name</span><span className="text-[#6e6b66]">:</span> <span className="text-[#a8d8a8]">"Nitesh N D"</span><span className="text-[#6e6b66]">,</span>{"\n"}
                {"  "}<span className="text-[#87c3ff]">role</span><span className="text-[#6e6b66]">:</span> <span className="text-[#a8d8a8]">"Full Stack Developer"</span><span className="text-[#6e6b66]">,</span>{"\n"}
                {"  "}<span className="text-[#87c3ff]">focus</span><span className="text-[#6e6b66]">:</span> <span className="text-[#6e6b66]">[</span><span className="text-[#a8d8a8]">"React"</span><span className="text-[#6e6b66]">,</span> <span className="text-[#a8d8a8]">"Node.js"</span><span className="text-[#6e6b66]">],</span>{"\n"}
                {"  "}<span className="text-[#87c3ff]">stack</span><span className="text-[#6e6b66]">:</span> <span className="text-[#6e6b66]">[</span><span className="text-[#a8d8a8]">"TypeScript"</span><span className="text-[#6e6b66]">,</span> <span className="text-[#a8d8a8]">"MySQL"</span><span className="text-[#6e6b66]">],</span>{"\n"}
                {"  "}<span className="text-[#87c3ff]">status</span><span className="text-[#6e6b66]">:</span> <span className="text-[#a8d8a8]">"Open to opportunities"</span><span className="text-[#6e6b66]">,</span>{"\n"}
                {"  "}<span className="text-[#87c3ff]">based</span><span className="text-[#6e6b66]">:</span> <span className="text-[#a8d8a8]">"India"</span>{"\n"}
                <span className="text-[#6e6b66]">{"};"}</span>
              </code>
            </pre>

            <div className="border-t border-[var(--border-subtle)] bg-[#08080e] px-4 py-3 font-mono text-[0.72rem] text-text-secondary">
              $ npm run build-something-great<span className="animate-[blink-cursor_1s_step-end_infinite] text-amber-500">_</span>
            </div>
          </div>
        </motion.aside>
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
      className="social-button"
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={label}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      data-cursor="hover"
    >
      {children}
    </motion.a>
  );
}
