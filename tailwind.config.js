// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2952",
        secondary: "#1faa9e",
        lightGray: "#EBEBEB",
        transparent: "transparent",
      },
      backgroundImage: {
        "hero-background": "url('/src/assets/images/header-bg.svg')",
        pattern: "url('/src/assets/images/pattern.svg')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("daisyui")],
};
