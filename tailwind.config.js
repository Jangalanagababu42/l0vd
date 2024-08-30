// tailwind.config.js (if using ES Modules)
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1440px",
        },
      },
    },
  },
  plugins: [],
};
