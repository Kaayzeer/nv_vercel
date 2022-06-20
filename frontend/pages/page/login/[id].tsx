import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const sideBarInfo = [
  { name: "Your orders", href: "#", current: true },
  { name: "Personal info", href: "#", current: false },
  { name: "Order history", href: "#", current: false },
  { name: "Sign out", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ({}: Props) {
  return (
    <div className="w-full">
      <div className="w-1/3 bg-section-blue rounded-b-3xl rounded-r-3xl">
        {/* <Image src={''} /> */}

        <div className="flex space-x-4 mr-10">
          {sideBarInfo.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <a
                className={classNames(
                  item.current
                    ? " text-black-400"
                    : "text-black-400 hover:underline decoration-blue-800",
                  "px-3 py-2 rounded-md text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
