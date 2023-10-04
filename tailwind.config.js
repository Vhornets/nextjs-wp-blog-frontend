/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "hot-gradient": "var(--hot-gradient)",
      },
    },
  },
  plugins: [],
};
