import React from "react";
import Image from "next/image";
import Button from "../ui-components/Button/Button";

type Props = {
  page: "home" | "about";
};

export default function Banner({ page }: Props) {
  const layoutStyle =
    page === "home"
      ? "bg-banner-background + bg-center + -mb-20 +  md:-mb-0 pb-8"
      : page === "about"
      ? "bg-about-background + bg-bottom"
      : null;

  const title =
    (page === "home" && "slagkraftig rubrik") ||
    (page === "about" &&
      "THE DOMAIN AFTERMARKET AGENCY WITH TRANSPARENT, COST-EFFECTIVE PROCESS.");

  const flexStyle =
    page === "about"
      ? "flex-center mx-auto"
      : page === "home"
      ? "flex-start + md:w-3/5"
      : null;

  const titleStyle =
    page === "about"
      ? "text-center leading-extra-loose"
      : page === "home"
      ? "text-center leading-2xLoose"
      : null;
  return (
    <>
      <div className={`w-full ${layoutStyle} bg-cover bg-no-repeat`}>
        <div className="customContainer ">
          <div className={` ${flexStyle}  w-full px-10`}>
            <h1 className={`section-title ${titleStyle}`}>{title}</h1>
            {page === "home" && (
              <>
                <p className="section-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Button
                  linkHref="/about"
                  color="text-white"
                  buttonText="read more"
                  type="btnPrimary"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
