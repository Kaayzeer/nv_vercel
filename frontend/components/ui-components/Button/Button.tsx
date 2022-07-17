import React from "react";

type Props = {
  color: string;
  buttonText: string;
  type: string;
  onClick?: () => void;
};

export default function Button({ color, type, buttonText, onClick }: Props) {
  return (
    <button className={`${type} ${color}`} type="submit" onClick={onClick}>
      {buttonText}
    </button>
  );
}
