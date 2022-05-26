import React from "react";
import Image from "next/image";
import Button from "../ui-components/Button/Button";

type Props = {
  page: "home" | "about";
};
/* + -mb-20 +  md:-mb-0 pb-8 */
export default function Banner({ page }: Props) {
  /* ----------make component reusable---------- */

  const layoutStyle =
    page === "home"
      ? "bg-banner-background + bg-center mb-20 sm:mb-10 md:mb-0 "
      : page === "about"
      ? "bg-about-background + bg-bottom"
      : null;

  const title =
    (page === "home" && "GET THAT DOMAIN") ||
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
      ? "text-left leading-7 md:text-center md:leading-2xLoose"
      : null;

  /* ----------------------------- */
  return (
    <>
      <div className={`w-full ${layoutStyle} bg-cover bg-no-repeat `}>
        <div className="customContainer ">
          <div className={` ${flexStyle}  w-full px-10`}>
            <h1 className={`section-title ${titleStyle}`}>{title}</h1>
            {page === "home" && (
              <>
                <p className="section-paragraph-italic">
                  Hire an experienced acquisition agent and find out if the
                  domain name you need can be yours.
                </p>

                <Button
                  linkHref="/about"
                  color="text-white"
                  buttonText="Let’s go"
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
