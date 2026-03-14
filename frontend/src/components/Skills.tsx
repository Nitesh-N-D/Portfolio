import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
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
    title: "Programming Languages",
    skills: [
      { name: "C", level: "Intermediate", icon: <SiC /> },
      { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
      { name: "Java", level: "Advanced", icon: <FaJava /> },
      { name: "Python", level: "Intermediate", icon: <FaPython /> },
      { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> }
    ]
  },
  {
    title: "Frontend and UI",
    skills: [
      { name: "React", level: "Intermediate", icon: <SiReact /> },
      { name: "HTML", level: "Advanced", icon: <SiHtml5 /> },
      { name: "CSS", level: "Intermediate", icon: <SiCss3 /> }
    ]
  },
  {
    title: "Backend and Data",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
      { name: "Express", level: "Intermediate", icon: <SiExpress /> },
      { name: "MySQL", level: "Intermediate", icon: <SiMysql /> },
      { name: "MongoDB", level: "Beginner", icon: <SiMongodb /> }
    ]
  },
  {
    title: "Collaboration and Delivery",
    skills: [
      { name: "Git", level: "Intermediate", icon: <SiGit /> },
      { name: "GitHub", level: "Intermediate", icon: <SiGithub /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section section-tight">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            label="Skills"
            title="Technology stack organized for quick recruiter scanning"
            description="The stack below reflects the tools I use most across product UI, backend development, database work, and collaborative shipping."
          />

          <div className="skills-layout">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="card skills-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="skills-card-header">
                  <h3 className="skills-card-title">{group.title}</h3>
                  <span className="muted-pill">{group.skills.length} tools</span>
                </div>

                <div className="skills-badges">
                  {group.skills.map(skill => (
                    <span key={`${group.title}-${skill.name}`} className="chip skill-badge">
                      {skill.icon}
                      {skill.name}
                      <span className="skill-level">{skill.level}</span>
                    </span>
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
