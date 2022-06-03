export const customStyles = (page: "home" | "about" | "login") => {
  /* ----------make component reusable---------- */

  const layoutStyle =
    page === "home"
      ? "bg-banner-background + bg-center mb-20 sm:mb-10 md:mb-0 "
      : page === "about"
      ? "bg-about-background + bg-bottom"
      : page === "login"
      ? "bg-login-background + bg-center flex flex-wrap md:flex-nowrap "
      : null;

  const flexStyle =
    page === "about"
      ? "flex-center mx-auto"
      : page === "home"
      ? "flex-start + md:w-3/5"
      : page === "login"
      ? "flex-start mx-auto md:w-3/5 "
      : null;

  const titleStyle =
    page === "about"
      ? "text-center leading-extra-loose"
      : page === "home"
      ? "text-left leading-7 md:text-center md:leading-2xLoose"
      : page === "login"
      ? "text-left leading-7 md:text-center md:leading-2xLoose"
      : null;

  /* ----------------------------- */

  return { layoutStyle, flexStyle, titleStyle };
};
