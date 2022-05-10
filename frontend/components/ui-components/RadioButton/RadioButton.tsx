import React from "react";

type Props = {
  id: string;
  htmlFor: string;
  name: string;
  title: string;
};

export default function RadioButton({ id, htmlFor, name, title }: Props) {
  return (
    <div className="flex items-center ">
      <input
        id={id}
        name={name}
        type="radio"
        className="h-4 w-4 md:h-8 md:w-8 default:border-solid default:border-4 default:border-radio-border-color "
      />
      <label
        htmlFor={htmlFor}
        className="ml-3 block section-sub-paragraph text-gray-700"
      >
        {title}
      </label>
    </div>
  );
}
