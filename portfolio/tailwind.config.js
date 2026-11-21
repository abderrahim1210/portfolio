/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#0078ff",
        paper: "#fafaf7",   // light background
        ink: "#0c0e12",     // dark background
      },
      fontFamily: {
        sans: ["Inter", "Cairo", "system-ui", "sans-serif"],
        display: ["Outfit", "Cairo", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
