import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import resume from "../assets/resume/Nitesh_Resume.pdf";
export default function Resume() {
    return (_jsx(Reveal, { children: _jsx("section", { id: "resume", style: styles.section, children: _jsxs(motion.div, { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, viewport: { once: true }, style: styles.container, children: [_jsx("h2", { style: styles.heading, children: "Resume" }), _jsx("p", { style: styles.subtitle, children: "Download my resume to explore my academic background, technical skills, projects, and professional experience." }), _jsx("a", { href: resume, download: true, className: "btn", style: styles.button, children: "Download Resume" })] }) }) }));
}
/* ==================== STYLES ==================== */
const styles = {
    section: {
        padding: "120px 10%",
        background: "linear-gradient(180deg, #020617 0%, #020617 100%)",
        display: "flex",
        justifyContent: "center"
    },
    container: {
        background: "rgba(15, 23, 42, 0.7)",
        border: "1px solid #1e293b",
        borderRadius: "20px",
        padding: "60px 50px",
        maxWidth: "760px",
        textAlign: "center",
        backdropFilter: "blur(16px)"
    },
    heading: {
        fontSize: "30px",
        fontWeight: 600,
        color: "#38bdf8",
        marginBottom: "12px"
    },
    subtitle: {
        fontSize: "15px",
        color: "#94a3b8",
        lineHeight: 1.7,
        marginBottom: "36px"
    },
    button: {
        padding: "14px 36px",
        fontSize: "15px",
        fontWeight: 600
    }
};
