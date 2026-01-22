// import { useEffect, useState } from "react";

// interface Certification {
//   id: number;
//   title: string;
//   provider: string;
//   image_url: string;
//   issued_date: string;
// }

// export default function Certifications() {
//   const [data, setData] = useState<Certification[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/certifications")
//       .then(res => res.json())
//       .then(data => setData(data));
//   }, []);

//   return (
//     <section id="certifications">
//       <h2>Certifications</h2>

//       <div className="grid">
//         {data.map(cert => (
//           <div className="card" key={cert.id}>
//             <img src={cert.image_url} />
//             <h3>{cert.title}</h3>
//             <small>{cert.provider}</small>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

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
    fetch("https://nitesh-portfolio-backend.onrender.com/api/certifications")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <Reveal>
      <section id="certifications" style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.heading}>Certifications</h2>
          <p style={styles.subtitle}>
            Professional certifications and credentials earned through recognized platforms.
          </p>

          <div style={styles.grid}>
            {data.map(cert => (
              <motion.div
                key={cert.id}
                style={styles.card}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180 }}
              >
                {/* Certificate Image */}
                <div style={styles.imageWrapper}>
                  <img
                    src={cert.image_url}
                    alt={cert.title}
                    style={styles.image}
                  />
                </div>

                {/* Content */}
                <div style={styles.content}>
                  <h3 style={styles.title}>{cert.title}</h3>
                  <p style={styles.provider}>{cert.provider}</p>
                  <span style={styles.date}>Issued: {cert.issued_date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </Reveal>
  );
}

/* ==================== STYLES ==================== */

const styles = {
  section: {
    padding: "100px 10%",
    background: "#020617"
  },

  heading: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#38bdf8",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "48px",
    maxWidth: "650px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "36px"
  },

  card: {
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    overflow: "hidden",
    backdropFilter: "blur(14px)",
    transition: "all 0.3s ease"
  },

  imageWrapper: {
    width: "100%",
    height: "200px",
    overflow: "hidden",
    background: "#020617"
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const
  },

  content: {
    padding: "26px"
  },

  title: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#e5e7eb",
    marginBottom: "6px"
  },

  provider: {
    fontSize: "14px",
    color: "#38bdf8",
    marginBottom: "6px"
  },

  date: {
    fontSize: "12px",
    color: "#64748b"
  }
};
