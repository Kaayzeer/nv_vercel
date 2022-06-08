import Image from "next/image";
import React from "react";

type Props = {};

const descriptionsteps = [
  {
    title: "Let us know your needs",
    paragraph:
      "Task us with your acquisition, naming project or sales request.",
    image: "/icons/round-yellow-1.svg",
  },
  {
    title: "Follow the process",
    paragraph: "Get transparent weekly updates on the progress of your order. ",
    image: "/icons/round-yellow-2.svg",
  },
  {
    title: "Achieve your goals",
    paragraph:
      "Go about your business with a new name identity or fresh funds.. ",
    image: "/icons/round-yellow-3.svg",
  },
];

export default function HomeDescription({}: Props) {
  return (
    <div className="customContainer mt-16">
      <div className="flex-start w-full ">
        <h2 className="section-title mx-auto my-20 lg:mx-0">how it works</h2>

        <div className="flex-center hidden lg:flex">
          <Image src="/images/123.svg" height={100} width={850} />
        </div>
        <div className="flex-start lg:grid-col3 place-items-center">
          {descriptionsteps.map((descriptionStep, idx) => (
            <div key={idx} className="flex-start md:flex-center -mt-64 px-4">
              <span className="-ml-2 lg:hidden">
                <Image src={descriptionStep.image} height={50} width={50} />
              </span>
              <h3 className="section-sub-title2 md:section-sub-title capitalize">
                {descriptionStep.title}
              </h3>
              <p className="section-paragraph-normal text-left md:text-center text-sm ">
                {descriptionStep.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
