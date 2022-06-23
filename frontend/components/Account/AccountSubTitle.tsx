import React from "react";

type Props = {
  subTitle: string;
  subParagraph: string;
};

export default function AccountSubTitle({ subTitle, subParagraph }: Props) {
  return (
    <div className="space-y-2">
      <h3 className="font-bold text-2xl capitalize">{subTitle}</h3>
      <p className="font-normal text-sm 2xl:text-xl capitalize">
        {subParagraph}
      </p>
    </div>
  );
}
