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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const selectedProjectDetail = selectedProject ? projectDetails[selectedProject.id] : null;

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
                <p className="project-detail-text">{selectedProjectDetail?.summary}</p>
                <p className="project-detail-heading">Challenge</p>
                <p className="project-detail-text">{selectedProjectDetail?.challenge}</p>

                <div className="project-detail-block">
                  <p className="project-detail-heading">What I delivered</p>
                  <ul className="project-detail-list">
                    {selectedProjectDetail?.delivery.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                {selectedProject.impact && <p className="project-impact">Impact: {selectedProject.impact}</p>}
                <p className="project-detail-outcome">{selectedProjectDetail?.outcome}</p>

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

              <div className="project-spotlight-side">
                <div className="project-spotlight-preview">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} detailed project preview`}
                    className="project-spotlight-image"
                  />
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
