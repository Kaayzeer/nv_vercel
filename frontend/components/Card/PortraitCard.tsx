import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const customers = [
  {
    img: "/images/marcusGTestimonial.svg",
    name: "Marcus Glaad",
    service: "-Dotkeeper AB",
  },
  {
    img: "/images/billSTestimonial.svg",
    name: "Bill Sweetman",
    service: "-Name Ninja LLC",
  },
  {
    img: "/images/enidBTestimonial.svg",
    name: "Enid Bachman",
    service: "-CEO Wanderganic",
  },
];

export default function PortraitCard({}: Props) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div
      className={`w-full h-full mx-auto rounded-xl flex flex-col items-center justify-around space-y-4  cursor-pointer`}
    >
      {customers.map((customer, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-6 py-5 px-10  ${
            idx === index && "shadow-3xl"
          } `}
          onClick={() => setIndex(idx)}
        >
          <div className="shrink-0">
            <img
              className="rounded-full"
              src={customer.img}
              alt="user avatar"
              height="87"
              width="87"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">{customer.name}</h3>
            <p className="text-md font-normal testimonial-grey">
              {customer.service}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/*       {customers.map((customer) => (
        <>
          <div className="shrink-0">
            <img
              className="rounded-full"
              src={customer.img}
              alt="user avatar"
              height="87"
              width="87"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">{customer.name}</h3>
            <p className="text-lg font-normal testimonial-grey">
              {customer.service}
            </p>
          </div>
        </>
      ))} */
