import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  linkHref: string;
  color: string;
  buttonText: string;
  type:
    | "btnPrimary"
    | "btnOutlined"
    | "btnSecondary"
    | "btnTertiary"
    | "formBtn";
};

export default function Button({ linkHref, color, type, buttonText }: Props) {
  const icon = buttonText === "Contact us" && (
    <Image src="/icons/rightArrowIcon.svg" width={16} height={16} />
  );

  return (
    <Link href={linkHref}>
      <a className={`${type} ${color} `}>
        {buttonText}
        {icon}
      </a>
    </Link>
  );
}
