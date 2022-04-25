import React from "react";
import Link from "next/link";

type Props = {
  linkHref: string;
  color: string;
  bgColor: string;
  buttonText: string;
};

export default function Button({
  linkHref,
  color,
  bgColor,
  buttonText,
}: Props) {
  return (
    <Link href={linkHref}>
      <a className={`btn ${color} ${bgColor}`}>{buttonText}</a>
    </Link>
  );
}
