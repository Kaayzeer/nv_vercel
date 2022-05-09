import Image from "next/image";
import React, { useRef, useState } from "react";

type Props = {};

const Customers = [
  {
    picture:
      "https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp",
    name: "namn på företag",
    service: "tjänst på företag",
  },
  {
    picture:
      "https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp",
    name: "namn på företag",
    service: "tjänst på företag",
  },
  {
    picture:
      "https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp",
    name: "namn på företag",
    service: "tjänst på företag",
  },
];

export default function PortraitCard({}: Props) {
  const [background, setBackground] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const clickedCard = () => {
    setChecked((prevValue) => !prevValue);
    if (checked === true) {
      setBackground("shadow-3xl");
    } else {
      setBackground("");
    }
  };

  return (
    <div
      onClick={clickedCard}
      className={`${background} p-6 gap-x-4 w-full mx-auto rounded-xl flex items-center space-x-4 cursor-pointer`}
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
      <div>
        <h3 className="text-xl font-bold text-black">För efternamn</h3>
        <p className="text-lg font-normal testimonial-grey">
          Tjänst på företag
        </p>
      </div>
    </div>
  );
}
