/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dGrey': '#292f36',
      },
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
