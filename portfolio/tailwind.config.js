/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        aboutBack: "url('../public/aboutBack.svg')",
        terminalElement: "url('../public/terminalBack.svg')",
      },

      dropShadow: {
        superpowerShadow: "0 0 10px rgba(124, 144, 153, 0.5)",
      },
    },
  },
  plugins: [],
};
