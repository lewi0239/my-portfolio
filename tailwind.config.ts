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
        background: "#fff",
        foreground: "#fff",
      },
      keyframes: {
        slideInRight: {
          "0%": { opacity: 0, transform: "translateX(10rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-10rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideInRight: "slideInRight 1s ease-in-out forwards",
        slideInLeft: "slideInLeft 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
