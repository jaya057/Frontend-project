import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050608",
          900: "#0a0d12",
          850: "#0f141c",
          800: "#141b26"
        },
        plasma: "#5eead4",
        aurora: "#a78bfa",
        ember: "#f59e0b"
      },
      boxShadow: {
        glow: "0 0 45px rgba(94, 234, 212, 0.14)",
        card: "0 18px 70px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
