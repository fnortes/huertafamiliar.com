module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-max-content-auto": "minmax(243px, 1fr) 3fr minmax(160px, 1fr)",
      },
      colors: {
        green: {
          primary: "#7fb241",
          secondary: "#719c40",
        },
      },
      maxWidth: {
        48: "12rem",
      },
    },
  },
  plugins: [],
};
