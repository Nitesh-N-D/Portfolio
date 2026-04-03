import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const links = [
  {
    label: "Email",
    href: "mailto:niteshdwaraka@gmail.com",
    icon: <FiMail size={16} />
  },
  {
    label: "GitHub",
    href: "https://github.com/Nitesh-N-D",
    icon: <FiGithub size={16} />
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/niteshdwaraka",
    icon: <SiHackerrank size={16} />
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Nitesh_N_D/",
    icon: <SiLeetcode size={16} />
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nitesh-n-d-249ab6325",
    icon: <FiLinkedin size={16} />
  }
];

export default function Footer() {
  return (
    <footer className="px-4 pb-5 pt-1 md:px-6">
      <div className="premium-container">
        <div className="glass-card accent-card-soft flex flex-col items-center justify-between gap-3 px-4 py-3 text-center md:px-5 md:py-4 lg:flex-row lg:text-left">
          <div>
            <h3 className="text-base font-bold tracking-tight text-white">Nitesh N D</h3>
            <p className="mt-1 text-xs text-slate-400 md:text-sm">
              Software Engineer | Full Stack Developer
            </p>
            <p className="mt-2 text-xs leading-6 text-slate-500">
              Copyright {new Date().getFullYear()} Nitesh N D. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-2 sm:gap-2.5" aria-label="Footer links">
            {links.map(link => (
              <a
                key={link.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/20 hover:bg-white/[0.07] hover:text-white md:text-sm"
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={`Open ${link.label}`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
