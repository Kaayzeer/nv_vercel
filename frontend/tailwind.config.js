module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/images/hikingMountains.svg')",
        "banner-background": "url('../public/images/bannerBackground1.png')",
      },
      colors: {
        "royal-yellow": "#FFDB5C",
        "loyal-yellow": "#FFCF73",
        "royal-blue": "#181B64",
        "loyal-blue": "#41448F",
      },
    },
  },
  plugins: [],
};
