import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section section-tight">
      <div className="section-shell" style={{ maxWidth: 980 }}>
        <Reveal>
          <SectionHeader
            label="Education"
            title="Academic foundation with strong software engineering momentum"
            description="A quick view of the academic background supporting my problem-solving, systems thinking, and practical project work."
          />

          <div className="timeline" aria-label="Education timeline">
            {education.map((item, index) => (
              <motion.article
                key={`${item.degree}-${index}`}
                className="timeline-item"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
              >
                <span className="timeline-dot" aria-hidden="true" />

                <div className="card timeline-card">
                  <div className="timeline-meta">
                    <h3 className="timeline-title">{item.degree}</h3>
                    <span className="timeline-date">{item.duration}</span>
                  </div>

                  <p className="timeline-kicker">{item.institution}</p>

                  <div className="focus-list" style={{ marginBottom: 14 }}>
                    {item.location && <span className="chip">{item.location}</span>}
                    {item.cgpa && <span className="chip">CGPA: {item.cgpa}</span>}
                    {item.grade && <span className="chip">Grade: {item.grade}</span>}
                  </div>

                  {item.details && (
                    <ul className="timeline-list">
                      {item.details.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
