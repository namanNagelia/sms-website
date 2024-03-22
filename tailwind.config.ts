import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#131F21",
        brandRed: "#CF6C57",
        brandWhite: "#EAE6DC",
        brandBlue: "#99B0BD",
        brandBlack: "#282828",
        brandGrey: "#929292",
        layerTwoGrey: "#2D3D43",
        graphYellow: "#F4AC3F",
        graphGreen: "#10B981",
        graphRed: "#CE2828",
        buttonBlue: "#5A8087",

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
