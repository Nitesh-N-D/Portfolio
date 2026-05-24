import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  {
    title: "Email",
    value: "niteshdwaraka@gmail.com",
    href: "mailto:niteshdwaraka@gmail.com",
    icon: <FiMail size={18} />
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/nitesh-n-d-249ab6325",
    href: "https://linkedin.com/in/nitesh-n-d-249ab6325",
    icon: <FiLinkedin size={18} />
  },
  {
    title: "GitHub",
    value: "github.com/Nitesh-N-D",
    href: "https://github.com/Nitesh-N-D",
    icon: <FiGithub size={18} />
  }
];

export default function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);

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
      )
      .finally(() => setSending(false));

    form.reset();
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="Contact"
            title="Let's Build Something Together"
          />

          <div className="relative grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.aside
              className="relative p-1"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span className="pointer-events-none absolute -bottom-10 -left-4 z-0 select-none font-display text-[8rem] italic leading-none text-amber-500 opacity-[0.04]">
                hello.
              </span>
              <div className="relative z-10">
                <span className="premium-pill mb-5">Reach me</span>
                <h3 className="max-w-xl text-3xl font-bold tracking-tight text-text-primary">
                  Let's talk about internships, projects, and engineering roles
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                  Email is the fastest route, while LinkedIn and GitHub give a clear view of my
                  work and background.
                </p>

                <div className="mt-8 grid gap-4">
                  {contactLinks.map(item => (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="flex items-center gap-4 border-b border-[var(--border-subtle)] py-4 text-left transition duration-300 hover:border-[var(--border-emphasis)] hover:text-amber-500"
                      data-cursor="hover"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--amber-ghost)] text-amber-500">
                        {item.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
                          {item.title}
                        </span>
                        <span className="mt-1.5 block break-all font-mono text-sm text-text-primary sm:text-base">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>

            <motion.div
              className="glass-card p-6 md:p-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            >
              <form className="grid gap-6" onSubmit={sendEmail}>
                <div className="field-wrap">
                  <input
                    id="contact-name"
                    className="field-input"
                    type="text"
                    name="name"
                    placeholder=" "
                    aria-required="true"
                    required
                  />
                  <label className="field-label" htmlFor="contact-name">
                    Your name
                  </label>
                </div>
                <div className="field-wrap">
                  <input
                    id="contact-email"
                    className="field-input"
                    type="email"
                    name="email"
                    placeholder=" "
                    aria-required="true"
                    required
                  />
                  <label className="field-label" htmlFor="contact-email">
                    Your email
                  </label>
                </div>
                <input type="hidden" name="time" />
                <div className="field-wrap">
                  <textarea
                    id="contact-message"
                    className="field-input min-h-[140px] resize-y"
                    name="message"
                    placeholder=" "
                    aria-required="true"
                    required
                  />
                  <label className="field-label" htmlFor="contact-message">
                    Tell me a bit about the opportunity
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className="primary-button w-full"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={sending}
                  data-cursor="hover"
                >
                  {sending ? "Sending..." : "Send Message"}
                  <FiSend />
                </motion.button>

                {status && (
                  <p className="border-l-2 border-amber-500 bg-bg-base/60 px-4 py-3 font-mono text-sm leading-7 text-text-secondary">
                    {status}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
