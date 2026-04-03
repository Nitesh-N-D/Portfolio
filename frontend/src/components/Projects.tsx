import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiX } from "react-icons/fi";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { projects, type Project } from "../data/projects";

const projectDetails: Record<
  number,
  {
    summary: string;
    challenge: string;
    delivery: string[];
    outcome: string;
  }
> = {
  1: {
    summary:
      "SkillShare was built as a peer learning product focused on helping students discover relevant courses, share expertise, and collaborate in a cleaner and more guided way.",
    challenge:
      "The main challenge was designing an experience that balanced course discovery, learner engagement, and platform simplicity without making the product feel cluttered.",
    delivery: [
      "Built the frontend and backend flow for course discovery, enrollment, and collaboration.",
      "Structured the product so users could move from browsing to learning with minimal friction.",
      "Focused on a clear application flow that supports practical product usage instead of a demo-only experience."
    ],
    outcome:
      "This project demonstrates end-to-end product ownership, practical feature delivery, and the ability to ship a user-facing platform with real adoption potential."
  },
  2: {
    summary:
      "Campus Air is a broader campus communication system designed to keep students informed through events, announcements, media, and real-time interactions inside a single platform.",
    challenge:
      "The project required coordinating multiple moving parts such as authentication, real-time communication, media handling, and admin-to-student publishing workflows.",
    delivery: [
      "Implemented the full-stack workflow across interface, backend APIs, and deployment.",
      "Integrated real-time updates so announcements and events could reach the right audience immediately.",
      "Used a modern stack to support scalable communication patterns and smoother campus operations."
    ],
    outcome:
      "This project is a strong signal for system thinking because it combines product design, backend coordination, and live communication in one cohesive application."
  },
  3: {
    summary:
      "The Lost and Found Management System was designed to solve a practical campus problem by making it easier to report, search, and recover items with clear data handling.",
    challenge:
      "The core challenge was turning a simple CRUD problem into a trustworthy workflow where users could quickly understand item status and recovery progress.",
    delivery: [
      "Built the reporting and recovery flow with structured item records and image support.",
      "Connected the frontend experience with backend storage so item updates stayed organized and easy to follow.",
      "Kept the interface focused on clarity, which is critical for utility-driven applications."
    ],
    outcome:
      "This project shows practical engineering judgment, useful UX decisions, and the ability to build software that solves a direct real-world need."
  }
};

