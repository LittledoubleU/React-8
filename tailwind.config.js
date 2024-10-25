/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{css,jsx}",                // All CSS and JSX files in src
    "./src/components/**/*.{css,jsx}",     // CSS and JSX files in components
    "./index.html"                         // Root index.html file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
