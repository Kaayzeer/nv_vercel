import Image from "next/image";
import React from "react";

//library
import { descriptionSteps } from "../../lib/descriptionSteps";

type Props = {
  page: "about" | "find" | "buy" | "sell";
  bgColor: string;
  textColor: string;
};

export default function Description({ page, bgColor, textColor }: Props) {
  return (
    <div
      className={`w-full  min-h-699 ${bgColor} ${
        page === "about" ? "-mt-1" : "mt-0"
      }`}
    >
      <div className="customContainer ">
        <div className="grid-col1 md:grid-col2 ">
          <div
            className={` md:flex-start  ${
              page === "about" ? "md:w-2/3" : "md:w-full"
            } min-h-699 px-8 py-8`}
          >
            <h3
              className={`${
                page === "about" ? "section-sub-title" : "BSFsection-sub-title"
              } ${
                page === "about" ? "text-royal-yellow" : textColor
              }  leading-9`}
            >
              {descriptionSteps[page].title}
            </h3>
            <p
              className={`section-sub-paragraphBold ${textColor} leading-7 md:leading-8 text-lg`}
            >
              {descriptionSteps[page].subTitle}
            </p>
            {page !== "about" && (
              <p className="section-sub-paragraph leading-7 md:leading-8 text-lg">
                {descriptionSteps[page].subTitle2}
              </p>
            )}
          </div>
          <div
            className={` flex-start ${textColor} min-h-500 ${
              page === "about" && "px-12 mt-8 pb-40 md:pb-0"
            }
            ${page !== "about" && "px-8 pb-10 -mt-28 md:-mt-0"}
            `}
          >
            {page === "about" ? (
              <ol className="space-y-10 ">
                {descriptionSteps[page].list.map((list, idx) => (
                  <li key={idx} className="pl-5">
                    <h3 className="li-title capitalize ">{list.title}</h3>

                    <p className="li-paragraph2">{list.subTitle}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <>
                <p className="section-sub-paragraph-italic leading-7 md:leading-8 text-lg">
                  {descriptionSteps[page].subTitle3}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
