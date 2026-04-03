import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { ReactNode } from "react";

const roles = ["Software Developer", "Full Stack Engineer", "Problem Solver"];
const floatingBadges = ["10+ Projects", "12+ Certifications", "2+ Internships"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section id="home" className="premium-section flex min-h-screen items-center pt-24 md:pt-28">
      <div className="premium-container relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-10 -z-10 mx-auto h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),rgba(99,102,241,0.08),transparent_70%)] blur-3xl md:h-[28rem] md:w-[28rem]"
        />

        <div className="glass-card relative overflow-hidden px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.1),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_26%)]"
          />
          <div aria-hidden="true" className="hero-dot-pattern absolute inset-0 opacity-30" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="premium-pill border-blue-400/25 bg-blue-500/10 text-blue-100">
                  Open to internships and software roles
                </span>
              </div>

              <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.05em] text-white md:text-5xl lg:mx-0 lg:text-6xl">
                <span className="text-gradient">Nitesh N D</span> builds clean, professional
                software products
              </h1>

              <div className="mt-5 flex min-h-[2rem] items-center justify-center gap-2 text-base font-semibold text-slate-300 lg:justify-start md:text-xl">
                <span className="text-slate-400">Role:</span>
                <span className="text-gradient-accent">{displayText}</span>
                <span className="h-6 w-px animate-pulse bg-blue-300/80" />
              </div>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 lg:mx-0 lg:text-lg">
                Full-stack developer focused on polished UX, scalable engineering, and clear
                presentation of real project work across frontend and backend systems.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
                <motion.a
                  href="#projects"
                  className="primary-button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                  <FiArrowRight />
                </motion.a>
                <motion.a
                  href="/Nitesh_Resume.pdf"
                  className="secondary-button"
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download Resume
                  <FiDownload />
                </motion.a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Social href="https://github.com/Nitesh-N-D" label="GitHub profile">
                  <FiGithub size={19} />
                </Social>
                <Social href="https://linkedin.com/in/nitesh-n-d-249ab6325" label="LinkedIn profile">
                  <FiLinkedin size={19} />
                </Social>
                <Social href="mailto:niteshdwaraka@gmail.com" label="Email Nitesh">
                  <FiMail size={19} />
                </Social>
              </div>
            </motion.div>

            <div className="relative mx-auto flex w-full max-w-lg flex-col gap-4">
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge}
                  className={`glass-card-soft premium-pill w-fit px-4 py-2 text-sm text-white ${
                    index === 0
                      ? "self-start"
                      : index === 1
                        ? "self-center"
                        : "self-end"
                  }`}
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {badge}
                </motion.div>
              ))}

              <motion.div
                className="glass-card-soft relative mt-2 overflow-hidden rounded-[26px] p-5 md:p-6"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_34%)]" />
                <div className="relative grid gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="premium-pill text-xs uppercase tracking-[0.22em] text-blue-100">
                      Quick Snapshot
                    </span>
                    <span className="text-sm text-slate-400">2026 Portfolio</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[22px] border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Focus</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Clean product UI and full-stack execution
                      </p>
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Strength</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Frontend polish with backend reliability
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5 p-4">
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Value</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300 md:text-base">
                      Built to help hiring teams quickly assess communication, UI judgment, code
                      quality, and real-world delivery across portfolio projects.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
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
    >
      {children}
    </motion.a>
  );
}
