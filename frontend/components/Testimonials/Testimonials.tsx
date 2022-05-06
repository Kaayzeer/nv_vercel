import React from "react";
import PortraitCard from "../Card/PortraitCard";

type Props = { bgColor: string };

export default function Testimonials({ bgColor }: Props) {
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="customContainer capitalize">
        <div className="flex-start">
          <h2 className="section-title mb-20 ">what our customers say</h2>

          <div className="md:grid-col2 gap-40 w-full">
            <div className="flex-start h-auto">
              <PortraitCard />
              <PortraitCard />
              <PortraitCard />
            </div>
            <div className="flex-start-top gap-20 h-auto">
              <h3 className="section-sub-title">It was a great experiance!</h3>
              <p className="section-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
