import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gym-dark": "#111111",
        "gym-card": "#1a1a1a",
        "gym-neon": "#dfff00",
        "gym-gray": "#888888",
      },
      fontFamily: {
        heading: ["var(--font-teko)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

