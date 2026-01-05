/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        matrix: {
          bg: "#050505", // Deep black-grey (softer than #000)
          card: "#0a0a0a", // Card background
          border: "#333333", // Subtle borders
          green: "#00ff41", // THE Matrix Green
          dim: "rgba(0, 255, 65, 0.1)", // Green tint
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.matrix.green"), 0 0 20px theme("colors.matrix.dim")',
        "neon-strong":
          '0 0 10px theme("colors.matrix.green"), 0 0 40px theme("colors.matrix.green")',
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
