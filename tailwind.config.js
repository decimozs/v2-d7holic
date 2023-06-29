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
        default: "#484848",
        neon: "#00FF94",
        olive: "#00100F",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      padding: {
        p1: "1rem",
        p2: "2rem",
        p3: "3rem",
        p4: "4rem",
        p5: "5rem",
      },
      margin: {
        m1: "1rem",
        m2: "2rem",
        m3: "3rem",
        m4: "4rem",
        m5: "5rem",
      },
      fontSize: {
        fs1: "1rem",
        fs2: "2rem",
        fs3: "3rem",
        fs4: "4rem",
        fs5: "5rem",
      },
      maxWidth: {
        mw: "450px",
      },
    },
  },
  plugins: [],
};
