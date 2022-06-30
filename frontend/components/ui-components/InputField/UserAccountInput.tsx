import React from "react";

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
  return (
    <div className="space-y-4 ">
      <div className="flex flex-col">
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
          className="mt-1 py-4 w-full md:max-w-md bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor={phoneLabel}
          className="section-sub-paragraphMediumBold capitalize"
        >
          {phoneLabel}
        </label>
        <input
          type={phoneLabel}
          {...register(phoneLabel, {
            required: "This field is required",
            maxLength: 20,
            pattern: /^[a-zA-Z0-9]{3,30}$/,
          })}
          autoComplete="current-password"
          className="mt-1 py-4 w-full md:max-w-md bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
        />
      </div>
    </div>
  );
}
