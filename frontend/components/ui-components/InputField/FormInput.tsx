import React from "react";

type Props = {
  title: string;
  p: string;
  placeholder: string;
  inputType: string;
  register: any;
};

export default function FormInput({
  title,
  p,
  placeholder,
  register,
  inputType,
}: Props) {
  const registerType =
    inputType === "number"
      ? "phone"
      : inputType === "email"
      ? "email"
      : inputType === "text"
      ? "company"
      : null;

  return (
    <div className="space-y-3 ">
      <label className="block li-title capitalize" htmlFor="firstname">
        {title}
      </label>
      <p className="section-sub-paragraph text-gray-600 capitalize">{p}</p>
      <input
        type={inputType}
        {...register(registerType, {
          required: true,
          maxLength: 20,
        })}
        placeholder={placeholder}
        autoComplete="given-name"
        className="block w-full border-solid border border-black py-3 px-4 placeholder-gray-500  rounded-lg focus:outline-none focus:ring-2"
      />
    </div>
  );
}