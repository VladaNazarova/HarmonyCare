/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".client/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/forms", "flowbite/plugin"],
  
};
