import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { education } from "../data/education";
export default function Education() {
    return (_jsx("section", { id: "education", style: styles.section, children: _jsx(Reveal, { children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.45, ease: "easeOut" }, viewport: { once: true }, style: styles.container, children: [_jsx("h2", { style: styles.heading, children: "Education" }), _jsx("div", { style: styles.timeline, children: education.map((edu, index) => (_jsxs(motion.div, { style: styles.item, whileHover: { x: 6 }, transition: { type: "spring", stiffness: 140 }, children: [_jsx("span", { style: styles.dot }), _jsxs("div", { style: styles.card, children: [_jsxs("div", { style: styles.header, children: [_jsx("h3", { style: styles.degree, children: edu.degree }), edu.cgpa && (_jsxs("span", { style: styles.cgpa, children: ["CGPA: ", edu.cgpa] }))] }), _jsx("p", { style: styles.institution, children: edu.institution }), _jsxs("p", { style: styles.meta, children: [edu.duration, edu.location && ` • ${edu.location}`] }), edu.details && (_jsx("ul", { style: styles.details, children: edu.details.map((point, i) => (_jsx("li", { children: point }, i))) }))] })] }, index))) })] }) }) }));
}
/* ===================== STYLES ===================== */
const styles = {
    section: {
        padding: "90px 10%",
        background: "#020617"
    },
    container: {
        maxWidth: "900px"
    },
    heading: {
        fontSize: "26px",
        fontWeight: 600,
        color: "#38bdf8",
        marginBottom: "40px"
    },
    timeline: {
        position: "relative",
        borderLeft: "2px solid #1e293b",
        paddingLeft: "32px"
    },
    item: {
        position: "relative",
        marginBottom: "36px"
    },
    dot: {
        position: "absolute",
        left: "-41px",
        top: "16px",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        background: "#38bdf8"
    },
    card: {
        background: "rgba(15, 23, 42, 0.6)",
        border: "1px solid #1e293b",
        borderRadius: "14px",
        padding: "22px 24px"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px"
    },
    degree: {
        fontSize: "16px",
        fontWeight: 600,
        color: "#e5e7eb"
    },
    cgpa: {
        fontSize: "13px",
        color: "#22c55e",
        fontWeight: 500
    },
    institution: {
        fontSize: "14px",
        color: "#38bdf8",
        marginTop: "4px"
    },
    meta: {
        fontSize: "13px",
        color: "#94a3b8",
        margin: "6px 0 10px"
    },
    details: {
        paddingLeft: "18px",
        fontSize: "14px",
        color: "#cbd5f5",
        lineHeight: 1.6
    }
};
