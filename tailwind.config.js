module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "420px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        "theme-pattern": "url('/src/images/theme.png')",
      },
      maxWidth: {
        size: "10rem",
        small: "30px",
        mdSmall: "35px",
        mdSize: "140px",
      },
      colors: {
        base: "#f9f7f7",
        test: "#fbf6ec",
        green: "#05A068",
        black: "#473747",
        pink: "#ff2994",
        skillBase: "#EEF6F6",
        lightWhite: "#f1f5f9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
