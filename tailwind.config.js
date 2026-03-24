/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
      },
      colors: {
        teal: {
          50:  "#E8F5F2",
          100: "#C8E8E2",
          200: "#B2D8D2",
          300: "#7BBFB6",
          400: "#3DA097",
          500: "#0F6B5E",
          600: "#0D5C51",
          700: "#0A4D43",
          800: "#073D35",
          900: "#042E28",
        },
        navy: {
          900: "#0B1F3A",
          800: "#122848",
          700: "#1a3558",
        },
      },
    },
  },
  plugins: [],
}
