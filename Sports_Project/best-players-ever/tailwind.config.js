/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cubsBlue: '#1d4289',
        darkerGray: '#57606a',
        backgroundColor: '#151b23',
        metsblue : "#002D72"
      },
      fontFamily:{
        protest: ["Protest Guerrilla", "sans-serif"],
        raleway: ["RaleWay", "sans-serif"],
        titanOne: ["Titan One", "serif"],
        Inter: ["Inter", "sans-serif"],
        ConcertOne: ["Concert One", "sans-serif"]
      },
      spacing: {
        '45': '181px',
        '1': '0.25rem',
        '100': '100px'
      },
      screens: {
        '2xl': '1536px', // Example for larger screens
        'sm-xl': { max: '1440px' }, // Custom breakpoint for smaller "xl" screens
      }
    },
  },
  plugins: [],
}

