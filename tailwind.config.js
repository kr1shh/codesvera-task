/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A285B",
        accent: "#8F43EE",
        text_primary: "#181643",
        text_secondary: "#000000",
      },
      fontFamily: {
        montserrat: "Montserrat",
        quicksand: "Quicksand",
      },
    },
  },
  plugins: [],
}
