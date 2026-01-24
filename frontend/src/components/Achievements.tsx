// import { motion } from "framer-motion";
// import { achievements } from "../data/achievements";

// export default function Achievements() {
//   return (
//     <section id="achievements" style={styles.section}>
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         <h2 style={styles.heading}>Achievements</h2>
//         <p style={styles.subheading}>
//           Recognition, certifications, and milestones achieved during my academic and professional journey.
//         </p>

//         <div style={styles.grid}>
//           {achievements.map((a, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -6, scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               style={styles.card}
//             >
//               <h3 style={styles.title}>{a.title}</h3>
//               <p style={styles.description}>{a.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* ==================== STYLES ==================== */

// const styles = {
//   section: {
//     padding: "100px 10%",
//     background: "radial-gradient(circle at top, #020617 0%, #020617 60%)"
//   },

//   heading: {
//     fontSize: "28px",
//     fontWeight: 600,
//     color: "#38bdf8",
//     marginBottom: "8px"
//   },

//   subheading: {
//     fontSize: "14px",
//     color: "#94a3b8",
//     marginBottom: "50px",
//     maxWidth: "600px"
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "28px"
//   },

//   card: {
//     background: "rgba(15, 23, 42, 0.6)",
//     border: "1px solid #1e293b",
//     borderRadius: "14px",
//     padding: "26px",
//     backdropFilter: "blur(12px)",
//     transition: "all 0.3s ease"
//   },

//   title: {
//     fontSize: "16px",
//     fontWeight: 600,
//     color: "#e5e7eb",
//     marginBottom: "10px"
//   },

//   description: {
//     fontSize: "14px",
//     color: "#94a3b8",
//     lineHeight: 1.7
//   }
// };
import { motion } from "framer-motion";
import { achievements } from "../data/achievements";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <Reveal>
      <section id="achievements" style={styles.section}>
        <h2 style={styles.heading}>Achievements</h2>
        <p style={styles.subtitle}>
          Academic and professional milestones.
        </p>

        <div style={styles.grid}>
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              style={styles.card}
              whileHover={{ y: -6 }}
            >
              <h3 style={styles.title}>{a.title}</h3>
              <p style={styles.description}>{a.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

const styles = {
  section: {
    padding: "90px 10%",
    background: "#020617"
  },
  heading: {
    fontSize: "26px",
    fontWeight: 600,
    color: "#38bdf8"
  },
  subtitle: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "40px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px"
  },
  card: {
    background: "rgba(15,23,42,0.6)",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "22px"
  },
  title: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#e5e7eb"
  },
  description: {
    fontSize: "14px",
    color: "#94a3b8",
    marginTop: "8px"
  }
};
