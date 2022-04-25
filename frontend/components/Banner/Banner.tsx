import React from "react";
import Button from "../ui-components/Button/Button";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="w-full bg-[url('/images/headerBackground.png')]">
      <div className="customContainer">
        <div className="flex-center px-10 lg:w-3/5">
          <h1 className="section-title">SLAGKRAFTIG RUBRIK</h1>
          <p className="section-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            linkHref="/about"
            color="text-white"
            bgColor="bg-indigo-500 "
            buttonText="read more"
          />
        </div>
      </div>
    </div>
  );
}
