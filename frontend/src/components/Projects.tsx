import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            label="Projects"
            title="Things I have built recently"
            description="A spotlight selection of full-stack projects that highlight product thinking, execution quality, and real-world engineering outcomes."
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

                  {project.impact && <p className="project-impact">Impact: {project.impact}</p>}

                  <div className="project-stack" aria-label={`${project.title} technology stack`}>
                    {project.tech_stack.map(tech => (
                      <span key={`${project.id}-${tech}`} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                      aria-label={`Open GitHub repository for ${project.title}`}
                    >
                      <FiGithub />
                      GitHub
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-button link-button-primary"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        <FiArrowUpRight />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
