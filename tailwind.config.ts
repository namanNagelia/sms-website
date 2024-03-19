import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#131F21',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brandRed: "#CF6C57",
        brandWhite: "#EAE6DC",
        brandBlue: "#99B0BD",
        brandBlack: "#162126",
      },
      fontFamily: {
        dinBold: ["var(--font-dinBold)"],
        dinAlternate: ["var(--font-dinAlternate)"],
        dinCondensed: ["var(--font-dinCondensed)"],
      },
    },
  },
  plugins: [],
};
export default config;
