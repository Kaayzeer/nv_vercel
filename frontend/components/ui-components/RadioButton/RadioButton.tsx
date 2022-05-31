import React from "react";

type Props = {
  id: string;
  htmlFor: string;
  name: string;
  title: string;
  type?: "no_letters" | "no_words";
  register: any;

  /*   selected?: boolean;
  setSelected?: any;
  dropDownValue?: string;
  updateState?: any;
  updateDropDownState?: any; */
};

export default function RadioButton({
  id,
  htmlFor,
  name,
  title,
  type,
  register,
}: /*   selected,
  setSelected,
  dropDownValue,
  updateState,
  updateDropDownState, */
Props) {
  const registerType =
    type === "no_letters"
      ? "no_letters"
      : type === "no_words"
      ? "no_words"
      : "unchecked";

  return (
    <div className="flex items-center ">
      <input
        id={id}
        name={name}
        type="checkbox"
        className="h-4 w-4 md:h-8 md:w-8 border-2 border-solid border-radio-border-color rounded-full"
        /*  onClick={(e) => updateState(e)}
        checked={selected} */
        {...register(registerType, {
          required: false,
        })}
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
