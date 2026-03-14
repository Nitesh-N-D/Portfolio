import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const timeInput = form.querySelector('input[name="time"]') as HTMLInputElement;
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => setStatus("Thank you for your message. I will get back to you soon."),
        () => setStatus("Failed to send message. Please try again later.")
      );

    form.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            label="Contact"
            title="Clear paths for recruiters and collaborators to reach out"
            description="If you are hiring, evaluating internship candidates, or looking for a developer to build thoughtful product experiences, I would be glad to connect."
          />

          <div className="contact-grid">
            <motion.aside
              className="card contact-panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, ease: "easeOut" }}
            >
              <div>
                <h3 className="contact-copy-title">Best way to reach me</h3>
                <p className="contact-copy-body" style={{ marginTop: 12 }}>
                  Email is the fastest option, but GitHub and LinkedIn are also good ways to
                  review my work and background before reaching out.
                </p>
              </div>

              <div className="contact-methods">
                <a href="mailto:niteshdwaraka@gmail.com" className="card contact-method" aria-label="Send an email">
                  <span className="contact-method-icon">
                    <FiMail size={20} />
                  </span>
                  <div>
                    <h4>Email</h4>
                    <p>niteshdwaraka@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Nitesh-N-D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card contact-method"
                  aria-label="Visit GitHub profile"
                >
                  <span className="contact-method-icon">
                    <FiGithub size={20} />
                  </span>
                  <div>
                    <h4>GitHub</h4>
                    <p>github.com/Nitesh-N-D</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/nitesh-n-d-249ab6325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card contact-method"
                  aria-label="Visit LinkedIn profile"
                >
                  <span className="contact-method-icon">
                    <FiLinkedin size={20} />
                  </span>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/nitesh-n-d-249ab6325</p>
                  </div>
                </a>
              </div>
            </motion.aside>

            <motion.div
              className="card contact-panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: 0.08, ease: "easeOut" }}
            >
              <h3 className="contact-form-title">Send a message</h3>

              <form className="contact-form" onSubmit={sendEmail}>
                <input
                  className="form-field"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  aria-label="Your name"
                  required
                />
                <input
                  className="form-field"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  aria-label="Your email"
                  required
                />
                <input type="hidden" name="time" />
                <textarea
                  className="form-field"
                  name="message"
                  placeholder="Tell me a bit about the opportunity"
                  aria-label="Your message"
                  required
                />

                <button type="submit" className="btn">
                  Send Message
                  <FiSend />
                </button>

                {status && <p className="contact-status">{status}</p>}
              </form>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
