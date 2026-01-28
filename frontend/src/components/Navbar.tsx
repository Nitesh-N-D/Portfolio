// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { motion } from "framer-motion";

// // // // // // // // const sections = [
// // // // // // // //   { id: "home", label: "Home" },
// // // // // // // //   { id: "about", label: "About" },
// // // // // // // //   { id: "education", label: "Education" },
// // // // // // // //   { id: "skills", label: "Skills" },
// // // // // // // //   { id: "projects", label: "Projects" },
// // // // // // // //   { id: "experience", label: "Experience" },
// // // // // // // //   { id: "certifications", label: "Certifications" },
// // // // // // // //   { id: "achievements", label: "Achievements" },
// // // // // // // //   { id: "contact", label: "Contact" }
// // // // // // // // ];

// // // // // // // // export default function Navbar() {
// // // // // // // //   const [active, setActive] = useState("home");

// // // // // // // //   useEffect(() => {
// // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // //       entries => {
// // // // // // // //         entries.forEach(entry => {
// // // // // // // //           if (entry.isIntersecting) {
// // // // // // // //             setActive(entry.target.id);
// // // // // // // //           }
// // // // // // // //         });
// // // // // // // //       },
// // // // // // // //       {
// // // // // // // //         rootMargin: "-40% 0px -55% 0px"
// // // // // // // //       }
// // // // // // // //     );

// // // // // // // //     sections.forEach(section => {
// // // // // // // //       const el = document.getElementById(section.id);
// // // // // // // //       if (el) observer.observe(el);
// // // // // // // //     });

// // // // // // // //     return () => observer.disconnect();
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <motion.nav
// // // // // // // //       initial={{ y: -60, opacity: 0 }}
// // // // // // // //       animate={{ y: 0, opacity: 1 }}
// // // // // // // //       transition={{ duration: 0.5, ease: "easeOut" }}
// // // // // // // //       style={styles.nav}
// // // // // // // //     >
// // // // // // // //       {/* LEFT: BRAND */}
// // // // // // // //       <div style={styles.brand}>Nitesh N D</div>

// // // // // // // //       {/* RIGHT: NAV LINKS */}
// // // // // // // //       <div style={styles.links}>
// // // // // // // //         {sections.map(section => (
// // // // // // // //           <a
// // // // // // // //             key={section.id}
// // // // // // // //             href={`#${section.id}`}
// // // // // // // //             style={{
// // // // // // // //               ...styles.link,
// // // // // // // //               ...(active === section.id ? styles.activeLink : {})
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {section.label}
// // // // // // // //           </a>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </motion.nav>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* ==================== STYLES ==================== */

// // // // // // // // const styles = {
// // // // // // // //   nav: {
// // // // // // // //     position: "fixed" as const,
// // // // // // // //     top: 0,
// // // // // // // //     left: 0,
// // // // // // // //     width: "100%",
// // // // // // // //     padding: "14px 10%",
// // // // // // // //     display: "flex",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "space-between",
// // // // // // // //     background: "rgba(2, 6, 23, 0.85)",
// // // // // // // //     backdropFilter: "blur(14px)",
// // // // // // // //     borderBottom: "1px solid #1e293b",
// // // // // // // //     zIndex: 1000
// // // // // // // //   },

// // // // // // // //   brand: {
// // // // // // // //     fontSize: "18px",
// // // // // // // //     fontWeight: 600,
// // // // // // // //     color: "#e5e7eb",
// // // // // // // //     letterSpacing: "0.4px"
// // // // // // // //   },

// // // // // // // //   links: {
// // // // // // // //     display: "flex",
// // // // // // // //     gap: "26px",
// // // // // // // //     alignItems: "center"
// // // // // // // //   },

// // // // // // // //   link: {
// // // // // // // //     fontSize: "14px",
// // // // // // // //     fontWeight: 500,
// // // // // // // //     color: "#94a3b8",
// // // // // // // //     textDecoration: "none",
// // // // // // // //     position: "relative" as const,
// // // // // // // //     paddingBottom: "4px",
// // // // // // // //     transition: "color 0.2s ease"
// // // // // // // //   },

// // // // // // // //   activeLink: {
// // // // // // // //     color: "#38bdf8",
// // // // // // // //     borderBottom: "2px solid #38bdf8"
// // // // // // // //   }
// // // // // // // // };
// // // // // // // import { useEffect, useRef, useState } from "react";
// // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // import { FiMenu, FiX } from "react-icons/fi";

// // // // // // // type Section = {
// // // // // // //   id: string;
// // // // // // //   label: string;
// // // // // // // };

// // // // // // // const sections: Section[] = [
// // // // // // //   { id: "home", label: "Home" },
// // // // // // //   { id: "about", label: "About" },
// // // // // // //   { id: "education", label: "Education" },
// // // // // // //   { id: "skills", label: "Skills" },
// // // // // // //   { id: "projects", label: "Projects" },
// // // // // // //   { id: "experience", label: "Experience" },
// // // // // // //   { id: "certifications", label: "Certifications" },
// // // // // // //   { id: "achievements", label: "Achievements" },
// // // // // // //   { id: "contact", label: "Contact" }
// // // // // // // ];

// // // // // // // export default function Navbar() {
// // // // // // //   const [active, setActive] = useState("home");
// // // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // // //   const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
// // // // // // //   const [indicator, setIndicator] = useState({ left: 0, width: 0 });

// // // // // // //   /* ================= Scroll Spy ================= */
// // // // // // //   useEffect(() => {
// // // // // // //     const observer = new IntersectionObserver(
// // // // // // //       entries => {
// // // // // // //         entries.forEach(entry => {
// // // // // // //           if (entry.isIntersecting) {
// // // // // // //             setActive(entry.target.id);
// // // // // // //           }
// // // // // // //         });
// // // // // // //       },
// // // // // // //       { rootMargin: "-45% 0px -50% 0px" }
// // // // // // //     );

// // // // // // //     sections.forEach(section => {
// // // // // // //       const el = document.getElementById(section.id);
// // // // // // //       if (el) observer.observe(el);
// // // // // // //     });

// // // // // // //     return () => observer.disconnect();
// // // // // // //   }, []);

