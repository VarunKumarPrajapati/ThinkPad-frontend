/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        1: "0 0 5px 0px rgba(0,0,0,0.2)",
        2: "0 0 5px 0px rgba(0,0,0,0.4)",
        card: "0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)",
        input: "0 1px 1px 0 rgba(65,69,73,.3),0 1px 3px 1px rgba(65,69,73,.15)",
      },

      colors: {
        "icon-color": "rgb(95,99,104)",
        "Icon-1": "rgba(32,33,36,0.81)",
        "active-icon-color": "rgb(254,239,195)",
        "transparent-1": "rgba(0,0,0,0.4)",
        Coral: "rgb(250,175,168)",
        Peach: "rgb(243,159,118)",
        Sand: "rgb(255,248,184)",
        Mint: "rgb(226,246,211)",
        Sage: "rgb(180,221,211)",
        Fog: "rgb(212,228,237)",
        Storm: "rgb(174,204,220)",
        Duck: "rgb(211,191,219)",
        Blossom: "rgb(246,226,221)",
        Clay: "rgb(233,227,212)",
        Chalk: "rgb(239,239,241)",
        Default: "rgb(255,255,255)",
      },

      fontFamily: {
        poppins: "Poppins, serif",
        roboto: "Roboto, sans-serif",
      },

      animation: {
        bottomUp: "bottom-up 0.3s ease-out",
        slideIn: "slideIn 0.2s ease-out",
        slideOut: "slideOut 0.2s ease-out",
        "slide-in-top": "slide-in-top 0.3s ease-out forwards",
        "slide-out-top": "slide-out-top 0.3s ease-in forwards",
        "slide-up": "slide-up 0.2s ease-out  forwards",
      },

      keyframes: {
        "bottom-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": {
            transform: "translateX(-240px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideOut: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-240px)",
          },
        },

        "slide-in-top": {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },

        "slide-out-top": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-30px)", opacity: "0" },
        },

        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
