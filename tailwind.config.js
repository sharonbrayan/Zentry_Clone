// tailwind.config.js (project root)
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        robert: ['Robert', 'sans-serif'],
        circular: ['CircularWeb', 'sans-serif'],
        general: ['General', 'sans-serif'],
        zentry: ['zentry', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
