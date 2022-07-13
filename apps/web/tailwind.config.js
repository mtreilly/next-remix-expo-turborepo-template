module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}", "./src/**/*.html"],
  safelist: [],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
    },
  },
  corePlugins: {
    animation: true,
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
