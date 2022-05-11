import React from "react";
import { useRouter } from "next/router";

type Props = {
  title: string;
};

function BackButton({ title }: Props) {
  const router = useRouter();

  return (
    <button className="underline" type="button" onClick={() => router.back()}>
      {title}
    </button>
  );
}

export default BackButton;
