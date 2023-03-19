/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ["Satisfy", "cursive"],
      mono: ['ui-monospace', 'SFMono-Regular'],
    }
  },
  plugins: [],
}
