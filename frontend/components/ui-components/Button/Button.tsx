import React from "react";
import Link from "next/link";

type Props = {
  linkHref: string;
  color: string;
  buttonText: string;
  type: "btnPrimary" | "btnOutlined" | "btnSecondary";
};

export default function Button({ linkHref, color, type, buttonText }: Props) {
  return (
    <Link href={linkHref}>
      <a className={`${type} ${color}`}>{buttonText}</a>
    </Link>
  );
}
