/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite"
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ["Satisfy", "cursive"],
      mono: ['ui-monospace', 'SFMono-Regular'],
    }
  },
  plugins: [],
}
