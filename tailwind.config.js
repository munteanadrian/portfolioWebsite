/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#1e254f",
        "brand-light": "#fcf8fa",
      },
      fontFamily: {
        martian: "martian",
        outfit: "outfit",
      },
      backgroundImage: {
        "dot-pattern": "url('../public/images/grid.webp')",
      },
    },
  },
  plugins: [],
};
