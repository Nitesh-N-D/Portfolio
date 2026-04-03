import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { achievements, Achievement } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="Achievements"
            title="Recognitions and milestones with a cleaner presentation"
            description="Achievements now sit in a polished grid with stronger emphasis on standout milestones and easier proof access."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.article
                key={`${achievement.title}-${index}`}
                className="glass-card accent-card-soft group p-4 sm:p-5 md:p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-400/10 text-lg text-sky-100">
                    <FiStar />
                  </span>
                  <span
                    className={`premium-pill text-xs uppercase tracking-[0.2em] ${
                      achievement.featured
                        ? "border-blue-400/25 bg-blue-500/10 text-blue-100"
                        : ""
                    }`}
                  >
                    {achievement.featured ? "Featured" : "Achievement"}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  {achievement.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
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
