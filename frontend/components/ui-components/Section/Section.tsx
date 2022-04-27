import React from "react";

type Props = {
  bgColor: string;
  h1: string;
  p: string;
};

export default function Section({ bgColor, h1, p }: Props) {
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="customContainer ">
        <div className=" flex-center px-10  ">
          <h1 className="section-title text-white">{h1}</h1>
          <p className="section-paragraph text-white max-w-lg text-center">
            {p}
          </p>
          {/*   <Button
          linkHref="/about"
          color="text-white"
          bgColor="bg-gradient-to-r from-royal-blue to-loyal-blue"
          buttonText="read more"
        /> */}
        </div>
      </div>
    </div>
  );
}
