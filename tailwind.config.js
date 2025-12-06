/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#FF27AD",
        "primary-dark": "#F1129C",
        secondary: "#0099A8",
        "secondary-dark": "#138A96",
      },
    },
  },
  plugins: [],
};
