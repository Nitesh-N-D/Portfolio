interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  label,
  title,
  description
}: SectionHeaderProps) {
  return (
    <header className="section-header">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </header>
  );
}
