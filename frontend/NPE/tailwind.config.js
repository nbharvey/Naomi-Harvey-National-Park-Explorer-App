import { COLOR_PALETTE } from './src/assets/colors/colors'
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      'NaomiFont2': ['NaomiFont2', 'Arial', 'sans-serif'],
    },
    colors: {
      ...COLOR_PALETTE,
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.writing-vertical-rl': { writingMode: 'vertical-rl' },
        '.writing-vertical-lr': { writingMode: 'vertical-lr' },
      });
    }
  ],
});
