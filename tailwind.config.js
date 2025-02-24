module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './sanity/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dGrey: "#292f36",
        primary: "#23418a", // Jouw primaire kleur
        secondary: "#6b7280",
      },
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "Lucida", "sans-serif"],
      },

    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
