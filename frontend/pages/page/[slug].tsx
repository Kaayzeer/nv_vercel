import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  const router = useRouter();

  return <div>[slug]</div>;
}
