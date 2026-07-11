import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent, PointerEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiX } from "react-icons/fi";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { projects, type Project, type ProjectDetail } from "../data/projects";

const featuredProjects = projects.filter(project => project.featured);
const standardProjects = projects.filter(project => !project.featured);

function getProjectDetail(project: Project): ProjectDetail {
  return {
    summary: project.detail?.summary ?? project.description,
    challenge:
      project.detail?.challenge ??
      "The main challenge was shaping the product into a reliable, useful, and easy-to-understand full-stack experience.",
    delivery:
      project.detail?.delivery ??
      [
        project.impact ?? project.recruiterSignal,
        `Built with ${project.tech_stack.join(", ")}.`,
        "Kept the experience focused on practical product value and clear user flows."
      ],
    outcome: project.detail?.outcome ?? project.recruiterSignal
  };
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const selectedProjectDetail = selectedProject ? getProjectDetail(selectedProject) : null;
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    const previousOverscrollBehavior = document.body.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "contain";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscrollBehavior;
    };
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    window.requestAnimationFrame(() => {
      modalContentRef.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  };

  const stopProjectLink = (event: MouseEvent<HTMLAnchorElement> | PointerEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  const openProjectFromKeyboard = (event: KeyboardEvent<HTMLElement>, project: Project) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(project);
    }
  };

  return (
    <>
      <section id="projects" aria-labelledby="projects-heading" className="premium-section">
        <div className="premium-container">
          <Reveal>
            <SectionHeader
              label="Projects"
              title="Projects"
            />

            <div className="grid gap-6">
              <div className="grid gap-6 xl:grid-cols-2">
                {featuredProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    className="glass-card group overflow-hidden border-t-2 border-t-amber-500"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.01 }}
                    role="button"
                    tabIndex={0}
                    data-cursor="hover"
                    onClick={() => openProject(project)}
                    onKeyDown={event => openProjectFromKeyboard(event, project)}
                  >
                    <div className="grid h-full w-full text-left">
                      <div className="project-image-wrap relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} project preview`}
                          width={960}
                          height={540}
                          loading="lazy"
                          decoding="async"
                          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-60 md:h-72"
                        />
                        <div className="absolute left-6 top-6 z-10">
                          <span className="premium-pill">
                            Featured
                          </span>
                        </div>
                      </div>

                      <div className="grid gap-4 p-4 sm:p-5 md:p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h3 className="text-[var(--fs-h2)] font-bold tracking-tight text-text-primary">
                              {project.title}
                            </h3>
                            <p className="mt-2 text-sm font-medium text-amber-500 md:text-base">{project.role}</p>
                          </div>
                          <span className="premium-pill">
                            // {String(project.id).padStart(3, "0")}
                          </span>
                        </div>

                        <p className="text-sm leading-7 text-text-secondary md:text-base">{project.description}</p>
                        <p className="text-sm leading-7 text-amber-500/90">{project.recruiterSignal}</p>
                        {project.impact && <p className="text-sm leading-7 text-text-primary md:text-base">{project.impact}</p>}

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
                              className="primary-button min-w-[10.5rem]"
                              onPointerDown={stopProjectLink}
                              onClick={stopProjectLink}
                            >
                              <FiArrowUpRight />
                              Live Demo
                            </a>
                          )}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="secondary-button min-w-[10.5rem]"
                            onPointerDown={stopProjectLink}
                            onClick={stopProjectLink}
                          >
                            <FiGithub />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
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
                      role="button"
                      tabIndex={0}
                      data-cursor="hover"
                      onClick={() => openProject(project)}
                      onKeyDown={event => openProjectFromKeyboard(event, project)}
                    >
                      <div className="grid h-full w-full text-left">
                        <div className="project-image-wrap relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={`${project.title} project preview`}
                            width={960}
                            height={540}
                            loading="lazy"
                            decoding="async"
                            className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-52"
                          />
                        </div>

                        <div className="grid h-full gap-4 p-4 sm:p-5">
                          <div>
                            <span className="premium-pill mb-4 text-xs uppercase tracking-[0.22em]">
                              // {String(project.id).padStart(3, "0")}
                            </span>
                            <h3 className="text-[var(--fs-h3)] font-bold tracking-tight text-text-primary">
                              {project.title}
                            </h3>
                            <p className="mt-2 text-xs font-medium text-amber-500 md:text-sm">{project.role}</p>
                          </div>

                          <p className="text-sm leading-7 text-text-secondary">{project.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {project.tech_stack.map(tech => (
                              <span
                                key={`${project.id}-${tech}`}
                                className="tech-badge"
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
                                className="secondary-button min-w-[10rem]"
                                onPointerDown={stopProjectLink}
                                onClick={stopProjectLink}
                              >
                                <FiArrowUpRight />
                                Live Demo
                              </a>
                            )}
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="secondary-button min-w-[10rem]"
                              onPointerDown={stopProjectLink}
                              onClick={stopProjectLink}
                            >
                              <FiGithub />
                              GitHub
                            </a>
                          </div>
                        </div>
                      </div>
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
            className="fixed inset-0 z-[1250] grid overflow-hidden bg-[var(--bg-overlay)] p-3 backdrop-blur-xl sm:place-items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card relative grid max-h-[calc(100svh-1.5rem)] w-full max-w-6xl gap-6 overflow-y-auto overscroll-contain p-4 sm:max-h-[90vh] sm:p-5 md:p-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]"
              ref={modalContentRef}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={event => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl sm:right-5 sm:top-5 sm:h-11 sm:w-11"
                aria-label="Close project spotlight"
                onClick={() => setSelectedProject(null)}
              >
                <FiX />
              </button>

              <div className="grid gap-5">
                <span className="premium-pill w-fit">
                  Interactive project spotlight
                </span>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-text-primary md:text-3xl">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-amber-500">{selectedProject.role}</p>
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
                      className="primary-button min-w-[10.5rem]"
                      onPointerDown={stopProjectLink}
                      onClick={stopProjectLink}
                    >
                      <FiArrowUpRight />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button min-w-[10.5rem]"
                    onPointerDown={stopProjectLink}
                    onClick={stopProjectLink}
                  >
                    <FiGithub />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="aspect-video overflow-hidden rounded-[22px] border border-white/10 bg-bg-elevated">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} detailed preview`}
                    width={1200}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    className="h-full max-h-[220px] w-full object-cover sm:max-h-[280px] md:max-h-[360px]"
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
                  <pre className="overflow-x-auto p-4 text-xs leading-6 text-blue-100 sm:p-6 sm:text-sm sm:leading-8">
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
