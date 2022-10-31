/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      title: "4vw",
      huge: "3.5vw",
      big: "2.25vw",
      subtitle: "1.25vw",
      plain: "1vw",
    },

    borderRadius: {
      easy: "1vw",
    },

    extend: {
      backgroundImage: {
        aboutBack: "url('./assets/graphics/aboutCurve.svg')",
        flower: "url('./assets/graphics/flower.webp')",
        homeBack: "url('./assets/graphics/homeCurve.svg')",
        sketchLine: "url('./assets/graphics/sketchLine.svg')",
      },

      dropShadow: {
        softLight: "0 10px 10px rgba(231, 229, 228, 0.5)",
        projectsTemporaryShadow: "0 0 10px rgba(248, 113, 113, 0.75)",
        bulbLight: "0 0 10px rgba(255, 212, 24, 0.5)",
      },
    },
  },
  plugins: [],
};
