import { motion } from "framer-motion";
import Reveal from "./Reveal";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const timeInput = form.querySelector('input[name="time"]') as HTMLInputElement;
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
    ).then(
      () => {
        setStatus("Thank you for your message. I will get back to you soon.");
      },
      () => {
        setStatus("Failed to send message. Please try again later.");
      }
    );

    form.reset();
  };

  return (
    <Reveal>
      <section id="contact" style={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={styles.container}
        >
          <h2 style={styles.heading}>Get In Touch</h2>
          <p style={styles.subtitle}>
            Interested in working together or hiring me for an internship or role?
            Send me a message and I’ll get back to you.
          </p>

          {/* Social Links */}
          <div style={styles.socials}>
            <a href="mailto:niteshdwaraka@gmail.com" style={styles.socialCard}>
              Email
            </a>
            <a href="https://github.com/Nitesh-N-D" target="_blank" style={styles.socialCard}>
              GitHub
            </a>
            <a href="https://linkedin.com/in/nitesh-n-d-249ab6325" target="_blank" style={styles.socialCard}>
              LinkedIn
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={sendEmail} style={styles.form}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="hidden" name="time" />
            <textarea name="message" placeholder="Your Message" required />

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>

          {status && <p style={styles.status}>{status}</p>}
        </motion.div>
      </section>
    </Reveal>
  );
}

/* ==================== STYLES ==================== */

const styles = {
  section: {
    padding: "120px 10%",
    background: "#020617",
    display: "flex",
    justifyContent: "center"
  },

  container: {
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "20px",
    padding: "60px 50px",
    maxWidth: "900px",
    width: "100%",
    backdropFilter: "blur(16px)"
  },

  heading: {
    fontSize: "30px",
    fontWeight: 600,
    color: "#38bdf8",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "15px",
    color: "#94a3b8",
    lineHeight: 1.7,
    marginBottom: "36px",
    maxWidth: "640px"
  },

  socials: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "22px",
    marginBottom: "42px"
  },

  socialCard: {
    background: "rgba(2, 6, 23, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "20px",
    textAlign: "center" as const,
    fontSize: "14px",
    color: "#e5e7eb",
    transition: "0.3s",
  },

  form: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px",
    maxWidth: "520px"
  },

  status: {
    marginTop: "18px",
    fontSize: "14px",
    color: "#38bdf8"
  }
};
