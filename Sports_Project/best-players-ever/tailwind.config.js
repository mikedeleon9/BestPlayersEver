/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cubsBlue: '#1d4289',
        darkerGray: 'rgb(35, 37, 36 )',
        backgroundColor: 'rgb(21 21 22)'
      },
      fontFamily:{
        protest: ["Protest Guerrilla", "sans-serif"],
        raleway: ["RaleWay", "sans-serif"],
        titanOne: ["Titan One", "serif"],
        Inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

