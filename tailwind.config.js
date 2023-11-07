/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
        "open-sans": ["Open Sans"],
        "pap": ["papyrus"],
        "cur": ["cursive"],
        "ger": ["georgia"],
        
      
      },

      listStyleType: {
        "decimal-zero": ["decimal-leading-zero"],
        "decimal-number": ["1,"]
      },

      colors: {
        red: "#DC0404",
        black: "#303030",
        gold: "#F5AD32",
        white: "#FFF",
        dark: "#000000",
        grey: "#EFEDED",
        "light-brown": "#FFFBF5",
        "dark-grey": "#262626",
        "light-blue": "#9cdeff",
        hrLine: "#1212124D",
        primaryBlue: "#2069f7",
        secondary: {
          100: "#303030",
        },
        
    multiColor:{
    red: "#DC0404",
        black: "#303030",
        gold: "#F5AD32",
  
        },
      },
      backgroundColor: {
        darkBg: "#1D1D1D",
        primary_yellow: "#F5AD32",
        secondary_yellow: "#FEF5E7",
        lightGrey: "#F4F4F4",
        sky_blue: "#C4E2ED",
        primary_pink: "#EBD7E5",
        dance_blue: "#F6F6F2",


      },
    },
  },
  plugins: [],
};