/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayText: "#a1a4b5",
        navText: "#606169",
        bgColor: "#EAEEFE",
        fColor: "#808080",
      },
      fontSize: {
        midText: "1.1rem",
        bigText: "1.4rem",
      },
      boxShadow: {
        custom: "0px 7px 24px  rgba(27, 27, 27, 0.08) ",
      },
    },
  },
  plugins: [],
};
