/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...fontFamily.sans],
        mono: ["Geist Mono", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
