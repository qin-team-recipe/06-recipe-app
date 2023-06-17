/* eslint-disable @typescript-eslint/no-var-requires */
// const { blue, mauve, mauveA, tomato } = require('@radix-ui/colors');
// const colors = require('tailwindcss/colors');

// const customColors = {
//   primary: {
//     DEFAULT: tomato.tomato9,
//     foreground: tomato.tomato11,
//   },
//   secondary: blue.blue11,
//   background: colors.white,
//   foreground: mauve.mauve12,
//   border: mauve.mauve7,
//   destructive: {
//     DEFAULT: mauve.mauve8,
//     foreground: mauve.mauve9,
//   },
//   surface: {
//     primary: mauve.mauve1,
//     secondary: mauve.mauve4,
//     tertiary: mauve.mauve6,
//   },
//   grey: {
//     DEFAULT: mauve.mauve10,
//     foreground: mauve.mauve11,
//     alpha: mauveA.mauveA10,
//   },
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-radix-colors')],
};