// // // // // // //   /* ================= Underline ================= */
// // // // // // //   useEffect(() => {
// // // // // // //     const el = linkRefs.current[active];
// // // // // // //     if (el && !menuOpen) {
// // // // // // //       setIndicator({
// // // // // // //         left: el.offsetLeft,
// // // // // // //         width: el.offsetWidth
// // // // // // //       });
// // // // // // //     }
// // // // // // //   }, [active, menuOpen]);

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* ================= NAVBAR ================= */}
// // // // // // //       <nav style={styles.nav}>
// // // // // // //         {/* BRAND */}
// // // // // // //         <div style={styles.brand}>Nitesh N D</div>

// // // // // // //         {/* DESKTOP LINKS */}
// // // // // // //         <div style={styles.linksDesktop}>
// // // // // // //           {sections.map(section => (
// // // // // // //             <a
// // // // // // //               key={section.id}
// // // // // // //               href={`#${section.id}`}
// // // // // // //               ref={(el: HTMLAnchorElement | null) => {
// // // // // // //                 linkRefs.current[section.id] = el;
// // // // // // //               }}
// // // // // // //               onClick={() => setActive(section.id)}
// // // // // // //               style={{
// // // // // // //                 ...styles.link,
// // // // // // //                 color: active === section.id ? "#38bdf8" : "#94a3b8"
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {section.label}
// // // // // // //             </a>
// // // // // // //           ))}

// // // // // // //           {/* BLUE INDICATOR */}
// // // // // // //           <motion.span
// // // // // // //             layout
// // // // // // //             transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // // // // // //             style={{
// // // // // // //               ...styles.indicator,
// // // // // // //               left: indicator.left,
// // // // // // //               width: indicator.width
// // // // // // //             }}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* MOBILE TOGGLE */}
// // // // // // //         <button
// // // // // // //           style={styles.menuBtn}
// // // // // // //           onClick={() => setMenuOpen(prev => !prev)}
// // // // // // //           aria-label="Toggle menu"
// // // // // // //         >
// // // // // // //           {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
// // // // // // //         </button>
// // // // // // //       </nav>

// // // // // // //       {/* ================= MOBILE MENU ================= */}
// // // // // // //       <AnimatePresence>
// // // // // // //         {menuOpen && (
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: -10 }}
// // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // //             exit={{ opacity: 0, y: -10 }}
// // // // // // //             transition={{ duration: 0.25 }}
// // // // // // //             style={styles.mobileMenu}
// // // // // // //           >
// // // // // // //             {sections.map(section => (
// // // // // // //               <a
// // // // // // //                 key={section.id}
// // // // // // //                 href={`#${section.id}`}
// // // // // // //                 onClick={() => {
// // // // // // //                   setActive(section.id);
// // // // // // //                   setMenuOpen(false);
// // // // // // //                 }}
// // // // // // //                 style={{
// // // // // // //                   ...styles.mobileLink,
// // // // // // //                   color: active === section.id ? "#38bdf8" : "#e5e7eb"
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {section.label}
// // // // // // //               </a>
// // // // // // //             ))}
// // // // // // //           </motion.div>
// // // // // // //         )}
// // // // // // //       </AnimatePresence>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }

// // // // // // // /* ==================== STYLES ==================== */

// // // // // // // const styles = {
// // // // // // //   nav: {
// // // // // // //     position: "fixed" as const,
// // // // // // //     top: 0,
// // // // // // //     left: 0,
// // // // // // //     width: "100%",
// // // // // // //     padding: "14px 10%",
// // // // // // //     display: "flex",
// // // // // // //     justifyContent: "space-between",
// // // // // // //     alignItems: "center",
// // // // // // //     background: "rgba(2, 6, 23, 0.9)",
// // // // // // //     backdropFilter: "blur(14px)",
// // // // // // //     borderBottom: "1px solid #1e293b",
// // // // // // //     zIndex: 1000
// // // // // // //   },

// // // // // // //   brand: {
// // // // // // //     fontSize: "17px",
// // // // // // //     fontWeight: 600,
// // // // // // //     color: "#e5e7eb"
// // // // // // //   },

// // // // // // //   /* DESKTOP */
// // // // // // //   linksDesktop: {
// // // // // // //     position: "relative" as const,
// // // // // // //     display: "flex",
// // // // // // //     gap: "26px",
// // // // // // //     paddingBottom: "6px"
// // // // // // //   },

// // // // // // //   link: {
// // // // // // //     fontSize: "14px",
// // // // // // //     fontWeight: 500,
// // // // // // //     textDecoration: "none",
// // // // // // //     transition: "color 0.2s ease"
// // // // // // //   },

// // // // // // //   indicator: {
// // // // // // //     position: "absolute" as const,
// // // // // // //     bottom: 0,
// // // // // // //     height: "2px",
// // // // // // //     background: "#38bdf8",
// // // // // // //     borderRadius: "2px"
// // // // // // //   },

// // // // // // //   /* MOBILE */
// // // // // // //   menuBtn: {
// // // // // // //     display: "none",
// // // // // // //     background: "none",
// // // // // // //     border: "none",
// // // // // // //     color: "#e5e7eb",
// // // // // // //     cursor: "pointer"
// // // // // // //   },

// // // // // // //   mobileMenu: {
// // // // // // //     position: "fixed" as const,
// // // // // // //     top: "64px",
// // // // // // //     left: 0,
// // // // // // //     width: "100%",
// // // // // // //     background: "rgba(2, 6, 23, 0.98)",
// // // // // // //     borderBottom: "1px solid #1e293b",
// // // // // // //     display: "flex",
// // // // // // //     flexDirection: "column" as const,
// // // // // // //     padding: "16px 10%",
// // // // // // //     gap: "14px",
// // // // // // //     zIndex: 999
// // // // // // //   },

// // // // // // //   mobileLink: {
// // // // // // //     fontSize: "14px",
// // // // // // //     fontWeight: 500,
// // // // // // //     textDecoration: "none"
// // // // // // //   }
// // // // // // // };

