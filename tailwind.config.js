/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 6s ease infinite",
        shine: 'shine 1s ease-in-out',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        shine: {
        '0%': { transform: 'translateX(-100%) rotate(25deg)', opacity: '0' },
        '50%': { opacity: '0.5' },
        '100%': { transform: 'translateX(150%) rotate(25deg)', opacity: '0' },
      },
      },
      backgroundSize: {
        "200": "200% 200%",
      },
    },
  },
  plugins: [],
};
