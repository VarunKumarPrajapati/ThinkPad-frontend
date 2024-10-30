/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "icon-color": "rgb(95,99,104)",
        "active-icon-color": "rgb(254,239,195)",
      },
      fontFamily: {
        "material-icons": "Material Icons",
        poppins: "Poppins, serif",
        roboto: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
};
