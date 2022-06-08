import Image from "next/image";
import React, { useEffect, useState } from "react";
import useResizeWindow from "../../../hooks/useResize";

//dynamic styles
import { customStyles } from "./customStyles";

//library
import { explainerSteps } from "../../../lib/explainerSteps";

type Props = {
  h1: string;
  p: string;
  page: "find" | "buy" | "sell";
};

export default function Section({ h1, p, page }: Props) {
  //layout breakpoints
  const { width } = useResizeWindow();

  const view = width >= 645;

  return (
    <>
      <div className={`w-full min-h-699 ${customStyles(page).bgColor} `}>
        {view ? (
          <>
            <div className="flex-start max-w-[1500px] -mb-4 sm:mb-0 w-11/12 px-12 2xl:mx-auto  max-h-516">
              <h2
                className={`section-sub-title italic ${
                  customStyles(page).chosenTextColor
                }`}
              >
                {h1}
              </h2>
              <p
                className={` section-paragraph-italic  ${
                  customStyles(page).chosenTextColor
                } max-w-lg text-left`}
              >
                {p}
              </p>
            </div>
            <div className="flex-start max-w-[1500px] -mb-4 sm:mb-0 w-11/12 px-12 2xl:mx-auto  max-h-516">
              {/* <div className="relative w-5/6 h-24"> */}
              <div className="relative w-5/6 h-24 object-contain">
                <Image
                  src={`/images/${page.toString()}Explainer.svg`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {/* </div> */}
              <div className="w-full flex flex-col ">
                <>
                  <div className="flex flex-row gap-10   mt-3 2xl:pl-12">
                    {explainerSteps[page].title.map((item, idx) => (
                      <div key={idx} className="flex-1">
                        <h3
                          className={`BSFsection-sub-title  ${
                            customStyles(page).chosenTextColor
                          }`}
                        >
                          {item}
                        </h3>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row gap-10 mt-3 2xl:pl-12">
                    {explainerSteps[page].subTitle.map((item, idx) => (
                      <div key={idx} className="flex-1">
                        <p
                          className={`section-sub-paragraph ${
                            customStyles(page).chosenTextColor
                          }`}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex-start max-w-[1500px] -mb-4 sm:mb-0 w-11/12 px-12 2xl:mx-auto  max-h-516">
              <h2
                className={`section-sub-title italic ${
                  customStyles(page).chosenTextColor
                }`}
              >
                {h1}
              </h2>
              <p
                className={` section-paragraph-italic  ${
                  customStyles(page).chosenTextColor
                } max-w-lg text-left`}
              >
                {p}
              </p>
            </div>
            <div className="flex sm:block w-5/6 px-8 pb-20">
              <div className="w-3/4 h-full">
                <Image
                  src={`/images/${page.toString()}MobileExplainer.svg`}
                  height={712}
                  width={47}
                />
              </div>

              <div className=" h-full w-5/6 flex flex-col ml-4 ">
                <>
                  <ul className="flex flex-col justify-evenly">
                    {explainerSteps[page].title.map((title, idx) => (
                      <li
                        key={idx}
                        className={`BSFsection-sub-title space-y-2 h-52 ${
                          customStyles(page).chosenTextColor
                        }`}
                      >
                        <h1>{title}</h1>

                        <p
                          className={`section-sub-paragraph ${
                            customStyles(page).chosenTextColor
                          }`}
                        >
                          {explainerSteps[page].subTitle[idx]}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              </div>
            </div>
          </>
        )}
      </div>

      {page === "find" && (
        <div
          className={`aspect-[1090/100] -mt-1 bg-center  bg-cover bg-no-repeat bg-[url('/images/findPageCloud.svg')]`}
        ></div>
      )}

      {page === "sell" && (
        <div
          className={`aspect-[1090/100] -mt-1 bg-center  bg-cover bg-no-repeat bg-[url('/images/sellPageCloud.svg')]`}
        ></div>
      )}

      {page === "buy" && (
        <div
          className={`aspect-[1090/100] -mt-1 bg-center  bg-cover bg-no-repeat bg-[url('/images/buyPageCloud.svg')]`}
        ></div>
      )}
    </>
  );
}

{
  /*    {page === "find" && (
              <span className="hidden lg:block w-5/6 ">
                <Image
                  src={"/images/blueExplainer.svg"}
                  layout="fill"
                  objectFit="contain"
                />
              </span>
            )}

            {page === "buy" && (
              <span className=" hidden lg:block w-5/6">
                <Image
                  src={"/images/yellowExplainer.svg"}
                  layout="fill"
                  objectFit="contain"
                />
              </span>
            )}

            {page === "sell" && (
              <>
                <span className=" hidden lg:block w-5/6  ">
                  <Image
                    src={"/images/greenExplainer.svg"}
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
              </>
            )} */
}
{
  /*  <img style={{ width: "82%" }} src="/images/greenExplainer.svg" />  */
}
