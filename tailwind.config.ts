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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        textBlack1: "var(--textBlack1)",
        textBlack2: "var(--textBlack2)",
        textWhite: "var(--textWhite)",
        textGrey: "var(--textGrey)",
        placeholder: "var(--placeholderGrey)",
        error: "var(--error)",
      },
      fontFamily: {
        default: ["Alverata", "Graphik"],
        aleverata: ["Alverata", "Graphik"],
        graphik: ["Graphik", "Alverata"],
      },
    },
  },
  plugins: [],
};
export default config;
