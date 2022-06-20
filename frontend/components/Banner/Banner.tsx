import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import { FaExclamationTriangle } from "react-icons/fa";
import LinkButton from "../ui-components/Button/LinkButton";
import LoginForm from "../Forms/LoginForm";

//customStyles
import { customStyles } from "./customStyles";
import PriceCard from "../Card/PriceCard";
import SearchWlm from "../SearchWlm";

/* //dynamic rendering for  "find" | "buy" | "sell" pages
import { QueryPages } from "../../functions/queryPages"; */

type Props = {
  page: "home" | "about" | "login" | "find" | "buy" | "sell" | "404";
  title: string;
  subTitle?: string;
};

export default function Banner({ page, title, subTitle }: Props) {
  /*   const router = useRouter(); */

  return (
    <>
      <div
        className={`w-full ${
          customStyles(page).layoutStyle
        } bg-cover bg-no-repeat relative -mb-3`}
      >
        <div className="customContainer">
          <div className={` ${customStyles(page).flexStyle}  w-full px-10 `}>
            <h1 className={`section-title ${customStyles(page).titleStyle}`}>
              {title.toUpperCase()}
            </h1>
            {subTitle && (
              <p
                className={`${
                  page === "home" || page === "404"
                    ? "section-paragraph-italic mb-0"
                    : "section-paragraph-italic mb-40"
                }  `}
              >
                {subTitle}
              </p>
            )}
            {page === "home" && (
              <LinkButton
                linkHref="/about"
                color="text-white"
                buttonText="Let’s go"
                type="btnPrimary"
              />
            )}
            {page === "404" && (
              <LinkButton
                linkHref="/"
                color="text-white"
                buttonText="back to home"
                type="formBtn"
              />
            )}
            {page === "find" && <SearchWlm />}
          </div>
        </div>
        {page === "login" && (
          <div className="-mt-96 mb-60 mx-5 md:m-auto sm:-mt-0 sm:mb-0 w-full md:w-1/2 md:mr-20 2xl:mr-0">
            <LoginForm emailLabel={"email"} passwordLabel={"password"} />
          </div>
        )}

        {page && (page === "find" || page === "sell" || page === "buy") && (
          <div className="-mt-96  mx-5 md:m-auto sm:-mt-0 sm:mb-0 w-full md:w-1/2 md:mr-20 2xl:mr-0">
            <PriceCard page={page as "find" | "buy" | "sell"} />
          </div>
        )}
      </div>
    </>
  );
}
