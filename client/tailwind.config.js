/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-pattern": "url('/assets/img/banner.jpg')",
      },
    },
    container: {
      padding: {
        DEFAULT: "0rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
  },
};
