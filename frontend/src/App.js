import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
export default function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);
    return (_jsx(AnimatePresence, { mode: "wait", children: loading ? (_jsx(PageLoader, {}, "loader")) : (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Education, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Experience, {}), _jsx(Certifications, {}), _jsx(Achievements, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] })) }));
}