const featuredProjects = projects.filter(project => project.featured);
const standardProjects = projects.filter(project => !project.featured);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const selectedProjectDetail = selectedProject ? projectDetails[selectedProject.id] : null;

  return (
    <>
      <section id="projects" className="premium-section">
        <div className="premium-container">
          <Reveal>
            <SectionHeader
              label="Projects"
              title="Featured projects with stronger visuals, hierarchy, and interaction"
              description="Top work is surfaced as featured cards while every project still keeps the same data and core links intact."
            />

            <div className="grid gap-6">
              <div className="grid gap-6 xl:grid-cols-2">
                {featuredProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    className="glass-card group overflow-hidden"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.01 }}
                  >
                    <button
                      type="button"
                      className="grid h-full w-full text-left"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="project-image-wrap relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} project preview`}
                          className="h-60 w-full object-cover transition duration-500 group-hover:scale-[1.03] md:h-72"
                        />
                        <div className="absolute left-6 top-6 z-10">
                          <span className="premium-pill border-blue-400/30 bg-blue-500/15 text-blue-50">
                            Featured Project
                          </span>
                        </div>
                      </div>

                      <div className="grid gap-4 p-5 md:p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                              {project.title}
                            </h3>
                            <p className="mt-2 text-sm font-medium text-blue-200 md:text-base">{project.role}</p>
                          </div>
                          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                            Spotlight
                          </span>
                        </div>

                        <p className="text-sm leading-7 text-slate-400 md:text-base">{project.description}</p>
                        <p className="text-sm leading-7 text-blue-200/90">{project.recruiterSignal}</p>
                        {project.impact && <p className="text-sm leading-7 text-slate-300 md:text-base">{project.impact}</p>}

                        <div className="flex flex-wrap gap-3">
                          {project.tech_stack.map(tech => (
                            <span key={`${project.id}-${tech}`} className="premium-pill">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-2 flex flex-wrap gap-3">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="primary-button"
                              onClick={event => event.stopPropagation()}
                            >
                              <FiArrowUpRight />
                              Live Demo
                            </a>
                          )}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="secondary-button"
                            onClick={event => event.stopPropagation()}
                          >
                            <FiGithub />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </button>
                  </motion.article>
                ))}
              </div>

              {standardProjects.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {standardProjects.map((project, index) => (
                    <motion.article
                      key={project.id}
                  className="glass-card group overflow-hidden"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                      whileHover={{ y: -8 }}
                    >
                      <button
                        type="button"
                        className="grid h-full w-full text-left"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="project-image-wrap relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={`${project.title} project preview`}
                            className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        </div>

                        <div className="grid h-full gap-4 p-5">
                          <div>
                            <span className="premium-pill mb-4 text-xs uppercase tracking-[0.22em] text-slate-200">
                              Project
                            </span>
                            <h3 className="text-xl font-bold tracking-tight text-white">
                              {project.title}
                            </h3>
                            <p className="mt-2 text-xs font-medium text-blue-200 md:text-sm">{project.role}</p>
                          </div>

                          <p className="text-sm leading-7 text-slate-400">{project.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {project.tech_stack.map(tech => (
                              <span
                                key={`${project.id}-${tech}`}
                                className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="mt-auto flex flex-wrap gap-3 pt-2">
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="secondary-button"
                                onClick={event => event.stopPropagation()}
                              >
                                <FiArrowUpRight />
                                Live Demo
                              </a>
                            )}
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="secondary-button"
                              onClick={event => event.stopPropagation()}
                            >
                              <FiGithub />
                              GitHub
                            </a>
                          </div>
                        </div>
                      </button>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[1250] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card relative grid max-h-[90vh] w-full max-w-6xl gap-6 overflow-auto p-5 md:p-6 xl:grid-cols-[1.1fr_0.9fr]"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={event => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl"
                aria-label="Close project spotlight"
                onClick={() => setSelectedProject(null)}
              >
                <FiX />
              </button>

                <div className="grid gap-5">
                <span className="premium-pill w-fit border-blue-400/25 bg-blue-500/10 text-blue-100">
                  Interactive project spotlight
                </span>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-blue-200">{selectedProject.role}</p>
                </div>

                <p className="text-base leading-8 text-slate-300">{selectedProject.description}</p>
                <p className="text-sm leading-7 text-slate-400 md:text-base">{selectedProjectDetail?.summary}</p>

                <div className="rounded-[22px] border border-white/10 bg-slate-950/55 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
                    Challenge
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                    {selectedProjectDetail?.challenge}
                  </p>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-slate-950/55 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
                    What I delivered
                  </p>
                  <ul className="mt-3 grid gap-3 pl-5 text-sm leading-7 text-slate-400 md:text-base">
                    {selectedProjectDetail?.delivery.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                {selectedProject.impact && (
                  <p className="text-base leading-8 text-slate-300">{selectedProject.impact}</p>
                )}
                <p className="text-sm leading-7 text-slate-300 md:text-base">{selectedProjectDetail?.outcome}</p>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech_stack.map(tech => (
                    <span key={`${selectedProject.id}-${tech}`} className="premium-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-button"
                    >
                      <FiArrowUpRight />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="overflow-hidden rounded-[22px] border border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} detailed preview`}
                    className="h-full max-h-[360px] w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/70">
                  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <p className="ml-3 text-sm tracking-[0.18em] text-slate-400">
                      {selectedProject.codeLabel}
                    </p>
                  </div>
                  <pre className="overflow-x-auto p-6 text-sm leading-8 text-blue-100">
                    <code>{selectedProject.spotlightCode}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
