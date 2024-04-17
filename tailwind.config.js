/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

