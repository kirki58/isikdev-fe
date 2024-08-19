const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : 'selector',
  theme: {
    extend: {
      fontFamily: {
        'monsterrat': ['Montserrat', 'system-ui'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        darker: {
          100 : "#888888",
          200 : "#777777",
          300 : "#666666",
          400 : "#555555",
          500 : "#444444",
          600 : "#333333",
          700 : "#222222",
          800 : "#111111",
          900 : "#000000",
        },
        lighter : {
          100: "#ffffff",
          200: "#eeeeee",
          300: "#dddddd",
          400: "#cccccc",
          500: "#bbbbbb",
          600: "#aaaaaa",
          700: "#999999",
          800: "#909090",
          900: "#888888",
        },
      },
    },
  },
  plugins: [],
};
