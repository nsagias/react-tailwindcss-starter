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
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite"
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-45deg)"},
          "50%": { transform: "rotate(45deg)"}
        },
      },
      colors: {
        primary: "#1a237e",
        secondary: "#b3e5fc",
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
