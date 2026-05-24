import { motion } from "framer-motion";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="Education"
            title="Education"
          />

          <div className="relative mx-auto max-w-5xl pl-6 sm:pl-8 md:pl-12">
            <div className="timeline-line" aria-hidden="true" />

            <div className="grid gap-6">
              {education.map((item, index) => (
                <motion.article
                  key={`${item.degree}-${index}`}
                  className="timeline-item relative"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ x: 6 }}
                >
                  <span className="timeline-dot" aria-hidden="true" />

                  <div className="glass-card accent-card p-5 text-center sm:p-6 md:p-7 lg:p-8 lg:text-left">
                    <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row">
                      <div>
                        <span className="premium-pill mb-4">
                          {item.duration}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                          {item.degree}
                        </h3>
                        <p className="mt-2 text-base font-medium text-amber-500">
                          {item.institution}
                        </p>
                      </div>

                      <div className="flex flex-wrap justify-center gap-2.5 md:justify-end md:gap-3">
                        {item.location && <span className="premium-pill">{item.location}</span>}
                        {item.cgpa && <span className="premium-pill">CGPA: {item.cgpa}</span>}
                        {item.grade && <span className="premium-pill">Grade: {item.grade}</span>}
                      </div>
                    </div>

                    {item.details && (
                      <ul className="grid gap-3 pl-5 text-left text-sm leading-7 text-text-secondary md:text-base">
                        {item.details.map(point => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
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
