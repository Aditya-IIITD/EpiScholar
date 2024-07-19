/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-pink": "inset 0 0 30px -5px #fdb4df",
      },
    },
  },
  plugins: [],
};
