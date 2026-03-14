import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <p className="footer-title">Nitesh N D</p>
          <p className="footer-subtitle">Software Engineer | Full Stack Developer</p>
          <p className="footer-copy">
            Built to communicate credibility, craft, and real project experience.
          </p>
          <p className="footer-copy">
            Copyright {new Date().getFullYear()} Nitesh N D. All rights reserved.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          <a className="footer-link" href="mailto:niteshdwaraka@gmail.com" aria-label="Send email">
            <FiMail size={16} />
            Email
          </a>
          <a
            className="footer-link"
            href="https://github.com/Nitesh-N-D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <FiGithub size={16} />
            GitHub
          </a>
          <a
            className="footer-link"
            href="https://www.hackerrank.com/profile/niteshdwaraka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit HackerRank profile"
          >
            <SiHackerrank size={16} />
            HackerRank
          </a>
          <a
            className="footer-link"
            href="https://leetcode.com/u/Nitesh_N_D/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LeetCode profile"
          >
            <SiLeetcode size={16} />
            LeetCode
          </a>
          <a
            className="footer-link"
            href="https://linkedin.com/in/nitesh-n-d-249ab6325"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            <FiLinkedin size={16} />
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
