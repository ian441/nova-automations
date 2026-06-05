import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        cloud: "#F6F9FC",
        electric: "#2563EB",
        mint: "#13B981",
        sunrise: "#F59E0B"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 32, 51, 0.10)",
        glow: "0 0 0 1px rgba(37, 99, 235, 0.12), 0 20px 70px rgba(37, 99, 235, 0.16)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
