/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cubsBlue: '#1d4289',
      },
      fontFamily:{
        protest: ["Protest Guerrilla", "sans-serif"]
      }
    },
  },
  plugins: [],
}

