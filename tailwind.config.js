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
        "hero-pattern": "url('/src/images/computer.png')",
      },
      maxWidth: {
        size: "8rem",
      },
      colors: {
        base: "#fbf6ec",
        green: "#006D46",
        black: "#373737",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
