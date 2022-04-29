import React from "react";
import PortraitCard from "../Card/PortraitCard";

type Props = { bgColor: string };

export default function Testimonials({ bgColor }: Props) {
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="customContainer capitalize">
        <div className="flex-start">
          <h2 className="section-title mb-20 ">what our customers say</h2>

          <div className="sm:grid-col2 gap-40 w-full">
            <div className="flex-start h-auto">
              <PortraitCard />
            </div>
            <div className="flex-start h-auto">
              <h3 className="section-sub-title">It was a great experiance!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
