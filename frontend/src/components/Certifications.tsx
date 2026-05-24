import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward } from "react-icons/fi";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Certification, certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="Certifications"
            title="Certifications"
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification, index) => (
              <motion.article
                key={`${certification.title}-${index}`}
                className="glass-card accent-card-soft group p-4 sm:p-5 md:p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--amber-ghost)] text-[22px] text-amber-500">
                    <FiAward />
                  </span>
                  <span className="premium-pill text-xs uppercase tracking-[0.2em]">
                    {certification.issued}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                  {certification.title}
                </h3>
                <p className="mt-2 font-mono text-sm font-medium text-amber-500 md:text-base">{certification.provider}</p>
                <p className="mt-3 text-sm leading-7 text-text-secondary md:text-base">
                  Verified learning credential that strengthens my technical foundation and
                  continuous growth story.
                </p>

                <a
                  href={certification.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button mt-6 w-full"
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
