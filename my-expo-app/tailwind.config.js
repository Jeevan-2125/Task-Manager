/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}','./src/**/*.{js,ts,tsx}','./app/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        background: "#0F1015",
        surface: "#1C1D24",
    },
  },
},
  plugins: [],
};
