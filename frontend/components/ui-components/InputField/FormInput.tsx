import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  p: string;
  placeholder: string;
  inputType: string;
  register?: any;
  type: "keywords" | "names_disliked" | "phone" | "email" | "company";
  value?: any;
  /*   dispatchForm: Function;
  form: any; */
};

export default function FormInput({
  title,
  p,
  placeholder,
  register,
  inputType,
  type,
  value,
}: /* dispatchForm,
  form, */
Props) {
  const registerType =
    type === "keywords"
      ? "keywords"
      : type === "names_disliked"
      ? "names_disliked"
      : type === "phone"
      ? "phone"
      : type === "email"
      ? "email"
      : type === "company"
      ? "company"
      : type === "password"
      ? "password"
      : undefined;

  const autoComplete =
    type === "keywords"
      ? "on"
      : type === "names_disliked"
      ? "on"
      : type === "phone"
      ? "tel-national"
      : type === "email"
      ? "email"
      : type === "company"
      ? "organization"
      : type === "password"
      ? "current-password"
      : "on";

  return (
    <div className="space-y-3 ">
      <label className="block li-title capitalize" htmlFor={registerType}>
        {title}
      </label>
      <p className="section-sub-paragraph text-gray-600 capitalize">{p}</p>
      <input
        type={inputType}
        {...register(registerType, {
          required: "This field is required",
          maxLength: 20,

          pattern:
            (registerType === "phone" && /^\d{10}$/) ||
            (registerType === "password" && /^[a-zA-Z0-9]{3,30}$/),
        })}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="block w-full border-solid border border-black py-3 px-4 placeholder-gray-500  rounded-lg focus:outline-none focus:ring-2"
      />
    </div>
  );
}
