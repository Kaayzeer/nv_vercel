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
            ? "text-white capitalize"
            : "text-white hover:underline decoration-blue-800",
          "px-3 py-2 rounded-md text-sm font-medium capitalize"
        )}
        onClick={() => handleClick(item.name)}
      >
        <span className="hidden sm:block">{item.name}</span>
      </button>
    </>
  );
}
