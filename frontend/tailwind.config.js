module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/images/hikingMountains.svg')",
        "banner-background": "url('../public/images/bBg.png')",
      },
      colors: {
        "royal-yellow": "#FFDB5C",
        "loyal-yellow": "#FFCF73",
        "royal-blue": "#181B64",
        "loyal-blue": "#41448F",
        "section-blue": "#181B64",
      },
      boxShadow: {
        "3xl": "-7px 6px 52px rgba(0, 0, 0, 0.08)",
        btnPrimary: "0px 4px 28px rgba(0, 0, 0, 0.1);",
      },
      height: {
        500: "34rem",
      },
      variants: {
        background: ["responsive", "hover", "focus", "group-hover"],
      },
    },
  },
  plugins: [],
};
