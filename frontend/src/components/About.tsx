import { motion } from "framer-motion";
import { FiBookOpen, FiHeart, FiMapPin } from "react-icons/fi";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
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

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="About"
            title="About Me"
          />

          <div className="grid items-start gap-8 lg:grid-cols-[55%_45%]">
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

            <div className="grid gap-6">
              <motion.div
                className="glass-card-soft mx-auto grid aspect-square w-full max-w-[340px] place-items-center p-5"
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="relative grid h-full w-full place-items-center rounded-[var(--r-lg)] border border-[var(--border-default)] bg-[var(--grad-surface)]">
                  <span className="absolute right-5 top-5 h-3 w-3 animate-[float-b_6s_ease-in-out_infinite] rounded-full bg-amber-500 shadow-[var(--shadow-amber-sm)]" />
                  <span className="font-display text-[5rem] font-bold text-amber-500">ND</span>
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {profile.stats.map((stat, index) => (
                  <motion.article
                    key={stat.label}
                    className="glass-card-soft p-5 transition duration-300 hover:border-[var(--border-emphasis)] hover:shadow-[var(--shadow-amber-sm)]"
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
            className="glass-card mt-8 overflow-hidden p-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
          >
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-text-muted">Map Preview</p>
                <h3 className="mt-2 text-2xl font-bold text-text-primary">Chennai, Tamil Nadu</h3>
              </div>
              <span className="premium-pill">Available for remote and onsite opportunities</span>
            </div>
            <div className="overflow-hidden rounded-[var(--r-md)] border border-[var(--border-subtle)]">
              <iframe
                src="https://www.google.com/maps?q=Chennai,TamilNadu&output=embed"
                title="Chennai map preview"
                className="h-[260px] w-full border-0 md:h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
