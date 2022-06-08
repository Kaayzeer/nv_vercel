import React from "react";

//dynamic styles
import styles from "./customStyles";

type Props = {
  bgColor: string;
  h1: string;
  p: string;

  page: "home" | "about" | "find" | "buy" | "sell";
};

export default function Section({ bgColor, h1, p, page }: Props) {
  return (
    <div className={`w-full max-h-699 ${bgColor}`}>
      <div className="customContainer ">
        <div className={`${styles(page, bgColor).flexStyle} px-10 max-h-516`}>
          <h2
            className={`${styles(page, bgColor).chosenTitle}  ${
              styles(page, bgColor).chosenTextColor
            }`}
          >
            {h1}
          </h2>
          <p
            className={` ${styles(page, bgColor).chosenParagraph} ${
              styles(page, bgColor).chosenTextColor
            } max-w-lg ${styles(page, bgColor).chosenTextAlign}`}
          >
            {p}
          </p>
          {styles(page, bgColor).chosenButton}
        </div>
      </div>
    </div>
  );
}
