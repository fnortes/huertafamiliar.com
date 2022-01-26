module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-max-content": "auto max-content",
      },
      colors: {
        green: {
          primary: "#7fb241",
          secondary: "#719c40",
        },
      },
    },
  },
  plugins: [],
};
