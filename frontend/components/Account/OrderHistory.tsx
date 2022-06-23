import React from "react";

type Props = {};

export default function OrderHistory({}: Props) {
  return (
    <section>
      <ul className="flex flex-col w-full">
        <li className="flex flex-row items-center justify-between flex-wrap">
          <span className="font-bold text-md w-1/3 capitalize">
            order number
          </span>
          <span className="font-bold text-md w-1/3 capitalize">date</span>
          <span className="font-bold text-md w-1/3 capitalize">status</span>

          <span className="font-normal text-sm w-1/3 capitalize">12346</span>
          <span className="font-normal text-sm w-1/3 capitalize">
            2022-01-34
          </span>
          <span className="font-normal text-sm w-1/3 capitalize">outline</span>
        </li>
      </ul>
    </section>
  );
}
