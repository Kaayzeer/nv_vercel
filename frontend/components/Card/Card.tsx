import Image from "next/image";
import React from "react";
import Button from "../ui-components/Button/Button";

type Props = {};

export default function Card({}: Props) {
  return (
    <div className="w-full 2xl:w-2/3 2xl:mx-auto">
      <div className="lg:grid-col3  place-items-center -mt-40 px-4 md:px-0">
        <div className="flex-center bg-white rounded-md shadow-3xl w-full my-4 lg:max-w-sm px-14 h-500 gap-6 ">
          <Image src="/icons/sellIcon.svg" height={140} width={140} />
          <h2 className="section-title text-4xl">sell</h2>
          <p className="section-paragraph text-center  text-sm  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <span className="border-b border border-solid w-7/12 text-center mt-2"></span>
          <Button
            linkHref="/sell"
            color="text-black"
            buttonText="read more"
            type="btnOutlined"
          />
        </div>
        <div className="flex-center bg-white rounded-md shadow-3xl w-full my-4 lg:max-w-sm px-14 h-500 gap-6 ">
          <Image src="/icons/buyIcon.svg" height={140} width={140} />
          <h2 className="section-title text-4xl">buy</h2>
          <p className="section-paragraph text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <span className="border-b border border-solid w-7/12 text-center mt-2"></span>
          <Button
            linkHref="/buy"
            color="text-black"
            buttonText="read more"
            type="btnSecondary"
          />
        </div>
        <div className="flex-center bg-white rounded-md shadow-3xl w-full my-4 lg:max-w-sm  px-14 h-500 gap-6">
          <Image src="/icons/findIcon.svg" height={140} width={140} />
          <h2 className="section-title text-4xl">find</h2>
          <p className="section-paragraph text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <span className="border-b border border-solid w-7/12 text-center mt-2">
            {/* blue bottom curve */}
          </span>
          <Button
            linkHref="/find"
            color="text-black"
            buttonText="read more"
            type="btnOutlined"
          />
        </div>
      </div>
    </div>
  );
}
