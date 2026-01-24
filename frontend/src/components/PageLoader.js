import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export default function PageLoader() {
    return (_jsxs(motion.div, { initial: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.6, ease: "easeOut" }, style: styles.loader, children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { repeat: Infinity, duration: 1.2, ease: "linear" }, style: styles.spinner }), _jsx("p", { style: styles.text, children: "Loading portfolio\u2026" })] }));
}
const styles = {
    loader: {
        position: "fixed",
        inset: 0,
        background: "#020617",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999
    },
    spinner: {
        width: "46px",
        height: "46px",
        border: "3px solid #1e293b",
        borderTop: "3px solid #38bdf8",
        borderRadius: "50%",
        marginBottom: "16px"
    },
    text: {
        fontSize: "13px",
        color: "#94a3b8",
        letterSpacing: "0.3px"
    }
};
