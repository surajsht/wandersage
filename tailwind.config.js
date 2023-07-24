/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-open-sans)"],
        secondary: ["var(--font-playfair)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: "#1B3B93",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1240px",
      },
      padding: {
        DEFAULT: "16px",
        sm: "0",
      },
    },
  },
  plugins: [],
};
