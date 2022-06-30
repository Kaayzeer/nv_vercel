import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: any;
  handleClick: any;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar({ item, handleClick }: Props) {
  return (
    <>
      <Image src={item.icon} width={23} height={23} />
      <button
        className={classNames(
          item.current
            ? "text-white font-normal capitalize"
            : "text-gray-300 hover:underline decoration-white",
          "px-3 py-2 rounded-md text-sm font-normal capitalize"
        )}
        onClick={() => handleClick(item.name)}
      >
        <span className="transition-all duration-75 ease-linear hidden sm:block">
          {item.name}
        </span>
      </button>
    </>
  );
}
