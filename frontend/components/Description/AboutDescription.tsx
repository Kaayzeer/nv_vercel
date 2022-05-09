import Image from "next/image";
import React from "react";

type Props = {};

export default function Description({}: Props) {
  return (
    <div className="w-full max-h-699 bg-section-blue-about">
      <div className="customContainer ">
        <div className="grid-col1 md:grid-col2 ">
          <div className=" md:flex-start  md:w-2/3 max-h-699 px-8 py-8">
            <h3 className="section-sub-title text-royal-yellow leading-9">
              our mission
            </h3>
            <p className="section-paragraphBold text-white leading-7 md:leading-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div
            className="md:flex-start  text-white max-h-699 px-12 mt-8
          pb-40 md:pb-0"
          >
            <ol className="space-y-10 ">
              <li className="pl-5">
                <h3 className="li-title capitalize ">our mission</h3>
                <p className="li-paragraph ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </li>
              <li className="pl-5 ">
                <h3 className="li-title capitalize ">our mission</h3>
                <p className="li-paragraph ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </li>
              <li className="pl-5 ">
                <h3 className="li-title capitalize ">our mission</h3>
                <p className="li-paragraph ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
