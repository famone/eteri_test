// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'offset': 'calc(100% - 32px)',
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dim_gray: "#F6F6F6",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontSize: {
        '2xl': '22px',
      },
    },
    fontFamily: {
      poppins: ["Avenir", "sans-serif"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1408px",
      xl: "1300px",
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

