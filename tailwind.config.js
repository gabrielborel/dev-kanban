/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: 'Montserrat, sans-serif',
        tri: 'Trispace, sans-serif'
      }
    },
  },
  plugins: [],
}