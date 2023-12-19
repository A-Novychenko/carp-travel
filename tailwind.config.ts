import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "320px",
      md: "480px",
      lg: "768px",
      xl: "1440px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "20px",
        lg: "32px",
        xl: "104px",
      },
    },
    colors: {
      primary: "#FFF",
      error: "#FF5757",
      bgc50: "rgba(2, 15, 8, 0.50)",
      bgc75: "rgba(2, 15, 8, 0.75)",
      bgc85: "rgba(2, 15, 8, 0.85)",
      bgcMenu: "rgba(1, 10, 5, 0.75)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "head-gradient":
          "linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.00) 100%)",
      },
      backdropBlur: {
        xl25px: "25px",
      },
      width: {
        mob: "480px",
        tab: "768px",
        desc: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
