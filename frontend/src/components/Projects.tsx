import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiX } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { projects, type Project } from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="section">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Projects"
              title="Project spotlight and code signal"
              description="Click any project to open an interactive spotlight with product context, impact, stack, and implementation detail."
            />

            <div className="project-grid">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="card project-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                >
                  <button
                    type="button"
                    className="project-card-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="project-media">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="project-image"
                      />
                    </div>

                    <div className="project-content">
                      <div className="project-topline">
                        {project.featured ? (
                          <span className="project-badge">Featured project</span>
                        ) : (
                          <span className="muted-pill">Project highlight</span>
                        )}
                      </div>

                      <div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-role">Role: {project.role}</p>
                      </div>

                      <p className="project-description">{project.description}</p>
                      <p className="project-signal">{project.recruiterSignal}</p>

                      {project.impact && <p className="project-impact">Impact: {project.impact}</p>}

                      <span className="project-select">Open spotlight</span>
                    </div>
                  </button>
                </motion.article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal card"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={event => event.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal-close"
                aria-label="Close project spotlight"
                onClick={() => setSelectedProject(null)}
              >
                <FiX />
              </button>

              <div className="project-spotlight-copy">
                <span className="project-badge">Interactive project spotlight</span>
                <h3 className="project-spotlight-title">{selectedProject.title}</h3>
                <p className="project-role">Role: {selectedProject.role}</p>
                <p className="project-description">{selectedProject.description}</p>
                {selectedProject.impact && <p className="project-impact">Impact: {selectedProject.impact}</p>}

                <div className="project-stack" aria-label={`${selectedProject.title} technology stack`}>
                  {selectedProject.tech_stack.map(tech => (
                    <span key={`${selectedProject.id}-${tech}`} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                    aria-label={`Open GitHub repository for ${selectedProject.title}`}
                  >
                    <FiGithub />
                    GitHub
                  </a>

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button link-button-primary"
                      aria-label={`Open live demo for ${selectedProject.title}`}
                    >
                      <FiArrowUpRight />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="project-spotlight-code">
                <div className="project-code-header">
                  <span className="project-code-dot" />
                  <span className="project-code-dot" />
                  <span className="project-code-dot" />
                  <p>{selectedProject.codeLabel}</p>
                </div>
                <pre className="project-code-block">
                  <code>{selectedProject.spotlightCode}</code>
                </pre>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
