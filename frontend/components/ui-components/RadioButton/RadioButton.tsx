import React, { useState } from "react";
import Link from "next/link";

type Props = {
  title: string;
  type?: "no_letters" | "no_words" | "policy";
  register: any;

  /*   selected?: boolean;
  setSelected?: any;
  dropDownValue?: string;
  updateState?: any;
  updateDropDownState?: any; */
};

export default function RadioButton({
  title,
  type,
  register,
}: /*   selected,
  setSelected,
  dropDownValue,
  updateState,
  updateDropDownState, */
Props) {
  //Modal toggler
  const [showModal, setShowModal] = useState(true);

  const registerType =
    type === "no_letters"
      ? "no_letters"
      : type === "no_words"
      ? "no_words"
      : type === "policy"
      ? "policy"
      : "unchecked";

  return (
    <div className="flex items-center ">
      <input
        id={type}
        name={type}
        type="checkbox"
        className="h-4 w-4 md:h-8 md:w-8 border-2 border-solid border-radio-border-color rounded-full"
        /*  onClick={(e) => updateState(e)}
        checked={selected} */
        {...register(registerType, {
          required: false,
        })}
      />
      <label
        htmlFor={type}
        className="ml-3 block section-sub-paragraph text-gray-700"
      >
        {title}
      </label>
      {type === "policy" && (
        <Link href={"/policy"}>
          <a
            className={"underline uppercase ml-1"}
            /* aria-current={item.current ? "page" : undefined} */
          >
            policy
          </a>
        </Link>
      )}
    </div>
  );
}
