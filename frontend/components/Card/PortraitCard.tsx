import Image from "next/image";
import React from "react";

type Props = {};

const Customers = [
  {
    picture: "/",
    name: "namn på företag",
    service: "tjänst på företag",
  },
  {
    picture: "/",
    name: "namn på företag",
    service: "tjänst på företag",
  },
  {
    picture: "/",
    name: "namn på företag",
    service: "tjänst på företag",
  },
];

export default function PortraitCard({}: Props) {
  return (
    <div className="p-6 gap-x-4 w-full mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
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
      <div>
        <h3 className="text-lg font-md text-black">För efternamn</h3>
        <p className="text-md text-slate-500">Tjänst på företag</p>
      </div>
    </div>
  );
}
