import resume from "../assets/resume/Nitesh_Resume.pdf";

export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a className="btn" href={resume} download>Download Resume</a>
    </section>
  );
}
