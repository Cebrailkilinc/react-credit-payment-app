/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
       ibarra: ['Ibarra Real Nova', "serif"],
       nanum: ['Nanum Gothic', "sans-serif"],
       source:['Source Sans Pro', "sans-serif"]
        
      }, //end of fontFamily
    },
  },
  plugins: [],
}
