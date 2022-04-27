import React from "react";
import Image from "next/image";
import Button from "../ui-components/Button/Button";

type Props = {
  imgUrl: string;
  width: number;
  height: number;
};

export default function Banner({ imgUrl, width, height }: Props) {
  return (
    <>
      <div className="w-full  bg-banner-background bg-center  bg-cover bg-no-repeat -mb-3 pb-8">
        <div className="customContainer ">
          <div className=" flex-start w-full px-10 md:w-3/5 ">
            <h1 className="section-title">SLAGKRAFTIG RUBRIK</h1>
            <p className="section-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button
              linkHref="/about"
              color="text-white"
              buttonText="read more"
              type="btnPrimary"
            />
          </div>
        </div>
      </div>
    </>
  );
}
