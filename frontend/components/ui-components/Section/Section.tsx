import React from "react";
import Button from "../Button/Button";

type Props = {
  bgColor: string;
  h1: string;
  p: string;

  page: "home" | "about";
};

export default function Section({ bgColor, h1, p, page }: Props) {
  //------- make component reusable ---------------
  const flexStyle =
    page === "home" && bgColor === "bg-section-blue"
      ? "flex-center + -mt-40 md:-mt-0"
      : page === "home" && bgColor === "bg-section-yellow"
      ? "flex-start"
      : page === "about" && bgColor === "bg-section-blue"
      ? "flex-center"
      : null;

  const chosenTextAlign =
    page === "home" && bgColor === "bg-section-blue"
      ? "text-center"
      : page === "home" && bgColor === "bg-section-yellow"
      ? "text-left"
      : page === "about" && bgColor === "bg-section-blue"
      ? "text-center"
      : null;

  const chosenTitle =
    page === "home" && bgColor === "bg-section-blue"
      ? "section-title2"
      : page === "home" && bgColor === "bg-section-yellow"
      ? "section-title2"
      : page === "about" && bgColor === "bg-section-blue"
      ? "section-sub-title"
      : null;

  const chosenParagraph =
    page === "home" && bgColor === "bg-section-blue"
      ? "section-paragraph-normal"
      : page === "home" && bgColor === "bg-section-yellow"
      ? "section-paragraph-normal"
      : page === "about" && bgColor === "bg-section-blue"
      ? "section-paragraph"
      : null;

  const chosenHeight =
    bgColor === "bg-section-yellow" || "bg-section-blue-about"
      ? "max-h-516"
      : null;

  const chosenTextColor =
    bgColor === "bg-section-yellow"
      ? "text-black"
      : bgColor === "bg-section-blue"
      ? "text-white"
      : bgColor === "bg-section-blue-about"
      ? "text-white"
      : null;

  const viewButton =
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
    ) : null;

  /* -------------------- */
  return (
    <div className={`w-full max-h-699 ${bgColor}`}>
      <div className="customContainer ">
        <div className={`${flexStyle} px-10 ${chosenHeight}`}>
          <h2 className={`${chosenTitle}  ${chosenTextColor}`}>{h1}</h2>
          <p
            className={` ${chosenParagraph} ${chosenTextColor} max-w-lg ${chosenTextAlign}`}
          >
            {p}
          </p>
          {viewButton}
        </div>
      </div>
    </div>
  );
}
