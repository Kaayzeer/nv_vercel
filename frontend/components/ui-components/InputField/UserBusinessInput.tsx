import React from "react";

type Props = {
  companyLabel: "company name";
  register: any;
};

export default function FormInputHalf({
  companyLabel,

  register,
}: Props) {
  return (
    <>
      <label
        htmlFor={companyLabel}
        className="section-sub-paragraphMediumBold capitalize"
      >
        {companyLabel}
      </label>
      <input
        type={companyLabel}
        {...register("company_name", {
          required: "This field is required",
          maxLength: 20,
          pattern: /^[a-zA-Z0-9]{3,30}$/,
        })}
        autoComplete="organization"
        className="mt-1 py-4 w-full  bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
      />
    </>
  );
}
