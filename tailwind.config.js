/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#f2f6f9",
        "base-200": "#e9f0f5",
        "base-300": "#cfdee8",
        primary: "#007cf9",
        secondary: "#1e3957",
        accent: "#fb4564",
      },
    },
  },
  plugins: [],
};
