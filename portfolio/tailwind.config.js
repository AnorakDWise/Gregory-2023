/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        aboutBack: "url('../public/aboutBack.svg')",
        terminalElement: "url('../public/terminalBack.svg')",
        machineLearningElement: "url('../public/ML.svg')",
        eduElement: "url('../public/Education.svg')",
        flower: "url('../public/flower.webp')",
      },

      dropShadow: {
        superpowerShadow: "0 0 10px rgba(124, 144, 153, 0.5)",
        machineLearningShadow: "0 0 10px rgba(136, 19, 55, 0.75)",
      },
    },
  },
  plugins: [],
};
