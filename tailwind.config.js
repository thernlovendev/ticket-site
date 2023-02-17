module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lightBlue: "#4DB5F0",
        white: "#fefefe",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    fontSize: {
      xs: ["12px"],
      sm: ["15px"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
