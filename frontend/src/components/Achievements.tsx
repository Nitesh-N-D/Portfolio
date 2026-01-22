import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <section>
      <h2>Achievements</h2>

      {achievements.map((a, i) => (
        <div key={i} className="card">
          <h3>{a.title}</h3>
          <p>{a.description}</p>
        </div>
      ))}
    </section>
  );
}
