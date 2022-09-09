/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        aboutBack: "url('../public/aboutBack.svg')",
        flower: "url('../public/flower.webp')",
        projectsTemporaryBack: "url('../public/projectsBack.svg')",
        homeBack: "url('../public/homeBack.svg')",
      },

      dropShadow: {
        superpowerShadow: "0 0 10px rgba(124, 144, 153, 0.5)",
        machineLearningShadow: "0 0 10px rgba(136, 19, 55, 0.75)",
        whiteShadow: "0 0 10px #e7e5e480",
        mathShadow: "0 0 30px rgba(231, 229, 228, 0.5)",
        projectsTemporaryShadow: "0 0 10px rgba(248, 113, 113, 0.75)",
      },
    },
  },
  plugins: [],
};
