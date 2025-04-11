import type { Config } from "tailwindcss";

const config: Config = {
  // darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx,mdx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
      },
      colors: {
        primary: "#4D3BDB",
        textGrey: "#605C7A",
        creamBackground: "#F5F5F7",
        navBorder: "rgba(86, 65, 243, 0.2)",
      },
      backgroundColor: {
        primaryOpacity: "rgba(235, 232, 254, 1.00)",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};
export default config;
