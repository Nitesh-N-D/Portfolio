import { useEffect, useState } from "react";

interface Experience {
  id: number;
  role: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string;
}

export default function Experience() {
  const [data, setData] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/experience")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <section id="experience">
      <h2>Experience</h2>

      {data.map(exp => (
        <div className="card" key={exp.id}>
          <h3>{exp.role}</h3>
          <p><b>{exp.company}</b></p>
          <p>{exp.description}</p>
          <small>{exp.start_date} – {exp.end_date}</small>
        </div>
      ))}
    </section>
  );
}
