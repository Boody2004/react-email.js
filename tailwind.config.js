/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#111424",
        mainText: "#CE9E63",
      },
    },
  },
  plugins: [require("daisyui")],
};
