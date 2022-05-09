import Image from "next/image";
import React from "react";
import Accordion from "./Accordion";

const QuestionsSectionInfo = {
  h1: "Frequently asked questions",
  p: "undrar du något mer bla bla kontakta oss",
};

type Props = {};

export default function AboutQuestions({}: Props) {
  return (
    <div className={`w-full  max-h-1531`}>
      <div className="customContainer">
        <div className={`flex-center-top-noHeight px-5  text-black`}>
          <h2 className={`section-sub-title`}>{QuestionsSectionInfo.h1}</h2>
          <p className={`section-paragraph  max-w-lg text-left`}>
            {QuestionsSectionInfo.p}
          </p>
          <div className="w-full">
            <Accordion />
          </div>
        </div>
        <div className="text-center md:text-left mt-10">
          <Image src={"/images/wireframe.png"} width={343} height={350} />
        </div>
      </div>
    </div>
  );
}
