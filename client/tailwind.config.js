/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner-pattern': "url('/public/banner.png')",
      },
    },
    container: {
      padding: {
        DEFAULT: '0rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
  },
}

