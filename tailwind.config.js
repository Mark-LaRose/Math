/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'permanent-marker': ['"Permanent Marker"', 'cursive'],
        'sacramento': ['"Sacramento"', 'cursive'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'indie-flower': ['"Indie Flower"', 'cursive'],
      },
    },
  },
  plugins: [],
}