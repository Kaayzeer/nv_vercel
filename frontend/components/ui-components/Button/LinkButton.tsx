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
    buttonText === "Contact us" && type === "btnFourthiary"?
    (
      <Image src="/icons/rightArrowIconWhite.svg" width={16} height={16} />
    ):
    (
      <></>
    )
    ;

  return (
    <Link href={linkHref}>
      <a className={`${type} ${color}`}>
        {buttonText}
        {icon}
      </a>
    </Link>
  );
}
