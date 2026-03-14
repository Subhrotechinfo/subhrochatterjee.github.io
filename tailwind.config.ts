import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Display"', '"Helvetica Neue"', "Arial", "sans-serif"],
        mono: ['"SF Mono"', '"Fira Code"', '"Fira Mono"', '"Roboto Mono"', "monospace"],
        body: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Text"', '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      colors: {
        bg: "#ffffff",
        bg2: "#f8fafc",
        surface: "#f1f5f9",
        border: "#e2e8f0",
        accent: "#0ea5e9",
        accent2: "#f97316",
        muted: "#94a3b8",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        pulse2: "pulse2 2s ease-in-out infinite",
        "slide-right": "slideRight 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.8)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
