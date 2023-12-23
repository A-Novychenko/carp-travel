import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1440px",
    },
    container: {
      padding: {
        DEFAULT: "16px",
        xs: "20px",
        sm: "20px",
        md: "32px",
        lg: "104px",
      },
    },
    colors: {
      primary: "#FFF",
      error: "#FF5757",
      bgc50: "rgba(2, 15, 8, 0.50)",
      bgc75: "rgba(2, 15, 8, 0.75)",
      bgc85: "rgba(2, 15, 8, 0.85)",
      "bgc-menu": "rgba(1, 10, 5, 0.75)",
      "bgc-button": "rgba(255, 255, 255, 0.10)",
      "bgc-input": "rgba(255, 255, 255, 0.05)",
      "count-slide-dark": "rgba(255, 255, 255, 0.20)",
    },
    fontSize: {
      "10": "10px",
      "12": "12px",
      "13": "13px",
      "14": "14px",
      "16": "16px",
      "18": "18px",
      "20": "20px",
      "22": "22px",
      "24": "24px",
      "30": "30px",
      "37": "37px",
      "40": "40px",
      "43": "43px",
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
        "180": "180px",
        "200": "200px",
        "280": "280px",
      },
      lineHeight: {
        "0.7": "0.7",
        "0.85": "0.85",
        "1.4": "1.4",
        "1.43": "1.43",
        "1.6": "1.6",
        "2": "2",
      },
    },
  },
  plugins: [],
};
export default config;
