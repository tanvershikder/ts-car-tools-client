module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: [
      {
        light: {
        primary: "#0FCFEC",
        secondary: "#19D3AE",
        accent: "#bd20e5",
        neutral: "#3A4256",
        "base-100": "#ffffff",
      }
    }
    ],
  },
  plugins: [require("daisyui")],
}
