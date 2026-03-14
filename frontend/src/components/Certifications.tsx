import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Certification, certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section section-tight">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            label="Certifications"
            title="Credentials that reinforce technical growth"
            description="These certifications show ongoing learning discipline and externally validated technical knowledge."
          />

          <div className="cert-grid">
            {certifications.map((certification, index) => (
              <motion.article
                key={`${certification.title}-${index}`}
                className="card cert-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="cert-meta">
                  <span className="muted-pill">Credential</span>
                  <span className="muted-pill">{certification.issued}</span>
                </div>

                <div>
                  <h3 className="timeline-title" style={{ fontSize: 18 }}>
                    {certification.title}
                  </h3>
                  <p className="timeline-kicker" style={{ marginBottom: 0 }}>
                    {certification.provider}
                  </p>
                </div>

                <a
                  href={certification.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button link-button-primary"
                  aria-label={`${getProofLabel(certification)} for ${certification.title}`}
                >
                  <FiArrowUpRight />
                  {getProofLabel(certification)}
                </a>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function getProofLabel(certification: Certification) {
  if (certification.type === "pdf") return "View Certificate";
  if (certification.type === "image") return "View Proof";
  return "Verify Credential";
}
