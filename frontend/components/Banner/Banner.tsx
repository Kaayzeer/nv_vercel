import React from "react";
import Image from "next/image";
import Button from "../ui-components/Button/Button";
import LoginForm from "../Form/LoginForm";

//customStyles
import { customStyles } from "./customStyles";

type Props = {
  page: "home" | "about" | "login";
  title: string;
  subTitle?: string;
};

export default function Banner({ page, title, subTitle }: Props) {
  return (
    <>
      <div
        className={`w-full ${
          customStyles(page).layoutStyle
        } bg-cover bg-no-repeat relative`}
      >
        <div className="customContainer">
          <div className={` ${customStyles(page).flexStyle}  w-full px-10`}>
            <h1 className={`section-title ${customStyles(page).titleStyle}`}>
              {title.toUpperCase()}
            </h1>
            {page === "home" && (
              <>
                <p className="section-paragraph-italic">{subTitle}</p>

                <Button
                  linkHref="/about"
                  color="text-white"
                  buttonText="Let’s go"
                  type="btnPrimary"
                />
              </>
            )}
            {page === "login" && (
              <>
                <p className="section-paragraph mb-40 ">{subTitle}</p>
              </>
            )}
          </div>
        </div>
        {page === "login" && (
          <div className="-mt-96 mb-60 mx-5 md:m-auto sm:-mt-0 sm:mb-0 w-full md:w-1/2 md:mr-20 2xl:mr-0">
            <LoginForm emailLabel={"email"} passwordLabel={"password"} />
          </div>
        )}

        {/*     <LoginForm
          emailLabel={"email"}
          passwordLabel={"password"}
          email={""}
          password={""}
        /> */}
      </div>
    </>
  );
}

/* absolute right-1/4 top-1/4  translate-x-1/2 translate-y-1/2 */
