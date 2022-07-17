import React from "react";

type Props = {
  title: string;
  onClick: () => void;
};

function ClickButton({ title, onClick }: Props) {
  return (
    <button
      className={"underline hover:font-bold"}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default ClickButton;
