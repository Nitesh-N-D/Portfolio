import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

const sectionNumbers: Record<string, string> = {
  About: "02",
  Education: "03",
  Skills: "04",
  Projects: "05",
  Experience: "06",
  Certifications: "07",
  Achievements: "08",
  Contact: "09"
};

export default function SectionHeader({
  label,
  title,
  description
}: SectionHeaderProps) {
  const headingId = `${label.toLowerCase()}-heading`;

  return (
    <header className="section-header">
      <div className="section-kicker" aria-hidden="true">
        <span className="section-number">{sectionNumbers[label] ?? "01"}</span>
        <span className="section-rule" />
        <span className="section-label">{label}</span>
      </div>
      <motion.h2
        id={headingId}
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {title}
      </motion.h2>
      <p className="section-description">{description}</p>
    </header>
  );
}
