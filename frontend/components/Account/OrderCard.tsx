import React from "react";

type Props = {};

export default function OrderCard({}: Props) {
  return (
    <>
      <div className="flex flex-col items-start justify-between space-y-4 w-full max-w-4xl">
        <h3 className="section-sub-title capitalize">Finding domain name 1</h3>

        <div className={`gap-x-4 mx-auto rounded-xl flex cursor-pointer `}>
          <div className="relative w-20 mx-auto shrink-0 min-h-full">
            <span className="absolute inset-x-1/2 top-4 -translate-x-1/2  -z-10 border h-full  bg-slate-500"></span>
            <img
              className="rounded-full mx-auto"
              src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
              alt="user avatar"
              height="70"
              width="70"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col pb-10">
            <div className="flex items-baseline space-x-10 ">
              <h3 className="text-xl font-bold text-black">Sten Lilieström</h3>
              <span className="hidden md:block">2022-05-12</span>
              <span className="hidden md:block">18:36</span>
            </div>

            <p className="text-lg font-normal testimonial-grey">
              <strong>Search:</strong> dolor sit amet, consectetur adipiscing
              elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="flex items-baseline space-x-10 mt-2">
              <span className="block md:hidden">2022-05-12</span>
              <span className="block md:hidden">18:36</span>
            </div>
          </div>
        </div>
        <div className={`gap-x-4 mx-auto rounded-xl flex cursor-pointer `}>
          <div className="relative w-20 mx-auto shrink-0 gap-y-10">
            <span className="absolute inset-x-1/2  top-4 -translate-x-1/2 -z-10 border h-full bg-slate-500"></span>

            <img
              className="rounded-full mx-auto"
              src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
              alt="user avatar"
              height="50"
              width="50"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col pb-10">
            <div className="flex items-baseline space-x-10 ">
              <span className="hidden md:block">2022-05-12</span>
              <span className="hidden md:block">18:36</span>
            </div>
            <p className="text-lg font-normal testimonial-grey">
              Search: dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit
            </p>
            <div className="flex items-baseline space-x-10 mt-2">
              <span className="block md:hidden">2022-05-12</span>
              <span className="block md:hidden">18:36</span>
            </div>
          </div>
        </div>
        <hr
          className="bg-sign-in-input-bg h-2 w-full my-20 border-none"
          style={{ marginBottom: "50px", marginTop: "30px" }}
        ></hr>
      </div>
    </>
  );
}
