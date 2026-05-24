import { motion } from "framer-motion";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="Experience"
            title="Experience"
          />

          <div className="relative mx-auto max-w-5xl pl-6 sm:pl-8 md:pl-12">
            <div className="timeline-line" aria-hidden="true" />

            <div className="grid gap-6">
              {experience.map((item, index) => (
                <motion.article
                  key={item.id}
                  className="timeline-item relative"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ x: 6 }}
                >
                  <span className="timeline-dot" aria-hidden="true" />

                  <div className="glass-card accent-card border-l-[3px] border-l-[var(--border-subtle)] p-5 transition duration-300 hover:translate-x-1 hover:border-l-[var(--border-strong)] hover:bg-[var(--amber-ghost)] sm:p-6 md:p-7 lg:p-8">
                    <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row">
                      <div>
                        <span className="premium-pill mb-4">
                          {item.start} - {item.end}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                          {item.role}
                        </h3>
                        <p className="mt-2 font-mono text-sm font-medium text-amber-500">{item.company}</p>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-text-secondary md:text-base">
                      {item.description}
                    </p>

                    {item.highlights && (
                      <div className="mt-5 grid gap-3">
                        {item.highlights.map(point => (
                          <div
                            key={point}
                            className="border border-[var(--border-subtle)] bg-bg-base/45 px-4 py-3 text-left text-sm leading-7 text-text-secondary md:text-base"
                          >
                            <span className="mr-2 text-amber-500">▸</span>
                            {point}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
