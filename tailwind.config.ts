import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blobA: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(6%, 8%) scale(1.15)" },
          "66%": { transform: "translate(-5%, 4%) scale(0.9)" },
        },
        blobB: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-8%, -6%) scale(1.1)" },
          "66%": { transform: "translate(5%, -3%) scale(0.92)" },
        },
        gridPan: {
          "0%": { backgroundPosition: "0px 0px, 0px 0px" },
          "100%": { backgroundPosition: "48px 48px, 48px 48px" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
        blobA: "blobA 18s ease-in-out infinite",
        blobB: "blobB 22s ease-in-out infinite",
        gridPan: "gridPan 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
