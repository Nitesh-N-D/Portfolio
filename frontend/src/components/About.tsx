import { motion } from "framer-motion";
import { FiBookOpen, FiHeart, FiMapPin } from "react-icons/fi";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { journeyMap, type JourneyStop } from "../data/journey";
import { profile } from "../data/profile";

const quickCards = [
  {
    title: "Location",
    value: "Chennai, Tamil Nadu",
    description: "Based in Chennai and open to internship and software opportunities.",
    icon: <FiMapPin />
  },
  {
    title: "Education",
    value: "B.E. Computer Science",
    description: "Madras Institute of Technology with strong full-stack project momentum.",
    icon: <FiBookOpen />
  },
  {
    title: "Interests",
    value: "UI, Systems, Product Thinking",
    description: "I enjoy building dependable products with strong visual clarity.",
    icon: <FiHeart />
  }
];

function buildRoutePath(stops: JourneyStop[]) {
  if (stops.length === 0) return "";
  if (stops.length === 1) return `M${stops[0].x} ${stops[0].y}`;

  return stops
    .slice(1)
    .reduce((path, stop, index) => {
      const previous = stops[index];
      const controlX = (previous.x + stop.x) / 2;
      return `${path} C${controlX} ${previous.y} ${controlX} ${stop.y} ${stop.x} ${stop.y}`;
    }, `M${stops[0].x} ${stops[0].y}`);
}

function getLabelTransform(stop: JourneyStop) {
  const horizontal = stop.labelX > 68 ? "-translate-x-full" : "";
  const vertical = stop.labelY > 68 ? "-translate-y-1/2" : "";
  return [horizontal, vertical].filter(Boolean).join(" ");
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="About"
            title="About Me"
          />

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
            <motion.article
              className="glass-card p-6 md:p-9"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="premium-pill mb-6">About me</span>

              <div className="grid gap-5">
                <p className="copy-readable">
                  I am a <span className="font-semibold text-text-primary">Computer Science Engineering student</span> who enjoys turning ideas into polished,
                  production-minded software. My work combines <span className="font-semibold text-text-primary">clear UI thinking</span>,
                  maintainable engineering, and practical product decisions.
                </p>
                <p className="copy-readable">
                  I care about interfaces that feel intentional, backend systems that stay reliable,
                  and projects that communicate value clearly to teammates and users.
                </p>
                <p className="copy-readable">
                  This portfolio is designed to show <span className="font-semibold text-text-primary">what I build</span>, how I think about
                  product execution, and how I can contribute to modern engineering teams.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {profile.highlights.map(highlight => (
                  <span key={highlight} className="premium-pill">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.article>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {profile.stats.map((stat, index) => (
                  <motion.article
                    key={stat.label}
                    className="glass-card-soft min-w-0 p-5 transition duration-300 hover:border-[var(--border-emphasis)] hover:shadow-[var(--shadow-amber-sm)]"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                  >
                    <p className="font-display text-[2.8rem] font-bold leading-none text-amber-500">{stat.value}</p>
                    <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-text-muted">
                      {stat.label}
                    </p>
                  </motion.article>
                ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {quickCards.map((item, index) => (
              <motion.article
                key={item.title}
                className="glass-card-soft p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * index, ease: "easeOut" }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[var(--r-sm)] border border-[var(--border-default)] bg-[var(--amber-ghost)] text-lg text-amber-500">
                  {item.icon}
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-muted">{item.title}</p>
                <h3 className="mt-2 text-xl font-bold text-text-primary">{item.value}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{item.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="glass-card mt-8 overflow-hidden p-5 sm:p-6 md:p-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
          >
            <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-text-muted">{journeyMap.label}</p>
                <h3 className="mt-2 text-2xl font-bold text-text-primary">{journeyMap.title}</h3>
              </div>
              <span className="premium-pill">{journeyMap.badge}</span>
            </div>

            <div className="relative overflow-hidden rounded-[var(--r-md)] border border-[var(--border-subtle)] bg-[radial-gradient(circle_at_22%_68%,rgba(212,146,42,0.2),transparent_18%),radial-gradient(circle_at_74%_34%,rgba(245,185,66,0.14),transparent_20%),linear-gradient(135deg,rgba(18,18,26,0.96),rgba(5,5,7,0.94))]">
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(212,146,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,146,42,0.08)_1px,transparent_1px)] [background-size:34px_34px]" aria-hidden="true" />
              <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_28%_72%,rgba(212,146,42,0.2)_0_2px,transparent_3px),radial-gradient(circle_at_68%_30%,rgba(212,146,42,0.16)_0_1px,transparent_2px)] [background-size:120px_90px]" aria-hidden="true" />

              <div className="relative min-h-[360px] sm:min-h-[420px]">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label={journeyMap.ariaLabel}
                >
                  <path
                    d={buildRoutePath(journeyMap.stops)}
                    fill="none"
                    stroke="rgba(212,146,42,0.14)"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    d={buildRoutePath(journeyMap.stops)}
                    fill="none"
                    stroke="rgba(245,185,66,0.9)"
                    strokeWidth="1.4"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 38 C18 34 24 42 34 36 C47 28 61 28 72 18"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 18 C28 26 42 20 54 28 C66 36 78 32 94 42"
                    fill="none"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                  />
                </svg>

                {journeyMap.stops.map(stop => (
                  <div
                    key={`${stop.id}-pin`}
                    className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500 shadow-[0_0_0_10px_rgba(212,146,42,0.12),0_0_30px_rgba(212,146,42,0.45)]"
                    style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
                    aria-hidden="true"
                  />
                ))}

                {journeyMap.stops.map((stop, index) => (
                  <motion.div
                    key={stop.id}
                    className={`absolute z-10 w-fit max-w-[min(13rem,38vw)] rounded-full border border-white/10 bg-bg-base/78 px-3 py-2 shadow-[var(--shadow-card)] backdrop-blur-xl sm:max-w-[15rem] sm:px-4 ${getLabelTransform(stop)}`}
                    style={{ left: `${stop.labelX}%`, top: `${stop.labelY}%` }}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
                  >
                    <p className="text-xs font-bold leading-snug text-text-primary sm:text-sm md:text-base">{stop.place}</p>
                  </motion.div>
                ))}

                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-amber-500/25 bg-bg-base/70 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-muted backdrop-blur-xl">
                  {journeyMap.routeLabel}
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
