module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        figmaYellow: "#FFD600",
        pinkGradient: "#FC9294",
        blueGradient: "#6DC3EB",
        figmaBlack: "#202020",
      },
      fontFamily: { outfit: "Outfit" },
      dropShadow: {
        xsm: " 0 1px 1px 0 rgba(0, 0, 0, 0.05);",
      },
    },
  },
  plugins: [],
};
