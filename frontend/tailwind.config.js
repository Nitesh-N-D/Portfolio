import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#050507",
          surface: "#0a0a0f",
          elevated: "#0f0f16",
          card: "#12121a"
        },
        amber: {
          300: "#fcd672",
          400: "#f5b942",
          500: "#d4922a",
          600: "#b87820",
          700: "#8a5a14"
        },
        text: {
          primary: "#edeae4",
          secondary: "#9e9a94",
          muted: "#52504c",
          amber: "#d4922a"
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        sans: ["Syne", "Outfit", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        "grad-amber": "linear-gradient(135deg, #f5b942 0%, #d4922a 50%, #8a5a14 100%)",
        "grad-amber-text": "linear-gradient(90deg, #d4922a 0%, #f5b942 40%, #fcd672 60%, #d4922a 100%)",
        "grad-surface": "linear-gradient(160deg, #0f0f16 0%, #050507 100%)"
      },
      boxShadow: {
        "amber-sm": "0 0 20px rgba(212,146,42,0.12)",
        "amber-md": "0 0 40px rgba(212,146,42,0.20), 0 0 80px rgba(212,146,42,0.08)",
        "amber-lg": "0 0 60px rgba(212,146,42,0.30)",
        card: "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        lifted: "0 20px 60px rgba(0,0,0,0.7)"
      },
      animation: {
        "float-a": "float-a 9s ease-in-out infinite",
        "float-b": "float-b 6s ease-in-out infinite",
        "spin-slow": "spin 80s linear infinite",
        "spin-reverse": "spin 50s linear infinite reverse",
        "amber-pulse": "amber-pulse 4s ease-in-out infinite",
        blink: "blink-cursor 1s step-end infinite",
        shimmer: "text-shimmer 4s linear infinite",
        "grid-drift": "grid-drift 20s linear infinite",
        "orb-pulse": "orb-pulse 8s ease-in-out infinite",
        "draw-rule": "draw-rule 0.8s ease-out forwards"
      }
    }
  },
  plugins: []
};