// // // // // // // /* ==================== RESPONSIVE ==================== */
// // // // // // // if (typeof window !== "undefined") {
// // // // // // //   const style = document.createElement("style");
// // // // // // //   style.innerHTML = `
// // // // // // //     @media (max-width: 900px) {
// // // // // // //       nav div[style*="linksDesktop"] {
// // // // // // //         display: none !important;
// // // // // // //       }
// // // // // // //       button {
// // // // // // //         display: block !important;
// // // // // // //       }
// // // // // // //     }
// // // // // // //   `;
// // // // // // //   document.head.appendChild(style);
// // // // // // // }
// // // // // // import { useEffect, useRef, useState } from "react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import { FiMenu, FiX } from "react-icons/fi";

// // // // // // const sections = [
// // // // // //   "home",
// // // // // //   "about",
// // // // // //   "education",
// // // // // //   "skills",
// // // // // //   "projects",
// // // // // //   "experience",
// // // // // //   "certifications",
// // // // // //   "achievements",
// // // // // //   "contact"
// // // // // // ];

// // // // // // export default function Navbar() {
// // // // // //   const [active, setActive] = useState("home");
// // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // //   const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
// // // // // //   const [indicator, setIndicator] = useState({ left: 0, width: 0 });

// // // // // //   /* ---------- Scroll Spy ---------- */
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       entries => {
// // // // // //         entries.forEach(entry => {
// // // // // //           if (entry.isIntersecting) {
// // // // // //             setActive(entry.target.id);
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { rootMargin: "-45% 0px -45% 0px" }
// // // // // //     );

// // // // // //     sections.forEach(id => {
// // // // // //       const el = document.getElementById(id);
// // // // // //       if (el) observer.observe(el);
// // // // // //     });

// // // // // //     return () => observer.disconnect();
// // // // // //   }, []);

// // // // // //   /* ---------- Blue Line ---------- */
// // // // // //   useEffect(() => {
// // // // // //     const el = linkRefs.current[active];
// // // // // //     if (el) {
// // // // // //       setIndicator({
// // // // // //         left: el.offsetLeft,
// // // // // //         width: el.offsetWidth
// // // // // //       });
// // // // // //     }
// // // // // //   }, [active]);

// // // // // //   return (
// // // // // //     <>
// // // // // //       <nav style={styles.nav}>
// // // // // //         <div style={styles.brand}>Nitesh N D</div>

// // // // // //         {/* DESKTOP */}
// // // // // //         <div style={styles.links}>
// // // // // //           {sections.map(id => (
// // // // // //             <a
// // // // // //               key={id}
// // // // // //               href={`#${id}`}
// // // // // //               ref={el => (linkRefs.current[id] = el)}
// // // // // //               style={{
// // // // // //                 ...styles.link,
// // // // // //                 color: active === id ? "#38bdf8" : "#94a3b8"
// // // // // //               }}
// // // // // //             >
// // // // // //               {id.charAt(0).toUpperCase() + id.slice(1)}
// // // // // //             </a>
// // // // // //           ))}

// // // // // //           {/* BLUE UNDERLINE */}
// // // // // //           <motion.span
// // // // // //             style={styles.indicator}
// // // // // //             animate={{ left: indicator.left, width: indicator.width }}
// // // // // //             transition={{ type: "spring", stiffness: 320, damping: 30 }}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* MOBILE BUTTON */}
// // // // // //         <button
// // // // // //           style={styles.menuBtn}
// // // // // //           onClick={() => setMenuOpen(p => !p)}
// // // // // //         >
// // // // // //           {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
// // // // // //         </button>
// // // // // //       </nav>

// // // // // //       {/* MOBILE MENU */}
// // // // // //       <AnimatePresence>
// // // // // //         {menuOpen && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: -10 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             exit={{ opacity: 0, y: -10 }}
// // // // // //             style={styles.mobileMenu}
// // // // // //           >
// // // // // //             {sections.map(id => (
// // // // // //               <a
// // // // // //                 key={id}
// // // // // //                 href={`#${id}`}
// // // // // //                 onClick={() => {
// // // // // //                   setActive(id);
// // // // // //                   setMenuOpen(false);
// // // // // //                 }}
// // // // // //                 style={styles.mobileLink}
// // // // // //               >
// // // // // //                 {id.charAt(0).toUpperCase() + id.slice(1)}
// // // // // //               </a>
// // // // // //             ))}
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </>
// // // // // //   );
// // // // // // }

// // // // // // /* ---------- STYLES ---------- */

// // // // // // const styles = {
// // // // // //   nav: {
// // // // // //     position: "fixed" as const,
// // // // // //     top: 0,
// // // // // //     width: "100%",
// // // // // //     padding: "14px 10%",
// // // // // //     display: "flex",
// // // // // //     justifyContent: "space-between",
// // // // // //     alignItems: "center",
// // // // // //     background: "rgba(2,6,23,0.92)",
// // // // // //     backdropFilter: "blur(14px)",
// // // // // //     borderBottom: "1px solid #1e293b",
// // // // // //     zIndex: 1000
// // // // // //   },

// // // // // //   brand: {
// // // // // //     fontWeight: 600,
// // // // // //     fontSize: "16px",
// // // // // //     color: "#e5e7eb"
// // // // // //   },

// // // // // //   links: {
// // // // // //     position: "relative" as const,
// // // // // //     display: "flex",
// // // // // //     gap: "26px",
// // // // // //     paddingBottom: "6px"
// // // // // //   },

// // // // // //   link: {
// // // // // //     fontSize: "14px",
// // // // // //     textDecoration: "none",
// // // // // //     fontWeight: 500
// // // // // //   },

// // // // // //   indicator: {
// // // // // //     position: "absolute" as const,
// // // // // //     bottom: 0,
// // // // // //     height: "2px",
// // // // // //     background: "#38bdf8",
// // // // // //     borderRadius: "2px"
// // // // // //   },

// // // // // //   menuBtn: {
// // // // // //     display: "none",
// // // // // //     background: "none",
// // // // // //     border: "none",
// // // // // //     color: "#e5e7eb",
// // // // // //     cursor: "pointer"
// // // // // //   },

// // // // // //   mobileMenu: {
// // // // // //     position: "fixed" as const,
// // // // // //     top: "64px",
// // // // // //     width: "100%",
// // // // // //     background: "#020617",
// // // // // //     padding: "16px 10%",
// // // // // //     display: "flex",
// // // // // //     flexDirection: "column" as const,
// // // // // //     gap: "14px",
// // // // // //     borderBottom: "1px solid #1e293b",
// // // // // //     zIndex: 999
// // // // // //   },

// // // // // //   mobileLink: {
// // // // // //     fontSize: "14px",
// // // // // //     color: "#e5e7eb",
// // // // // //     textDecoration: "none"
// // // // // //   }
// // // // // // };
// // // // // import { useEffect, useRef, useState } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import { FiMenu, FiX } from "react-icons/fi";

// // // // // const sections = [
// // // // //   "home",
// // // // //   "about",
// // // // //   "education",
// // // // //   "skills",
// // // // //   "projects",
// // // // //   "experience",
// // // // //   "certifications",
// // // // //   "achievements",
// // // // //   "contact"
// // // // // ];

// // // // // export default function Navbar() {
// // // // //   const [active, setActive] = useState("home");
// // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // //   const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
// // // // //   const [indicator, setIndicator] = useState({ left: 0, width: 0 });

// // // // //   /* ================= Scroll Spy ================= */
// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       entries => {
// // // // //         entries.forEach(entry => {
// // // // //           if (entry.isIntersecting) {
// // // // //             setActive(entry.target.id);
// // // // //           }
// // // // //         });
// // // // //       },
// // // // //       { rootMargin: "-45% 0px -45% 0px" }
// // // // //     );

// // // // //     sections.forEach(id => {
// // // // //       const el = document.getElementById(id);
// // // // //       if (el) observer.observe(el);
// // // // //     });

// // // // //     return () => observer.disconnect();
// // // // //   }, []);

// // // // //   /* ================= Blue Underline ================= */
// // // // //   useEffect(() => {
// // // // //     if (menuOpen) return;

// // // // //     const el = linkRefs.current[active];
// // // // //     if (el) {
// // // // //       setIndicator({
// // // // //         left: el.offsetLeft,
// // // // //         width: el.offsetWidth
// // // // //       });
// // // // //     }
// // // // //   }, [active, menuOpen]);

// // // // //   return (
// // // // //     <>
// // // // //       {/* ================= NAVBAR ================= */}
// // // // //       <nav style={styles.nav}>
// // // // //         <div style={styles.brand}>Nitesh N D</div>

// // // // //         {/* DESKTOP LINKS */}
// // // // //         <div style={styles.links}>
// // // // //           {sections.map(id => (
// // // // //             <a
// // // // //               key={id}
// // // // //               href={`#${id}`}
// // // // //               ref={el => {
// // // // //                 linkRefs.current[id] = el; // ✅ FIXED
// // // // //               }}
// // // // //               style={{
// // // // //                 ...styles.link,
// // // // //                 color: active === id ? "#38bdf8" : "#94a3b8"
// // // // //               }}
// // // // //             >
// // // // //               {id.charAt(0).toUpperCase() + id.slice(1)}
// // // // //             </a>
// // // // //           ))}

// // // // //           {/* BLUE UNDERLINE */}
// // // // //           {!menuOpen && (
// // // // //             <motion.span
// // // // //               style={styles.indicator}
// // // // //               animate={{ left: indicator.left, width: indicator.width }}
// // // // //               transition={{ type: "spring", stiffness: 320, damping: 30 }}
// // // // //             />
// // // // //           )}
// // // // //         </div>

// // // // //         {/* MOBILE TOGGLE */}
// // // // //         <button
// // // // //           style={styles.menuBtn}
// // // // //           onClick={() => setMenuOpen(p => !p)}
// // // // //           aria-label="Toggle navigation"
// // // // //         >
// // // // //           {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
// // // // //         </button>
// // // // //       </nav>

// // // // //       {/* ================= MOBILE MENU ================= */}
// // // // //       <AnimatePresence>
// // // // //         {menuOpen && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: -10 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             exit={{ opacity: 0, y: -10 }}
// // // // //             transition={{ duration: 0.25 }}
// // // // //             style={styles.mobileMenu}
// // // // //           >
// // // // //             {sections.map(id => (
// // // // //               <a
// // // // //                 key={id}
// // // // //                 href={`#${id}`}
// // // // //                 onClick={() => {
// // // // //                   setActive(id);
// // // // //                   setMenuOpen(false);
// // // // //                 }}
// // // // //                 style={{
// // // // //                   ...styles.mobileLink,
// // // // //                   color: active === id ? "#38bdf8" : "#e5e7eb"
// // // // //                 }}
// // // // //               >
// // // // //                 {id.charAt(0).toUpperCase() + id.slice(1)}
// // // // //               </a>
// // // // //             ))}
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // /* ==================== STYLES ==================== */

// // // // // const styles = {
// // // // //   nav: {
// // // // //     position: "fixed" as const,
// // // // //     top: 0,
// // // // //     width: "100%",
// // // // //     padding: "14px 10%",
// // // // //     display: "flex",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //     background: "rgba(2,6,23,0.92)",
// // // // //     backdropFilter: "blur(14px)",
// // // // //     borderBottom: "1px solid #1e293b",
// // // // //     zIndex: 1000
// // // // //   },

// // // // //   brand: {
// // // // //     fontSize: "16px",
// // // // //     fontWeight: 600,
// // // // //     color: "#e5e7eb"
// // // // //   },

// // // // //   links: {
// // // // //     position: "relative" as const,
// // // // //     display: "flex",
// // // // //     gap: "26px",
// // // // //     paddingBottom: "6px"
// // // // //   },

// // // // //   link: {
// // // // //     fontSize: "14px",
// // // // //     fontWeight: 500,
// // // // //     textDecoration: "none",
// // // // //     transition: "color 0.2s ease"
// // // // //   },

// // // // //   indicator: {
// // // // //     position: "absolute" as const,
// // // // //     bottom: 0,
// // // // //     height: "2px",
// // // // //     background: "#38bdf8",
// // // // //     borderRadius: "2px"
// // // // //   },

// // // // //   menuBtn: {
// // // // //     display: "none",
// // // // //     background: "none",
// // // // //     border: "none",
// // // // //     color: "#e5e7eb",
// // // // //     cursor: "pointer"
// // // // //   },

// // // // //   mobileMenu: {
// // // // //     position: "fixed" as const,
// // // // //     top: "64px",
// // // // //     width: "100%",
// // // // //     background: "rgba(2,6,23,0.98)",
// // // // //     padding: "16px 24px",
// // // // //     display: "flex",
// // // // //     flexDirection: "column" as const,
// // // // //     gap: "14px",
// // // // //     borderBottom: "1px solid #1e293b",
// // // // //     zIndex: 999
// // // // //   },

// // // // //   mobileLink: {
// // // // //     fontSize: "14px",
// // // // //     fontWeight: 500,
// // // // //     textDecoration: "none"
// // // // //   }
// // // // // };

// // // // import { useEffect, useRef, useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { FiMenu, FiX } from "react-icons/fi";

// // // // const sections: string[] = [
// // // //   "home",
// // // //   "about",
// // // //   "skills",
// // // //   "projects",
// // // //   "experience",
// // // //   "certifications",
// // // //   "achievements",
// // // //   "contact"
// // // // ];

// // // // export default function Navbar() {
// // // //   const [active, setActive] = useState<string>("home");
// // // //   const [menuOpen, setMenuOpen] = useState<boolean>(false);

// // // //   const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
// // // //   const [indicator, setIndicator] = useState({ left: 0, width: 0 });

// // // //   /* ================= Scroll Spy ================= */
// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       entries => {
// // // //         entries.forEach(entry => {
// // // //           if (entry.isIntersecting) {
// // // //             setActive(entry.target.id);
// // // //           }
// // // //         });
// // // //       },
// // // //       { rootMargin: "-45% 0px -45% 0px" }
// // // //     );

// // // //     sections.forEach(id => {
// // // //       const el = document.getElementById(id);
// // // //       if (el) observer.observe(el);
// // // //     });

// // // //     return () => observer.disconnect();
// // // //   }, []);

// // // //   /* ================= Blue Underline ================= */
// // // //   useEffect(() => {
// // // //     if (menuOpen) return;

// // // //     const el = linkRefs.current[active];
// // // //     if (el) {
// // // //       setIndicator({
// // // //         left: el.offsetLeft,
// // // //         width: el.offsetWidth
// // // //       });
// // // //     }
// // // //   }, [active, menuOpen]);

// // // //   /* ================= RESPONSIVE FIX (STYLE ONLY) ================= */
// // // //   useEffect(() => {
// // // //     const style = document.createElement("style");
// // // //     style.innerHTML = `
// // // //       @media (max-width: 900px) {
// // // //         .nav-links {
// // // //           display: none !important;
// // // //         }
// // // //         .menu-btn {
// // // //           display: block !important;
// // // //         }
// // // //       }
// // // //     `;
// // // //     document.head.appendChild(style);
// // // //     return () => document.head.removeChild(style);
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <nav style={styles.nav}>
// // // //         <div style={styles.brand}>Nitesh N D</div>

// // // //         {/* DESKTOP LINKS */}
// // // //         <div className="nav-links" style={styles.links}>
// // // //           {sections.map(id => (
// // // //             <a
// // // //               key={id}
// // // //               href={`#${id}`}
// // // //               ref={el => (linkRefs.current[id] = el)}
// // // //               style={{
// // // //                 ...styles.link,
// // // //                 color: active === id ? "#38bdf8" : "#94a3b8"
// // // //               }}
// // // //             >
// // // //               {id.charAt(0).toUpperCase() + id.slice(1)}
// // // //             </a>
// // // //           ))}

// // // //           {!menuOpen && (
// // // //             <motion.span
// // // //               style={styles.indicator}
// // // //               animate={{ left: indicator.left, width: indicator.width }}
// // // //               transition={{ type: "spring", stiffness: 320, damping: 30 }}
// // // //             />
// // // //           )}
// // // //         </div>

// // // //         {/* MOBILE BUTTON */}
// // // //         <button
// // // //           className="menu-btn"
// // // //           style={styles.menuBtn}
// // // //           onClick={() => setMenuOpen(p => !p)}
// // // //           aria-label="Toggle navigation"
// // // //         >
// // // //           {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
// // // //         </button>
// // // //       </nav>

// // // //       {/* MOBILE MENU */}
// // // //       <AnimatePresence>
// // // //         {menuOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: -10 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: -10 }}
// // // //             transition={{ duration: 0.25 }}
// // // //             style={styles.mobileMenu}
// // // //           >
// // // //             {sections.map(id => (
// // // //               <a
// // // //                 key={id}
// // // //                 href={`#${id}`}
// // // //                 onClick={() => {
// // // //                   setActive(id);
// // // //                   setMenuOpen(false);
// // // //                 }}
// // // //                 style={{
// // // //                   ...styles.mobileLink,
// // // //                   color: active === id ? "#38bdf8" : "#e5e7eb"
// // // //                 }}
// // // //               >
// // // //                 {id.charAt(0).toUpperCase() + id.slice(1)}
// // // //               </a>
// // // //             ))}
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </>
// // // //   );
// // // // }

// // // // /* ==================== STYLES ==================== */

// // // // const styles = {
// // // //   nav: {
// // // //     position: "fixed" as const,
// // // //     top: 0,
// // // //     width: "100%",
// // // //     padding: "14px 10%",
// // // //     display: "flex",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     background: "rgba(2,6,23,0.92)",
// // // //     backdropFilter: "blur(14px)",
// // // //     borderBottom: "1px solid #1e293b",
// // // //     zIndex: 1000
// // // //   },

// // // //   brand: {
// // // //     fontSize: "16px",
// // // //     fontWeight: 600,
// // // //     color: "#e5e7eb"
// // // //   },

// // // //   links: {
// // // //     position: "relative" as const,
// // // //     display: "flex",
// // // //     gap: "26px",
// // // //     paddingBottom: "6px"
// // // //   },

// // // //   link: {
// // // //     fontSize: "14px",
// // // //     fontWeight: 500,
// // // //     textDecoration: "none",
// // // //     transition: "color 0.2s ease"
// // // //   },

// // // //   indicator: {
// // // //     position: "absolute" as const,
// // // //     bottom: 0,
// // // //     height: "2px",
// // // //     background: "#38bdf8",
// // // //     borderRadius: "2px"
// // // //   },

// // // //   menuBtn: {
// // // //     display: "none",
// // // //     background: "none",
// // // //     border: "none",
// // // //     color: "#e5e7eb",
// // // //     cursor: "pointer"
// // // //   },

// // // //   mobileMenu: {
// // // //     position: "fixed" as const,
// // // //     top: "64px",
// // // //     width: "100%",
// // // //     background: "rgba(2,6,23,0.98)",
// // // //     padding: "16px 24px",
// // // //     display: "flex",
// // // //     flexDirection: "column" as const,
// // // //     gap: "14px",
// // // //     borderBottom: "1px solid #1e293b",
// // // //     zIndex: 999
// // // //   },

// // // //   mobileLink: {
// // // //     fontSize: "14px",
// // // //     fontWeight: 500,
// // // //     textDecoration: "none"
// // // //   }
// // // // };
// // // import { useEffect, useRef, useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { FiMenu, FiX } from "react-icons/fi";

// // // const sections = [
// // //   "home",
// // //   "about",
// // //   "education",
// // //   "skills",
// // //   "projects",
// // //   "experience",
// // //   "certifications",
// // //   "achievements",
// // //   "contact"
// // // ];

// // // export default function Navbar() {
// // //   const [active, setActive] = useState("home");
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
// // //   const [indicator, setIndicator] = useState({ left: 0, width: 0 });

// // //   /* ================= Scroll Spy ================= */
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       entries => {
// // //         entries.forEach(entry => {
// // //           if (entry.isIntersecting) {
// // //             setActive(entry.target.id);
// // //           }
// // //         });
// // //       },
// // //       { rootMargin: "-45% 0px -45% 0px" }
// // //     );

// // //     sections.forEach(id => {
// // //       const el = document.getElementById(id);
// // //       if (el) observer.observe(el);
// // //     });

// // //     return () => observer.disconnect();
// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // //   }, []);

// // //   /* ================= Blue Underline ================= */
// // //   useEffect(() => {
// // //     if (menuOpen) return;

// // //     const el = linkRefs.current[active];
// // //     if (el) {
// // //       setIndicator({
// // //         left: el.offsetLeft,
// // //         width: el.offsetWidth
// // //       });
// // //     }
// // //   }, [active, menuOpen]);

// // //   return (
// // //     <>
// // //       {/* ================= NAVBAR ================= */}
// // //       <nav style={styles.nav}>
// // //         <div style={styles.brand}>Nitesh N D</div>

// // //         {/* DESKTOP LINKS */}
// // //         <div style={styles.links}>
// // //           {sections.map(id => (
// // //             <a
// // //               key={id}
// // //               href={`#${id}`}
// // //               ref={el => {
// // //                 linkRefs.current[id] = el;
// // //               }}
// // //               style={{
// // //                 ...styles.link,
// // //                 color: active === id ? "#38bdf8" : "#94a3b8"
// // //               }}
// // //             >
// // //               {id.charAt(0).toUpperCase() + id.slice(1)}
// // //             </a>
// // //           ))}

// // //           {!menuOpen && (
// // //             <motion.span
// // //               style={styles.indicator}
// // //               animate={{ left: indicator.left, width: indicator.width }}
// // //               transition={{ type: "spring", stiffness: 320, damping: 30 }}
// // //             />
// // //           )}
// // //         </div>

// // //         {/* MOBILE TOGGLE */}
// // //         <button
// // //           style={{
// // //             ...styles.menuBtn,
// // //             display: "none"
// // //           }}
// // //           className="navbar-menu-btn"
// // //           onClick={() => setMenuOpen(p => !p)}
// // //           aria-label="Toggle navigation"
// // //         >
// // //           {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
// // //         </button>
// // //       </nav>

// // //       {/* ================= MOBILE MENU ================= */}
// // //       <AnimatePresence>
// // //         {menuOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: -10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -10 }}
// // //             transition={{ duration: 0.25 }}
// // //             style={styles.mobileMenu}
// // //           >
// // //             {sections.map(id => (
// // //               <a
// // //                 key={id}
// // //                 href={`#${id}`}
// // //                 onClick={() => {
// // //                   setActive(id);
// // //                   setMenuOpen(false);
// // //                 }}
// // //                 style={{
// // //                   ...styles.mobileLink,
// // //                   color: active === id ? "#38bdf8" : "#e5e7eb"
// // //                 }}
// // //               >
// // //                 {id.charAt(0).toUpperCase() + id.slice(1)}
// // //               </a>
// // //             ))}
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {/* ================= MOBILE VISIBILITY FIX ================= */}
// // //       <style>
// // //         {`
// // //           @media (max-width: 900px) {
// // //             .navbar-menu-btn {
// // //               display: block !important;
// // //             }
// // //             nav > div:nth-child(2) {
// // //               display: none !important;
// // //             }
// // //           }
// // //         `}
// // //       </style>
// // //     </>
// // //   );
// // // }

// // // /* ==================== STYLES ==================== */

// // // const styles = {
// // //   nav: {
// // //     position: "fixed" as const,
// // //     top: 0,
// // //     width: "100%",
// // //     padding: "14px clamp(16px, 5vw, 10%)",
// // //     display: "flex",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //     background: "rgba(2,6,23,0.92)",
// // //     backdropFilter: "blur(14px)",
// // //     borderBottom: "1px solid #1e293b",
// // //     zIndex: 1000
// // //   },

// // //   brand: {
// // //     fontSize: "16px",
// // //     fontWeight: 600,
// // //     color: "#e5e7eb"
// // //   },

// // //   links: {
// // //     position: "relative" as const,
// // //     display: "flex",
// // //     gap: "26px",
// // //     paddingBottom: "6px"
// // //   },

// // //   link: {
// // //     fontSize: "14px",
// // //     fontWeight: 500,
// // //     textDecoration: "none",
// // //     transition: "color 0.2s ease"
// // //   },

// // //   indicator: {
// // //     position: "absolute" as const,
// // //     bottom: 0,
// // //     height: "2px",
// // //     background: "#38bdf8",
// // //     borderRadius: "2px"
// // //   },

// // //   menuBtn: {
// // //     background: "none",
// // //     border: "none",
// // //     color: "#e5e7eb",
// // //     cursor: "pointer"
// // //   },

// // //   mobileMenu: {
// // //     position: "fixed" as const,
// // //     top: "64px",
// // //     width: "100%",
// // //     background: "rgba(2,6,23,0.98)",
// // //     padding: "16px 24px",
// // //     display: "flex",
// // //     flexDirection: "column" as const,
// // //     gap: "14px",
// // //     borderBottom: "1px solid #1e293b",
// // //     zIndex: 999
// // //   },

// // //   mobileLink: {
// // //     fontSize: "14px",
// // //     fontWeight: 500,
// // //     textDecoration: "none"
// // //   }
// // // };
// // import { useEffect, useRef, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { FiMenu, FiX } from "react-icons/fi";

// // const sections = [
// //   "home",
// //   "about",
// //   "education",
// //   "skills",
// //   "projects",
// //   "experience",
// //   "certifications",
// //   "achievements",
// //   "contact"
// // ];

// // export default function Navbar() {
// //   const [active, setActive] = useState("home");
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
// //   const [indicator, setIndicator] = useState({ left: 0, width: 0 });

// //   /* ================= Scroll Spy ================= */
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       entries => {
// //         entries.forEach(entry => {
// //           if (entry.isIntersecting) {
// //             setActive(entry.target.id);
// //           }
// //         });
// //       },
// //       { rootMargin: "-45% 0px -45% 0px" }
// //     );

// //     sections.forEach(id => {
// //       const el = document.getElementById(id);
// //       if (el) observer.observe(el);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   /* ================= Underline ================= */
// //   useEffect(() => {
// //     if (menuOpen) return;
// //     const el = linkRefs.current[active];
// //     if (el) {
// //       setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
// //     }
// //   }, [active, menuOpen]);

// //   return (
// //     <>
// //       {/* ================= NAVBAR ================= */}
// //       <nav style={styles.nav}>
// //         <div style={styles.brand}>Nitesh N D</div>

// //         {/* DESKTOP LINKS */}
// //         <div style={styles.linksDesktop}>
// //           {sections.map(id => (
// //             <a
// //               key={id}
// //               href={`#${id}`}
// //               ref={el => (linkRefs.current[id] = el)}
// //               style={{
// //                 ...styles.link,
// //                 color: active === id ? "#38bdf8" : "#94a3b8"
// //               }}
// //             >
// //               {id.charAt(0).toUpperCase() + id.slice(1)}
// //             </a>
// //           ))}

// //           {!menuOpen && (
// //             <motion.span
// //               style={styles.indicator}
// //               animate={{ left: indicator.left, width: indicator.width }}
// //               transition={{ type: "spring", stiffness: 320, damping: 30 }}
// //             />
// //           )}
// //         </div>

// //         {/* MOBILE BUTTON */}
// //         <button
// //           style={styles.menuBtn}
// //           onClick={() => setMenuOpen(p => !p)}
// //           aria-label="Toggle menu"
// //         >
// //           {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
// //         </button>
// //       </nav>

// //       {/* ================= MOBILE MENU ================= */}
// //       <AnimatePresence>
// //         {menuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -8 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -8 }}
// //             transition={{ duration: 0.25 }}
// //             style={styles.mobileMenu}
// //           >
// //             {sections.map(id => (
// //               <a
// //                 key={id}
// //                 href={`#${id}`}
// //                 onClick={() => {
// //                   setActive(id);
// //                   setMenuOpen(false);
// //                 }}
// //                 style={{
// //                   ...styles.mobileLink,
// //                   color: active === id ? "#38bdf8" : "#e5e7eb"
// //                 }}
// //               >
// //                 {id.charAt(0).toUpperCase() + id.slice(1)}
// //               </a>
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }

// // /* ==================== STYLES ==================== */

// // const styles = {
// //   nav: {
// //     position: "fixed" as const,
// //     top: 0,
// //     width: "100%",
// //     padding: "14px clamp(16px, 5vw, 10%)",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     background: "rgba(2,6,23,0.92)",
// //     backdropFilter: "blur(14px)",
// //     borderBottom: "1px solid #1e293b",
// //     zIndex: 1000
// //   },

// //   brand: {
// //     fontSize: "16px",
// //     fontWeight: 600,
// //     color: "#e5e7eb",
// //     whiteSpace: "nowrap" as const
// //   },

// //   /* DESKTOP */
// //   linksDesktop: {
// //     position: "relative" as const,
// //     display: "flex",
// //     gap: "26px",
// //     paddingBottom: "6px"
// //   },

// //   link: {
// //     fontSize: "14px",
// //     fontWeight: 500,
// //     textDecoration: "none",
// //     transition: "color 0.2s ease"
// //   },

// //   indicator: {
// //     position: "absolute" as const,
// //     bottom: 0,
// //     height: "2px",
// //     background: "#38bdf8",
// //     borderRadius: "2px"
// //   },

// //   /* MOBILE */
// //   menuBtn: {
// //     display: "none",
// //     background: "none",
// //     border: "none",
// //     color: "#e5e7eb",
// //     cursor: "pointer"
// //   },

// //   mobileMenu: {
// //     position: "fixed" as const,
// //     top: "64px",
// //     width: "100%",
// //     background: "rgba(2,6,23,0.98)",
// //     padding: "16px 24px",
// //     display: "flex",
// //     flexDirection: "column" as const,
// //     gap: "14px",
// //     borderBottom: "1px solid #1e293b",
// //     zIndex: 999
// //   },

// //   mobileLink: {
// //     fontSize: "14px",
// //     fontWeight: 500,
// //     textDecoration: "none"
// //   }
// // };

// // /* ==================== RESPONSIVE ==================== */
// // if (typeof window !== "undefined") {
// //   const style = document.createElement("style");
// //   style.innerHTML = `
// //     @media (max-width: 900px) {
// //       nav > div:nth-child(2) { display: none; }
// //       nav button { display: block; }
// //     }
// //   `;
// //   document.head.appendChild(style);
// // }
// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";

// const sections = [
//   "home",
//   "about",
//   "education",
//   "skills",
//   "projects",
//   "experience",
//   "certifications",
//   "achievements",
//   "contact"
// ];

// export default function Navbar() {
//   const [active, setActive] = useState("home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
//   const [indicator, setIndicator] = useState({ left: 0, width: 0 });

//   /* ================= SCROLL SPY ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       { rootMargin: "-45% 0px -45% 0px" }
//     );

//     sections.forEach(id => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   /* ================= UNDERLINE ================= */
//   useEffect(() => {
//     if (menuOpen) return;
//     const el = linkRefs.current[active];
//     if (el) {
//       setIndicator({
//         left: el.offsetLeft,
//         width: el.offsetWidth
//       });
//     }
//   }, [active, menuOpen]);

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <nav style={styles.nav}>
//         <div style={styles.brand}>Nitesh N D</div>

//         {/* DESKTOP LINKS */}
//         <div className="nav-links" style={styles.links}>
//           {sections.map(id => (
//             <a
//               key={id}
//               href={`#${id}`}
//               ref={el => (linkRefs.current[id] = el)}
//               style={{
//                 ...styles.link,
//                 color: active === id ? "#38bdf8" : "#94a3b8"
//               }}
//             >
//               {id.charAt(0).toUpperCase() + id.slice(1)}
//             </a>
//           ))}

//           {!menuOpen && (
//             <motion.span
//               style={styles.indicator}
//               animate={{ left: indicator.left, width: indicator.width }}
//               transition={{ type: "spring", stiffness: 320, damping: 30 }}
//             />
//           )}
//         </div>

//         {/* MOBILE TOGGLE */}
//         <button
//           className="menu-btn"
//           style={styles.menuBtn}
//           onClick={() => setMenuOpen(p => !p)}
//           aria-label="Toggle navigation"
//         >
//           {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
//         </button>
//       </nav>

//       {/* ================= MOBILE MENU ================= */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.25 }}
//             style={styles.mobileMenu}
//           >
//             {sections.map(id => (
//               <a
//                 key={id}
//                 href={`#${id}`}
//                 onClick={() => {
//                   setActive(id);
//                   setMenuOpen(false);
//                 }}
//                 style={{
//                   ...styles.mobileLink,
//                   color: active === id ? "#38bdf8" : "#e5e7eb"
//                 }}
//               >
//                 {id.charAt(0).toUpperCase() + id.slice(1)}
//               </a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// /* ================= STYLES ================= */

// const styles = {
//   nav: {
//     position: "fixed" as const,
//     top: 0,
//     width: "100%",
//     padding: "14px clamp(16px, 5vw, 10%)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     background: "rgba(2,6,23,0.92)",
//     backdropFilter: "blur(14px)",
//     borderBottom: "1px solid #1e293b",
//     zIndex: 1000,
//     overflowX: "hidden"
//   },

//   brand: {
//     fontSize: "16px",
//     fontWeight: 600,
//     color: "#e5e7eb",
//     whiteSpace: "nowrap" as const
//   },

//   /* DESKTOP */
//   links: {
//     position: "relative" as const,
//     display: "flex",
//     gap: "22px",
//     paddingBottom: "6px"
//   },

//   link: {
//     fontSize: "14px",
//     fontWeight: 500,
//     textDecoration: "none",
//     transition: "color 0.2s ease"
//   },

//   indicator: {
//     position: "absolute" as const,
//     bottom: 0,
//     height: "2px",
//     background: "#38bdf8",
//     borderRadius: "2px"
//   },

//   /* MOBILE */
//   menuBtn: {
//     display: "none",
//     background: "none",
//     border: "none",
//     color: "#e5e7eb",
//     cursor: "pointer"
//   },

//   mobileMenu: {
//     position: "fixed" as const,
//     top: "64px",
//     width: "100%",
//     background: "rgba(2,6,23,0.98)",
//     padding: "16px 24px",
//     display: "flex",
//     flexDirection: "column" as const,
//     gap: "14px",
//     borderBottom: "1px solid #1e293b",
//     zIndex: 999
//   },

//   mobileLink: {
//     fontSize: "14px",
//     fontWeight: 500,
//     textDecoration: "none"
//   }
// };
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const sections = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "experience",
  "certifications",
  "achievements",
  "contact"
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  /* ================= Scroll Spy ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ================= Underline ================= */
  useEffect(() => {
    if (menuOpen) return;
    const el = linkRefs.current[active];
    if (el) {
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth
      });
    }
  }, [active, menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav style={styles.nav}>
        <div style={styles.brand}>Nitesh N D</div>

        {/* DESKTOP LINKS */}
        <div className="nav-links" style={styles.links}>
          {sections.map(id => (
            <a
              key={id}
              href={`#${id}`}
              ref={el => (linkRefs.current[id] = el)}
              style={{
                ...styles.link,
                color: active === id ? "#38bdf8" : "#94a3b8"
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          {!menuOpen && (
            <motion.span
              style={styles.indicator}
              animate={{ left: indicator.left, width: indicator.width }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
            />
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="menu-btn"
          style={styles.menuBtn}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={styles.mobileMenu}
          >
            {sections.map(id => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setActive(id);
                  setMenuOpen(false);
                }}
                style={{
                  ...styles.mobileLink,
                  color: active === id ? "#38bdf8" : "#e5e7eb"
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= RESPONSIVE (SAFE) ================= */}
     <style>
  {`
    @media (max-width: 1024px) {
      .nav-links {
        display: none;
      }
      .menu-btn {
        display: block;
      }
    }
  `}
</style>

    </>
  );
}

/* ================= STYLES ================= */

const styles: {
  [key: string]: React.CSSProperties;
} = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "14px clamp(16px, 5vw, 10%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(2,6,23,0.92)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid #1e293b",
    zIndex: 1000,
    overflowX: "hidden"
  },

  brand: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#e5e7eb",
    whiteSpace: "nowrap"
  },

  links: {
    position: "relative",
    display: "flex",
    gap: "22px",
    paddingBottom: "6px"
  },

  link: {
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none",
    transition: "color 0.2s ease"
  },

  indicator: {
    position: "absolute",
    bottom: 0,
    height: "2px",
    background: "#38bdf8",
    borderRadius: "2px"
  },

  menuBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: "#e5e7eb",
    cursor: "pointer"
  },

  mobileMenu: {
    position: "fixed",
    top: "64px",
    width: "100%",
    background: "rgba(2,6,23,0.98)",
    padding: "16px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    borderBottom: "1px solid #1e293b",
    zIndex: 999
  },

  mobileLink: {
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none"
  }
};
