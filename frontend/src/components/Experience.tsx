import { motion } from "framer-motion";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="Experience"
            title="Practical engineering journey presented as a clear timeline"
            description="Real delivery work, learning velocity, and technical ownership are highlighted in a vertical timeline with clearer hierarchy and more breathing room."
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

                  <div className="glass-card accent-card p-5 text-center sm:p-6 md:p-7 lg:p-8 lg:text-left">
                    <div className="mb-4 flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
                      <div>
                        <span className="premium-pill mb-4 border-indigo-400/20 bg-indigo-500/10 text-indigo-100">
                          {item.start} - {item.end}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                          {item.role}
                        </h3>
                        <p className="mt-2 text-base font-medium text-blue-200">{item.company}</p>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-400 md:text-base">
                      {item.description}
                    </p>

                    {item.highlights && (
                      <div className="mt-5 grid gap-3">
                        {item.highlights.map(point => (
                          <div
                            key={point}
                            className="rounded-[18px] border border-white/10 bg-slate-950/45 px-4 py-3 text-left text-sm leading-7 text-slate-300 md:text-base"
                          >
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
