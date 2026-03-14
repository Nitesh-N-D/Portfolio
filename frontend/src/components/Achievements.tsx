import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { achievements, Achievement } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="section section-tight">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            label="Achievements"
            title="Proof of initiative beyond coursework"
            description="A collection of recognitions and learning milestones that help round out the story of how I grow, compete, and stay current."
          />

          <div className="achievement-grid">
            {achievements.map((achievement, index) => (
              <motion.article
                key={`${achievement.title}-${index}`}
                className="card achievement-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.04, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="achievement-meta">
                  <span className={`muted-pill${achievement.featured ? " featured-pill" : ""}`}>
                    {achievement.featured ? "Featured highlight" : "Achievement"}
                  </span>
                </div>

                <div>
                  <h3 className="timeline-title" style={{ fontSize: 18 }}>
                    {achievement.title}
                  </h3>
                  <p className="timeline-text" style={{ marginTop: 12 }}>
                    {achievement.description}
                  </p>
                </div>

                <a
                  href={achievement.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                  aria-label={`${getProofLabel(achievement)} for ${achievement.title}`}
                >
                  <FiArrowUpRight />
                  {getProofLabel(achievement)}
                </a>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function getProofLabel(achievement: Achievement) {
  if (achievement.type === "pdf") return "View Certificate";
  if (achievement.type === "image") return "View Proof";
  return "View Details";
}
