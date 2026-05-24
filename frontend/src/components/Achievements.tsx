import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { achievements, Achievement } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="Achievements"
            title="Achievements"
          />

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <motion.article
                key={`${achievement.title}-${index}`}
                className={`glass-card accent-card-soft group border-l-4 border-l-amber-500 p-4 sm:p-5 md:p-6 ${
                  achievement.featured ? "md:col-span-2 bg-[var(--amber-ghost)]" : ""
                }`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--amber-ghost)] text-[26px] text-amber-500">
                    <FiStar />
                  </span>
                  <span
                    className={`premium-pill text-xs uppercase tracking-[0.2em] ${
                      achievement.featured
                        ? "border-[var(--border-emphasis)] text-amber-500"
                        : ""
                    }`}
                  >
                    {achievement.featured ? "Featured" : "Achievement"}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                  {achievement.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary md:text-base">
                  {achievement.description}
                </p>

                <a
                  href={achievement.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button mt-6 w-full"
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
