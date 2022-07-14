import React from "react";

type Props = {
  color: string;
  buttonText: string;
  type: "formBtn" | "signInBtn" | "getStartedBtn";
  onClick?: () => void;
};

export default function Button({ color, type, buttonText, onClick }: Props) {
  return (
    <button className={`${type} ${color}`} type="submit" onClick={onClick}>
      {buttonText}
    </button>
  );
}
