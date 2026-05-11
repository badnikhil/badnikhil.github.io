import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: "#0a0a0f",
          surface: "#111118",
          raised: "#16161f",
        },
        border: {
          subtle: "#1e1e2e",
          bright: "#2d2d42",
        },
        "text-primary": "#e2e8f0",
        "text-secondary": "#8892a4",
        "text-muted": "#4a5568",
        flutter: {
          DEFAULT: "#00b4d8",
          glow: "#0077b6",
          dim: "rgba(0,180,216,0.12)",
        },
        systems: {
          DEFAULT: "#39ff14",
          glow: "#1a7a00",
          dim: "rgba(57,255,20,0.10)",
        },
        cuda: {
          DEFAULT: "#76b900",
          dim: "rgba(118,185,0,0.12)",
        },
        gold: {
          DEFAULT: "#f59e0b",
          dim: "rgba(245,158,11,0.12)",
        },
        purple: {
          DEFAULT: "#a78bfa",
          dim: "rgba(167,139,250,0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "9999px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmerFlutter: {
          "0%": { backgroundPosition: "-400% center" },
          "100%": { backgroundPosition: "400% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        neonPulse: {
          "0%, 100%": { boxShadow: "2px 2px 0px #39ff14" },
          "50%": { boxShadow: "6px 6px 0px #39ff14" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        drawLine: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        toastSlideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        marquee: "marquee 35s linear infinite",
        shimmerFlutter: "shimmerFlutter 3s linear infinite",
        float: "float 3s ease-in-out infinite",
        neonPulse: "neonPulse 2.5s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        scaleIn: "scaleIn 0.4s ease-out forwards",
        drawLine: "drawLine 1.2s ease-out forwards",
        slideInLeft: "slideInLeft 0.6s ease-out forwards",
        slideInRight: "slideInRight 0.6s ease-out forwards",
        toastSlideUp: "toastSlideUp 0.3s ease-out forwards",
      },
      boxShadow: {
        flutter: "4px 4px 0px rgba(0,180,216,1)",
        systems: "4px 4px 0px rgba(57,255,20,1)",
        cuda: "4px 4px 0px rgba(118,185,0,1)",
        gold: "4px 4px 0px rgba(245,158,11,1)",
        purple: "4px 4px 0px rgba(167,139,250,1)",
        card: "4px 4px 0px #1e1e2e",
        "card-lg": "8px 8px 0px #1e1e2e",
      },
      backgroundImage: {
        "flutter-shimmer":
          "linear-gradient(90deg, transparent 0%, rgba(0,180,216,0.08) 50%, transparent 100%)",
        "systems-shimmer":
          "linear-gradient(90deg, transparent 0%, rgba(57,255,20,0.08) 50%, transparent 100%)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,180,216,0.08) 0%, transparent 70%)",
        "grid-pattern":
          "linear-gradient(rgba(30,30,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,46,0.3) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
