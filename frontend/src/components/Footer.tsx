import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const links = [
  {
    label: "Email",
    href: "mailto:niteshdwaraka@gmail.com",
    icon: <FiMail size={18} />
  },
  {
    label: "GitHub",
    href: "https://github.com/Nitesh-N-D",
    icon: <FiGithub size={18} />
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/niteshdwaraka",
    icon: <SiHackerrank size={18} />
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Nitesh_N_D/",
    icon: <SiLeetcode size={18} />
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nitesh-n-d-249ab6325",
    icon: <FiLinkedin size={18} />
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-bg-surface px-[var(--section-px)] py-6">
      <div className="premium-container flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
        <p className="font-mono text-[0.75rem] text-text-muted">
          Copyright {new Date().getFullYear()} Nitesh N D. All rights reserved.
        </p>

        <nav className="flex flex-wrap justify-center gap-4" aria-label="Footer links">
          {links.map(link => (
            <a
              key={link.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-text-muted transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--amber-ghost)] hover:text-amber-500 hover:shadow-[var(--shadow-amber-sm)]"
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={`Open ${link.label}`}
              data-cursor="hover"
            >
              {link.icon}
            </a>
          ))}
        </nav>

        <p className="font-mono text-[0.75rem] text-text-muted">
          Designed & Built with love by N.D. Nitesh
        </p>
      </div>
    </footer>
  );
}
