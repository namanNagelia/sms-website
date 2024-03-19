import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#131F21",
        brandRed: "#CF6C57",
        brandWhite: "#EAE6DC",
        brandBlue: "#99B0BD",
        brandBlack: "#282828",
        ...colors,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      dinBold: ["var(--font-dinBold)"],
      dinAlternate: ["var(--font-dinAlternate)"],
      dinCondensed: ["var(--font-dinCondensed)"],
    },
  },
  plugins: [],
};

export default config;