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
        RoyalPurple: "#6743EE",
        LightBlack: "rgba(0, 0, 0, 0.50)",
      },
      screens: {
        xs: "200px",
        smmd: "400px",
      },
    },
  },
  plugins: [],
};
export default config;
