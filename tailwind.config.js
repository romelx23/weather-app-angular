/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "gray-transparent": "rgba(255, 255, 255, 0.564)",
      },
      height: {
        "80vh": "80vh",
      }
    },
  },
  plugins: [],
}