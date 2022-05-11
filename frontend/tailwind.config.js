module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/images/hikingMountains.svg')",
        "banner-background": "url('../public/images/homeBannerBg.png')",
        "about-background": "url('../public/images/aboutBG.png')",
        "footer-background": "url('../public/images/bgFooter.svg')",
        "footer-background-sm": "url('../public/images/bgFooterSm.svg')",
        "section-blue-about":
          "linear-gradient(180deg, #181B64 0%, #1D2298 100%)",
        "form-btn": "linear-gradient(264.11deg, #3E42AE 4.4%, #181B64 85.92%)",
      },
      colors: {
        "royal-yellow": "#FFDB5C",
        "loyal-yellow": "#FFCF73",
        "royal-blue": "#181B64",
        "loyal-blue": "#41448F",
        "section-blue": "#181B64",
        "section-yellow": "#FFD986",
        "testimonial-grey": " #5A5A5A",
        "nav-background": "rgba(255, 255, 255, 0.9)",
        "form-btn-blueOne": "#3E42AE",
        "form-btn-blueTwo": "#181B64",
      },
      lineHeight: {
        "extra-loose": "54px",
        "2xLoose": "72px",
      },
      boxShadow: {
        "3xl": "-7px 6px 52px rgba(0, 0, 0, 0.08)",
        btnPrimary: "0px 4px 28px rgba(0, 0, 0, 0.1);",
      },
      height: {
        500: "34rem",
      },
      maxHeight: {
        699: "699px",
        516: "516px",
        1531: "1531px",
      },
      maxWidth: {
        266: "266px",
        546: "546px",
      },
      variants: {
        background: ["responsive", "hover", "focus", "group-hover"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
