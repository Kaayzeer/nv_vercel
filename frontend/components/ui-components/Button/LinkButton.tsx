import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  linkHref: any;
  color: string;
  buttonText: string;
  type: string;
};

export default function Button({ linkHref, color, type, buttonText }: Props) {
  const icon = buttonText === "Contact us" && type != "btnFourthiary" ? (
    <Image src="/icons/rightArrowIcon.svg" width={16} height={16} />)
    :
    (
      // <Image src="/icons/rightArrowIcon.svg" width={16} height={16} />
      <div>Arrow</div>
    );

  return (
    <Link href={linkHref}>
      <a className={`${type} ${color}`}>
        {buttonText}
        {icon}
      </a>
    </Link>
  );
}
