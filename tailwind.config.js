/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: '#D8C8C8',
        thunderbird: '#C32020'
      },
      fontFamily: {
        heading: 'Westmount',
        body: 'Westmount',
        outline: 'Westmount Outline'
      }
    },
  },
  plugins: [],
}
