import React, { useState, useEffect } from "react";

// components
import PortraitCard from "../Card/PortraitCard";

//hooks
import useResizeWindow from "../../hooks/useResize";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";

type Props = { bgColor: string };

export default function Testimonials({ bgColor }: Props) {
  //layout breakpoints

  const { width } = useResizeWindow();

  const view = width >= 645;

  return (
    <div className={`w-full ${bgColor}`} id={"testimonials"}>
      <div className="customContainer px-10">
        {view && (
          <section className="py-40">
            <h2 className="section-title  mb-10 ">
              words from partners and clients
            </h2>
            <div className="md:grid-col2 gap-40 w-full">
              <div className="md:flex-start md:h-auto">
                <PortraitCard />
              </div>
              <div className="flex-start-top gap-10 h-auto">
                <h3 className="section-sub-title capitalize">
                  Trustworthy professionals!
                </h3>
                <p className="section-paragraph">
                  We have collaborated with Next Venture on numerous domain
                  brokering projects. Each and every experience has been
                  productive and positive because Sten and his team are
                  trustworthy and courteous professionals. - Bill Sweetman,
                  President, Name Ninja
                </p>
                <p className="section-paragraph">
                  We truly appreciate working with Sten and Next Venture on
                  domain brokering projects. Sten has extensive knowledge within
                  the domain aftermarket, and is very reliable, responsive and
                  solution-oriented. We give Sten our warmest recommendations!
                  -Marcus Glaad, COO and Partner, Dotkeeper
                </p>
              </div>
            </div>
          </section>
        )}

        {!view && (
          <>
            <h2 className="section-title mt-10 mb-20 ">
              what our customers say
            </h2>
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={50}
              slidesPerView={1.3}
              modules={[Autoplay]}

              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
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
            <div className="flex-start-top gap-10 h-auto">
              <h3 className="section-paragraph font-bold mt-5">
                It was a great experience!
              </h3>
              <p className="section-paragraph">
                We have collaborated with Next Venture on numerous domain
                brokering projects. Each and every experience has been
                productive and positive because Sten and his team are
                trustworthy and courteous professionals. - Bill Sweetman,
                President, Name Ninja
              </p>

              <p className="section-paragraph mb-10">
                We truly appreciate working with Sten and Next Venture on domain
                brokering projects. Sten has extensive knowledge within the
                domain aftermarket, and is very reliable, responsive and
                solution-oriented. We give Sten our warmest recommendations!
                -Marcus Glaad, COO and Partner, Dotkeeper
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
