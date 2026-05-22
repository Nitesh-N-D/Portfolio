import { motion } from "framer-motion";
import { FaJava, FaPython } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact
} from "react-icons/si";
import type { JSX } from "react";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

interface Skill {
  name: string;
  level: SkillLevel;
  icon: JSX.Element;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Intermediate", icon: <SiReact /> },
      { name: "HTML", level: "Advanced", icon: <SiHtml5 /> },
      { name: "CSS", level: "Intermediate", icon: <SiCss3 /> },
      { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
      { name: "Express", level: "Intermediate", icon: <SiExpress /> }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
      { name: "MongoDB", level: "Beginner", icon: <SiMongodb /> }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: "Intermediate", icon: <SiGit /> },
      { name: "GitHub", level: "Intermediate", icon: <SiGithub /> }
    ]
  },
  {
    title: "Languages",
    skills: [
      { name: "C", level: "Intermediate", icon: <SiC /> },
      { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
      { name: "Java", level: "Advanced", icon: <FaJava /> },
      { name: "Python", level: "Intermediate", icon: <FaPython /> }
    ]
  }
];

const levelWidths: Record<SkillLevel, string> = {
  Beginner: "w-[45%]",
  Intermediate: "w-[72%]",
  Advanced: "w-[92%]"
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="Skills"
            title="Categorized skills with stronger scanability and visual hierarchy"
            description="Languages, frameworks, tools, and databases are organized into clear cards so capability is easy to understand at a glance."
          />

          <div className="grid gap-10 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="glass-card p-5 sm:p-6 md:p-7"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-5 flex items-center justify-between gap-3 sm:gap-4">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-amber-500">
                      • Category
                    </p>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-text-primary sm:text-xl md:text-2xl">
                      {group.title}
                    </h3>
                  </div>
                  <span className="premium-pill">{group.skills.length} skills</span>
                </div>

                <div className="grid gap-3">
                  {group.skills.map(skill => (
                    <div
                      key={`${group.title}-${skill.name}`}
                      className="rounded-[var(--r-sm)] border border-[var(--border-subtle)] bg-bg-card p-3 transition duration-300 hover:-translate-y-1 hover:border-[var(--border-emphasis)] hover:bg-[var(--amber-ghost)] hover:shadow-[var(--shadow-amber-sm)] sm:p-3.5"
                    >
                      <div className="flex items-center justify-between gap-2 sm:gap-3">
                        <div className="flex min-w-0 items-center gap-3 text-text-primary">
                          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--r-sm)] border border-[var(--border-subtle)] bg-[var(--amber-ghost)] text-sm text-amber-500 sm:h-10 sm:w-10 sm:text-base">
                            {skill.icon}
                          </span>
                          <span className="truncate text-sm font-semibold md:text-base">{skill.name}</span>
                        </div>
                        <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted sm:text-xs sm:tracking-[0.2em]">
                          {skill.level}
                        </span>
                      </div>

                      <div className="mt-3.5 h-2 rounded-full bg-white/5 sm:mt-4">
                        <div className={`h-full rounded-full bg-grad-amber ${levelWidths[skill.level]}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
