/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-sky":
          "linear-gradient(90deg, rgba(45,228,156,1) 0%, rgba(0,203,208,1) 50%, rgba(0,113,201,1) 100%)",
      },
    },
  },
  plugins: [],
};
