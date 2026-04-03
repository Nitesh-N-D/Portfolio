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
    title: "Languages",
    skills: [
      { name: "C", level: "Intermediate", icon: <SiC /> },
      { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
      { name: "Java", level: "Advanced", icon: <FaJava /> },
      { name: "Python", level: "Intermediate", icon: <FaPython /> },
      { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> }
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: "Intermediate", icon: <SiReact /> },
      { name: "HTML", level: "Advanced", icon: <SiHtml5 /> },
      { name: "CSS", level: "Intermediate", icon: <SiCss3 /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
      { name: "MongoDB", level: "Beginner", icon: <SiMongodb /> }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
      { name: "Express", level: "Intermediate", icon: <SiExpress /> },
      { name: "Git", level: "Intermediate", icon: <SiGit /> },
      { name: "GitHub", level: "Intermediate", icon: <SiGithub /> }
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
    <section id="skills" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="Skills"
            title="Categorized skills with stronger scanability and visual hierarchy"
            description="Languages, frameworks, tools, and databases are organized into clear cards so capability is easy to understand at a glance."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="glass-card p-6 md:p-7"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                      Category
                    </p>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
                      {group.title}
                    </h3>
                  </div>
                  <span className="premium-pill">{group.skills.length} skills</span>
                </div>

                <div className="grid gap-3">
                  {group.skills.map(skill => (
                    <div
                      key={`${group.title}-${skill.name}`}
                      className="rounded-[18px] border border-white/10 bg-slate-950/50 p-3.5 transition duration-300 hover:border-sky-300/20 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 text-slate-100">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-base text-blue-200">
                            {skill.icon}
                          </span>
                          <span className="text-sm font-semibold md:text-base">{skill.name}</span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                          {skill.level}
                        </span>
                      </div>

                      <div className="mt-4 h-2 rounded-full bg-white/5">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 ${levelWidths[skill.level]}`}
                        />
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
