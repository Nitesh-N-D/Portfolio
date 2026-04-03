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
    <section id="contact" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="Contact"
            title="Contact section with a cleaner layout for all screen sizes"
            description="Your details and form stay easy to reach while the layout feels lighter, sharper, and more balanced on mobile and desktop."
          />

          <div className="grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.aside
              className="glass-card p-5 text-center sm:p-6 md:p-7 lg:text-left"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span className="premium-pill mb-5">Reach me</span>
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                Let's talk about internships, projects, and engineering roles
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Email is the fastest route, while LinkedIn and GitHub give a clear view of my
                work and background.
              </p>

              <div className="mt-6 grid gap-3">
                {contactLinks.map(item => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="glass-card-soft flex items-center gap-3 rounded-[20px] p-3.5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/20 hover:bg-white/[0.06] sm:p-4"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-400/10 text-sky-100">
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="m-0 text-xs uppercase tracking-[0.22em] text-slate-500">
                        {item.title}
                      </p>
                      <p className="mt-1.5 break-all text-sm font-medium text-slate-200 sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.aside>

            <motion.div
              className="glass-card p-5 text-center sm:p-6 md:p-7 lg:text-left"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            >
              <div className="mb-6">
                <span className="premium-pill mb-4">Message</span>
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                  Send a message
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  Share the role, team, or project context and I'll respond with interest and
                  availability.
                </p>
              </div>

              <form className="grid gap-4" onSubmit={sendEmail}>
                <input
                  className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-300/20 focus:bg-white/[0.06] sm:text-base"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  aria-label="Your name"
                  required
                />
                <input
                  className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-300/20 focus:bg-white/[0.06] sm:text-base"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  aria-label="Your email"
                  required
                />
                <input type="hidden" name="time" />
                <textarea
                  className="min-h-[160px] rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-300/20 focus:bg-white/[0.06] sm:min-h-[170px] sm:text-base md:min-h-[190px]"
                  name="message"
                  placeholder="Tell me a bit about the opportunity"
                  aria-label="Your message"
                  required
                />

                <motion.button
                  type="submit"
                  className="primary-button w-full"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <FiSend />
                </motion.button>

                {status && <p className="text-sm leading-7 text-slate-300 sm:text-base">{status}</p>}
              </form>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
