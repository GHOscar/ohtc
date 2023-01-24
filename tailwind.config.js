/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 71px rgba(1, 43, 107, 0.13)'
      },
    },
  },
  plugins: [],
}