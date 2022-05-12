import React, { useState, useEffect } from "react";
import PortraitCard from "../Card/PortraitCard";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

type Props = { bgColor: string };

export default function Testimonials({ bgColor }: Props) {
  const [isMobileWidth, setIsMobileWidth] = useState(
    typeof window !== "undefined" && window.innerWidth > 645
  );
  const updatePage = () => {
    setIsMobileWidth(window.innerWidth > 645);
  };

  useEffect(() => {
    window.addEventListener("resize", updatePage);
    return () => window.removeEventListener("resize", updatePage);
  }, []);

  const showSlider = () => {};
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="customContainer capitalize px-10">
        {isMobileWidth && (
          <div className="flex-start">
            <h2 className="section-title mb-20 ">what our customers say</h2>
            <div className="md:grid-col2 gap-40 w-full">
              <div className="md:flex-start md:h-auto">
                <PortraitCard />
                <PortraitCard />
                <PortraitCard />
              </div>
              <div className="flex-start-top gap-20 h-auto">
                <h3 className="section-sub-title">
                  It was a great experiance!
                </h3>
                <p className="section-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        )}

        {!isMobileWidth && (
          <>
            {/*  <h2 className="section-title mb-20 ">what our customers say</h2> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <PortraitCard />
              </SwiperSlide>
              <SwiperSlide>
                <PortraitCard />
              </SwiperSlide>
              <SwiperSlide>
                <PortraitCard />
              </SwiperSlide>
            </Swiper>
            {/*   <div className="flex-start-top gap-20 h-auto">
              <h3 className="section-sub-title">It was a great experiance!</h3>
              <p className="section-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
}
