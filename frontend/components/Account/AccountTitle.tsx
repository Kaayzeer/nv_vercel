import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

export default function AccountTitle({ title, subTitle }: Props) {
  return (
    <div className="mb-10 space-y-4">
      <h1 className="section-title capitalize">{title}</h1>
      <p className="section-paragraph-normal">{subTitle}</p>
    </div>
  );
}
