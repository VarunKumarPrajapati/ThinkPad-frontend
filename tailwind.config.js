/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        1: "0 0 5px 0px rgba(0,0,0,0.2)",
        2: "0 0 5px 0px rgba(0,0,0,0.4)",
      },

      colors: {
        "icon-color": "rgb(95,99,104)",
        "Icon-1": "rgba(32,33,36,0.81)",
        "active-icon-color": "rgb(254,239,195)",
        "transparent-1": "rgba(0,0,0,0.4)",
      },

      fontFamily: {
        poppins: "Poppins, serif",
        roboto: "Roboto, sans-serif",
      },

      animation: {
        bottomUp: "bottom-up 0.3s ease-out",
      },

      keyframes: {
        "bottom-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
