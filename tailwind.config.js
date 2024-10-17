/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-sky":
          "linear-gradient(90deg, rgba(45,228,156,1) 0%, rgba(0,203,208,1) 50%, rgba(0,113,201,1) 100%)",
        "gradient-cloud":
          "linear-gradient(90deg, rgba(212,255,217,1) 0%, rgba(195,255,243,1) 50%, rgba(190,184,255,1) 100%);",
      },
      boxShadow: {
        "default": "3px 3px 5px 1px rgba(102,102,102,0.5)"
      }
    },
  },
  plugins: [],
};
