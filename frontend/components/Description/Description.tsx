import Image from "next/image";
import React from "react";

type Props = {};

export default function Description({}: Props) {
  return (
    <div className="customContainer mt-16">
      <div className="flex-start w-full ">
        <h2 className="section-title mx-auto my-20 lg:mx-0">how it works</h2>

        <div className="flex-center hidden lg:flex">
          <Image src="/images/123.svg" height={100} width={850} />
        </div>
        <div className="flex-start lg:grid-col3 place-items-center">
          <div className="flex-center -mt-64 px-4">
            <h3 className="section-sub-title">Target your needs</h3>
            <p className="section-paragraph text-center text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex-center -mt-64 px-4">
            <h3 className="section-sub-title">Target your needs</h3>
            <p className="section-paragraph text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex-center -mt-64 px-4">
            <h3 className="section-sub-title">Target your needs</h3>
            <p className="section-paragraph text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
