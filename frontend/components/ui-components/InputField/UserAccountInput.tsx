import React from "react";
import UnderlinedButton from "../Button/UnderlinedButton";
import { useState } from "react";

type Props = {
  emailLabel: "email";
  phoneLabel: "phone number";
  register: any;
};

export default function FormInputHalf({
  emailLabel,
  phoneLabel,
  register,
}: Props) {
  const [nonEditable, setNonEditable] = useState(true);

  const [btnName, setBtnName] = useState("Edit");

  const toggleEditBtn = () => {
    setNonEditable(!nonEditable);

    // Here we need to also add logic for updating info in backend
    if (nonEditable) setBtnName("Save");
    else setBtnName("Edit");
  };

  return (
    <div className="flex flex-col space-y-7 lg:w-1/2 w-full">
      <label
        htmlFor={emailLabel}
        className="section-sub-paragraphMediumBold capitalize"
      >
        {emailLabel}
      </label>
      <input
        type={emailLabel}
        id={emailLabel}
        {...register(emailLabel, {
          required: "This field required",
        })}
        autoComplete="email"
        className="mt-1 py-4 w-full bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
        disabled={nonEditable}
      />

      <div className="flex flex-col">
        <label
          htmlFor={phoneLabel}
          className="section-sub-paragraphMediumBold capitalize"
        >
          {phoneLabel}
        </label>
        <input
          type="tel"
          {...register(phoneLabel, {
            required: "This field is required",
            maxLength: 20,
            pattern: /^[a-zA-Z0-9]{3,30}$/,
          })}
          autoComplete="current-password"
          className="mt-1 py-4 w-full bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
          disabled={nonEditable}
        />
      </div>

      <div className="flex flex-row-reverse">
        <UnderlinedButton title={btnName} onClick={toggleEditBtn} />
      </div>
    </div>
  );
}
