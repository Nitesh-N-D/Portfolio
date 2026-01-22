import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  image_url: string;
  github_url: string;
  live_url: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map(p => (
          <div className="card" key={p.id}>
            <img src={p.image_url} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <small>{p.tech_stack}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
