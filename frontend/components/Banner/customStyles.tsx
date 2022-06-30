export const customStyles = (
  page: "home" | "about" | "login" | "find" | "buy" | "sell" | "404"
) => {
  /* ----------make component reusable---------- */

  const layoutStyle =
    page === "home"
      ? "bg-banner-background + bg-center  mb-20 sm:mb-10 md:mb-0 "
      : page === "about"
      ? "bg-about-background + bg-bottom"
      : page === "login"
      ? "bg-login-background + bg-center flex flex-wrap md:flex-nowrap "
      : page === "find"
      ? "bg-find-background  + bg-center flex flex-wrap md:flex-nowrap "
      : page === "buy"
      ? "bg-buy-background + bg-center flex flex-wrap md:flex-nowrap "
      : page === "sell"
      ? "bg-sell-background + bg-center flex flex-wrap md:flex-nowrap "
      : page === "404"
      ? "bg-buy-background + bg-center flex flex-wrap md:flex-nowrap "
      : null;

  const flexStyle =
    page === "about"
      ? "flex-center mx-auto"
      : page === "home"
      ? "flex-start + md:w-3/5"
      : page === "login"
      ? "flex-start mx-auto "
      : page === "find"
      ? "flex-start mx-auto  "
      : page === "buy"
      ? "flex-start mx-auto"
      : page === "sell"
      ? "flex-start mx-auto"
      : page === "404"
      ? "flex-center mx-auto md:w-1/3"
      : null;

  const titleStyle =
    page === "about"
      ? "text-center leading-extra-loose"
      : page === "home"
      ? "text-left leading-7 md:text-center md:leading-2xLoose"
      : page === "login"
      ? "text-left leading-7 md:text-center md:leading-2xLoose"
      : page === "find"
      ? "text-left leading-7 md:text-center md:leading-2xLoose"
      : page === "buy"
      ? "text-left leading-7 md:text-center md:leading-2xLoose"
      : page === "sell"
      ? "text-left leading-7 md:text-center md:leading-2xLoose"
      : page === "404"
      ? "text-center leading-extra-loose"
      : null;

  /* ----------------------------- */

  return { layoutStyle, flexStyle, titleStyle };
};
