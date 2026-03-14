import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { profile } from "../data/profile";

const proofSignals = [
  { value: "Projects", label: "Built and shipped across the stack", note: "Recruiter-ready proof" },
  { value: "Experience", label: "Timeline with practical engineering work", note: "Hands-on delivery" },
  { value: "Certifications", label: "Continuous learning and validation", note: "Documented growth" }
];

export default function About() {
  return (
    <section id="about" className="section section-tight">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            label="About"
            title="A developer portfolio designed to communicate credibility fast"
            description={`${profile.title} with a focus on scalable product engineering, thoughtful UI, and clean execution across frontend and backend systems.`}
          />

          <div className="about-layout">
            <motion.article
              className="card about-panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="about-copy">
                <p>
                  I am a <strong>Computer Science Engineering student</strong> building
                  recruiter-friendly, production-minded software with a strong interest in
                  <strong> scalable applications</strong>, polished user experiences, and
                  maintainable systems.
                </p>
                <p>
                  My workflow emphasizes <strong>clean code</strong>, practical architecture,
                  and real-world delivery. I enjoy translating ideas into interfaces and APIs that
                  feel clear, reliable, and easy to trust.
                </p>
                <p>
                  The goal of this portfolio is simple: help hiring teams quickly understand
                  <strong> what I build</strong>, <strong>how I think</strong>, and
                  <strong> where I can contribute</strong>.
                </p>
              </div>
            </motion.article>

            <motion.aside
              className="card about-panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            >
              <h3 className="contact-copy-title">Primary focus areas</h3>
              <div className="focus-list" aria-label="Primary focus areas">
                {profile.highlights.map(highlight => (
                  <span key={highlight} className="chip">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.aside>
          </div>

          <div className="proof-grid" style={{ marginTop: 24 }}>
            {proofSignals.map((item, index) => (
              <motion.article
                key={item.value}
                className="card proof-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index, ease: "easeOut" }}
              >
                <span className="proof-card-value">{item.value}</span>
                <span className="proof-card-label">{item.label}</span>
                <span className="proof-card-note">{item.note}</span>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
