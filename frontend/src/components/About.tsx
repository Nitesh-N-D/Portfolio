import { motion } from "framer-motion";
import { FiBookOpen, FiHeart, FiMapPin } from "react-icons/fi";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { profile } from "../data/profile";

const quickCards = [
  {
    title: "Location",
    value: "Chennai, Tamil Nadu",
    description: "Based in Chennai and open to internship and software opportunities.",
    icon: <FiMapPin />
  },
  {
    title: "Education",
    value: "B.E. Computer Science",
    description: "Madras Institute of Technology with strong full-stack project momentum.",
    icon: <FiBookOpen />
  },
  {
    title: "Interests",
    value: "UI, Systems, Product Thinking",
    description: "I enjoy building dependable products with strong visual clarity.",
    icon: <FiHeart />
  }
];

export default function About() {
  return (
    <section id="about" className="premium-section">
      <div className="premium-container">
        <Reveal>
          <SectionHeader
            label="About"
            title="Centered presentation with more depth and stronger first impressions"
            description={`${profile.title} focused on scalable applications, refined user interfaces, and dependable engineering execution across frontend and backend systems.`}
          />

          <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.article
              className="glass-card p-6 text-center md:p-8 lg:p-9 lg:text-left"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="premium-pill mb-6 border-white/10 text-slate-200">
                About me
              </span>

              <div className="grid gap-5 text-base leading-8 text-slate-300 md:text-lg">
                <p className="m-0">
                  I am a <span className="font-semibold text-white">Computer Science Engineering student</span> who enjoys turning ideas into polished,
                  production-minded software. My work combines <span className="font-semibold text-white">clear UI thinking</span>,
                  maintainable engineering, and practical product decisions.
                </p>
                <p className="m-0">
                  I care about interfaces that feel intentional, backend systems that stay reliable,
                  and projects that communicate value clearly to teammates and users.
                </p>
                <p className="m-0">
                  This portfolio is designed to show <span className="font-semibold text-white">what I build</span>, how I think about
                  product execution, and how I can contribute to modern engineering teams.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {profile.highlights.map(highlight => (
                  <span key={highlight} className="premium-pill">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.article>

            <div className="grid gap-5">
              {quickCards.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="glass-card-soft rounded-[22px] p-5 text-center md:p-6 lg:text-left"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 * index, ease: "easeOut" }}
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-lg text-blue-200">
                    {item.icon}
                  </div>
                  <p className="m-0 text-sm uppercase tracking-[0.24em] text-slate-500">
                    {item.title}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">{item.value}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400 md:text-base">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            className="glass-card mt-6 overflow-hidden p-3 md:p-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
          >
            <div className="mb-3 flex flex-col items-center justify-between gap-3 px-2 text-center md:flex-row md:text-left">
              <div>
                <p className="m-0 text-sm uppercase tracking-[0.24em] text-slate-500">Map Preview</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">
                  Chennai, Tamil Nadu
                </h3>
              </div>
              <span className="premium-pill">Available for remote and onsite opportunities</span>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Chennai,TamilNadu&output=embed"
                title="Chennai map preview"
                className="h-[260px] w-full border-0 md:h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
