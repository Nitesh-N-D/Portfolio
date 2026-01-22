import { useEffect, useState } from "react";

interface Certification {
  id: number;
  title: string;
  provider: string;
  image_url: string;
  issued_date: string;
}

export default function Certifications() {
  const [data, setData] = useState<Certification[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/certifications")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <section id="certifications">
      <h2>Certifications</h2>

      <div className="grid">
        {data.map(cert => (
          <div className="card" key={cert.id}>
            <img src={cert.image_url} />
            <h3>{cert.title}</h3>
            <small>{cert.provider}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
