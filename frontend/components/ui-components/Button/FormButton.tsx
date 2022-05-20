import React from "react";

type Props = {
  color: string;
  buttonText: string;
  type: "formBtn";
  onClick: () => void;
};

export default function Button({ color, type, buttonText, onClick }: Props) {
  return (
    <button className={`${type} ${color}`} onClick={onClick}>
      {buttonText}
    </button>
  );
}
