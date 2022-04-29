import React from "react";
import Button from "../Button/Button";

type Props = {
  bgColor: string;
  h1: string;
  p: string;
  flex: "flex-center" | "flex-start";
  textAlign: "text-center" | "text-left";
};

export default function Section({ bgColor, h1, p, flex, textAlign }: Props) {
  const chosenHeight = bgColor === "bg-section-yellow" ? "h-96" : null;
  const chosenTextColor =
    bgColor === "bg-section-yellow" ? "text-black" : "text-white";
  const viewButton =
    bgColor === "bg-section-yellow" ? (
      <Button
        linkHref="/about"
        color="text-white"
        buttonText="read more"
        type="btnPrimary"
      />
    ) : null;
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="customContainer ">
        <div className={`${flex} px-10 ${chosenHeight}`}>
          <h1 className={`section-title ${chosenTextColor}`}>{h1}</h1>
          <p
            className={`section-paragraph ${chosenTextColor} max-w-lg ${textAlign}`}
          >
            {p}
          </p>
          {viewButton}
        </div>
      </div>
    </div>
  );
}
