/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.html", // All HTML files in the root directory
    "./*.js", // All JS files in the root directory
    "./pages/**/*.{html,js}", // All HTML and JS files in the pages directory and its subdirectories
    "./assets/**/*.{html,js}", // If you have HTML or JS in the public directory
  ],

  theme: {
    extend: {
      backgroundImage: {
        "banner-pattern": "url('/assets/img/banner.jpg')",
        "banner-game-pattern": "url('/assets/img/game-banner.jpg')",
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
