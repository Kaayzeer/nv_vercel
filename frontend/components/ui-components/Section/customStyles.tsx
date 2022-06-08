import Button from "../Button/Button";

export const customStyles = (page: string) => {
  //------- make BSFSection component reausable ---------------//
  const bgColor =
    page === "find"
      ? " bg-section-blue "
      : page === "sell"
      ? " bg-section-green "
      : page === "buy"
      ? " bg-section-yellow2 "
      : "bg-white";

  const chosenTextColor =
    page === "find"
      ? "text-white"
      : page === "buy"
      ? "text-black"
      : page === "sell"
      ? "text-white"
      : "";
  //-----------------------------------------------------//

  return { bgColor, chosenTextColor };

  /* -------------------- */
};

const sectionCustomStyles = (page: string, bgColor?: string) => {
  //------- make section component reausable ---------------//

  const flexStyle =
    page === "home" && bgColor === "bg-section-blue"
      ? "flex-center + -mt-40 md:-mt-0"
      : page === "home"
      ? "flex-start"
      : "flex-center";

  const chosenTextAlign =
    page === "home" && bgColor === "bg-section-blue"
      ? "text-center"
      : page === "home" && bgColor === "bg-section-yellow"
      ? "text-left"
      : "text-center";

  const chosenTitle =
    page === "home" && bgColor === "bg-section-blue"
      ? "section-title2"
      : "section-sub-title";

  const chosenParagraph =
    page === "home" && bgColor === "bg-section-blue"
      ? "section-paragraph-normal"
      : "section-paragraph";

  const chosenTextColor =
    bgColor === "bg-section-yellow"
      ? "text-black"
      : bgColor === "bg-section-blue"
      ? "text-white"
      : bgColor === "bg-section-blue-about"
      ? "text-white"
      : null;

  const chosenButton =
    bgColor === "bg-section-yellow" ? (
      <Button
        linkHref="/about"
        color="text-white"
        buttonText="read more"
        type="btnPrimary"
      />
    ) : page === "about" && bgColor === "bg-section-blue" ? (
      <Button
        linkHref="/about"
        color="text-black"
        buttonText="Contact us"
        type="btnTertiary"
      />
    ) : page === "find" ? (
      <Button
        linkHref="/about"
        color="text-black"
        buttonText="Contact us"
        type="btnTertiary"
      />
    ) : page === "buy" ? (
      <Button
        linkHref="/about"
        color="text-white"
        buttonText="Contact us"
        type="btnFourthiary"
      />
    ) : page === "sell" ? (
      <Button
        linkHref="/about"
        color="text-black"
        buttonText="Contact us"
        type="btnTertiary"
      />
    ) : null;

  //-----------------------------------------------------//

  return {
    flexStyle,
    chosenButton,
    chosenParagraph,
    chosenTextAlign,
    chosenTextColor,
    chosenTitle,
  };

  /* -------------------- */
};

export default sectionCustomStyles;
