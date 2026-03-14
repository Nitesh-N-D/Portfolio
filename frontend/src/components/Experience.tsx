import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section section-tight">
      <div className="section-shell" style={{ maxWidth: 980 }}>
        <Reveal>
          <SectionHeader
            label="Experience"
            title="Timeline of practical engineering work"
            description="The experience section highlights real delivery work, collaboration, and the applied side of my software engineering foundation."
          />

          <div className="timeline" aria-label="Professional experience timeline">
            {experience.map(item => (
              <motion.article
                key={item.id}
                className="timeline-item"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
              >
                <span className="timeline-dot" aria-hidden="true" />

                <div className="card timeline-card">
                  <div className="timeline-meta">
                    <h3 className="timeline-title">{item.role}</h3>
                    <span className="timeline-date">
                      {item.start} - {item.end}
                    </span>
                  </div>

                  <p className="timeline-kicker">{item.company}</p>
                  <p className="timeline-text">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
