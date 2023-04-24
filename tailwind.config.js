/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",

  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: {
          DEFAULT: "#E3350D",
          50: "#FEEBEB",
          100: "#FED6D6",
          200: "#FCA4A4",
          300: "#F87272",
          400: "#F64040",
          500: "#E3350D",
          600: "#B3290A",
          700: "#821E08",
          800: "#511406",
          900: "#200A03",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        black: {
          DEFAULT: "#000000",
        },
      },
    },
  },
  plugins: [],
};
