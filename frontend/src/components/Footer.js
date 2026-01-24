import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
export default function Footer() {
    return (_jsx("footer", { style: styles.footer, children: _jsxs("div", { style: styles.container, children: [_jsxs("div", { style: styles.brand, children: [_jsx("span", { style: styles.name, children: "Nitesh N D" }), _jsx("span", { style: styles.role, children: "Software Engineer \u00B7 Full Stack Developer" }), _jsxs("span", { style: styles.copy, children: ["\u00A9 ", new Date().getFullYear(), " All rights reserved"] })] }), _jsxs("nav", { style: styles.links, children: [_jsxs("a", { href: "mailto:niteshdwaraka@gmail.com", style: styles.link, children: [_jsx(FiMail, { size: 15 }), _jsx("span", { children: "Email" })] }), _jsxs("a", { href: "https://github.com/Nitesh-N-D", target: "_blank", rel: "noopener noreferrer", style: styles.link, children: [_jsx(FiGithub, { size: 15 }), _jsx("span", { children: "GitHub" })] }), _jsxs("a", { href: "https://linkedin.com/in/nitesh-n-d-249ab6325", target: "_blank", rel: "noopener noreferrer", style: styles.link, children: [_jsx(FiLinkedin, { size: 15 }), _jsx("span", { children: "LinkedIn" })] })] })] }) }));
}
/* ==================== STYLES ==================== */
const styles = {
    footer: {
        background: "#020617",
        borderTop: "1px solid #1e293b",
        padding: "28px 10%", // ↓ reduced
        marginTop: "40px" // ↓ reduced
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px"
    },
    brand: {
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    },
    name: {
        fontSize: "14px",
        fontWeight: 600,
        color: "#e5e7eb"
    },
    role: {
        fontSize: "13px",
        color: "#94a3b8"
    },
    copy: {
        fontSize: "12px",
        color: "#64748b"
    },
    links: {
        display: "flex",
        gap: "20px"
    },
    link: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "13px",
        color: "#94a3b8",
        textDecoration: "none"
    }
};
