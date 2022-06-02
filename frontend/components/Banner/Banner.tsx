import React from "react";
import Image from "next/image";
import Button from "../ui-components/Button/Button";
import LoginForm from "../Form/LoginForm";

type Props = {
  page: "home" | "about" | "login";
  title: string;
  subTitle?: string;
};
/* + -mb-20 +  md:-mb-0 pb-8 */
export default function Banner({ page, title, subTitle }: Props) {
  /* ----------make component reusable---------- */

  const layoutStyle =
    page === "home"
      ? "bg-banner-background + bg-center mb-20 sm:mb-10 md:mb-0 "
      : page === "about"
      ? "bg-about-background + bg-bottom"
      : page === "login"
      ? "bg-login-background + bg-center flex flex-wrap md:flex-nowrap "
      : null;

  const flexStyle =
    page === "about"
      ? "flex-center mx-auto"
      : page === "home"
      ? "flex-start + md:w-3/5"
      : page === "login"
      ? "flex-start mx-auto md:w-3/5 "
      : null;

  const titleStyle =
    page === "about"
      ? "text-center leading-extra-loose"
      : page === "home"
      ? "text-left leading-7 md:text-center md:leading-2xLoose"
      : page === "login"
      ? "text-left leading-7 md:text-center md:leading-2xLoose"
      : null;

  /* ----------------------------- */
  return (
    <>
      <div className={`w-full ${layoutStyle} bg-cover bg-no-repeat relative`}>
        <div className="customContainer">
          <div className={` ${flexStyle}  w-full px-10`}>
            <h1 className={`section-title ${titleStyle}`}>
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
            <LoginForm
              emailLabel={"Email"}
              passwordLabel={"Password"}
              email={""}
              password={""}
            />
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
