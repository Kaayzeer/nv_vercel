import React from "react";

type Props = {
  step: string;
  title: string;
  p: string;
};

export default function FormTitle({ step, title, p }: Props) {
  return (
    <div className="flex-start-top-noHeight">
      <h3 className="text-left section-sub-title capitalize">{step}</h3>
      <h2 className="section-title capitalize">{title}</h2>
      <p className="section-sub-paragraph text-gray-600 capitalize">{p}</p>
    </div>
  );
}
