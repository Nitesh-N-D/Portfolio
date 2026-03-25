/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0B0F14",
        surface: "#11161C",
        elevated: "#151B23",
        line: "rgba(255,255,255,0.08)",
        text: "#E6EDF3",
        muted: "#9AA4B2",
        mutedSoft: "#6B7280",
        accent: "#4F8CFF"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      maxWidth: {
        container: "1200px"
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem"
      },
      borderRadius: {
        card: "16px"
      },
      lineHeight: {
        body: "1.7",
        heading: "1.2"
      },
      letterSpacing: {
        tightest: "-0.04em"
      },
      boxShadow: {
        subtle: "0 12px 32px rgba(0, 0, 0, 0.14)"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(220%)" }
        }
      },
      animation: {
        shimmer: "shimmer 1.6s linear infinite"
      }
    }
  },
  plugins: []
};
