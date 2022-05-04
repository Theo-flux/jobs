const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "var(--color-white)",
      black: "var(--color-black)",

      lilac: "var(--color-lilac)",
      chambray: "var(--color-chambray)",
      heather: "var(--color-heather)",
      white: "var(--color-white)",
      black: "var(--color-black)",
      dogerblue: "var(--color-dodgerBlue)",
      steelgray: "var(--color-steelgray)", 
      silver: "var(--color-silver)",
      concrete: "var(--color-concrete)",
      tundora: "var(--color-tundora)"
    },
    extend: {
      fontFamily: {
        poppins: ["poppins", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}