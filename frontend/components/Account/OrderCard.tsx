import React from "react";

type Props = {};

export default function OrderCard({}: Props) {
  return (
    <>
      <div className="flex flex-col items-start justify-between space-y-4">
        <h3 className="section-sub-title">Finding domain name 1</h3>

        <div
          className={`pt-10 gap-x-4 w-full mx-auto rounded-xl flex  items-center space-x-4 cursor-pointer`}
        >
          <div className="shrink-0">
            <img
              className="rounded-full"
              src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
              alt="user avatar"
              height="87"
              width="87"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline space-x-10">
              <h3 className="text-xl font-bold text-black">Sten Lilieström</h3>
              <span>2022-05-12</span>
              <span>18:36</span>
            </div>

            <p className="text-lg font-normal testimonial-grey">
              Search: dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-sign-in-input-bg h-2 w-full my-20 border-none"></hr>
    </>
  );
}
