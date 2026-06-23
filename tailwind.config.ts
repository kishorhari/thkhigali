import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#05080c",
          bgSoft: "#0a0e14",
          red: "#e7293c",
          redDeep: "#c0182b",
          redSoft: "#612b2b",
          grey1: "#dadadb",
          grey2: "#aaa9ad",
          grey3: "#5b5b5b",
          grey4: "#484848",
        },
      },
      fontFamily: {
        body: ["var(--font-body)"],
        script: ["var(--font-script)"],
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        float: "float 4s ease-in-out infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "radial-gradient(circle at 20% 80%, rgba(192,57,43,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245,197,24,0.15) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
