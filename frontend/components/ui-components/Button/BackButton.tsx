import React from "react";

type Props = {
  title: string;
  onClick: () => void;
};

function BackButton({ title, onClick }: Props) {
  return (
    <button className="underline" type="button" onClick={onClick}>
      {title}
    </button>
  );
}

export default BackButton;
