import Image from "next/image";
import React from "react";
import Button from "../ui-components/Button/Button";

const cardsInfo = [
  {
    name: "SELL",
    paragraph: "Turn domain name assets into capital",
    buttonText: "GET QUOTE",
    buttonType: "btnOutlined",
  },
  {
    name: "BUY",
    paragraph: "Secure the best domain for your business. ",
    buttonText: "ORDER",
    buttonType: "btnSecondary",
  },
  {
    name: "FIND",
    paragraph: "Get naming options and find a brand.",
    buttonText: "ORDER",
    buttonType: "btnOutlined",
  },
];

type Props = {};

export default function InfoCard({}: Props) {
  return (
    <div className="w-full 2xl:w-2/3 2xl:mx-auto">
      <div className="lg:grid-col3  place-items-center -mt-40 px-4 md:px-0">
        {cardsInfo.map((cardInfo, idx) => (
          <div
            key={idx}
            className="flex-center bg-white rounded-md shadow-3xl w-full my-4 lg:max-w-sm px-14 h-500 gap-6"
          >
            <Image src="/icons/sellIcon.svg" height={140} width={140} />
            <h2 className="section-title text-4xl">{cardInfo.name}</h2>

            <p className="section-paragraph text-center  text-sm  ">
              {cardInfo.paragraph}{" "}
            </p>

            <span className="border-b border border-solid w-7/12 text-center mt-2"></span>

            <Button
              linkHref="/sell"
              color="text-black"
              buttonText={cardInfo.buttonText}
              type={cardInfo.buttonType}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
