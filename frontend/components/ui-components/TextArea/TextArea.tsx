import React from "react";

type Props = {
  title: string;
  p: string;
  register: any;
  type: "about_business" | "additional_details" | "domain";
};

export default function TextArea({ title, p, register, type }: Props) {
  const registerFilter =
    type === "about_business"
      ? "business_desc"
      : type === "additional_details"
      ? "additional_details"
      : type === "domain"
      ? "domain"
      : undefined;

  const placeholder =
    type === "about_business"
      ? "Describe your business"
      : type === "additional_details"
      ? "Write some details.."
      : type === "domain"
      ? "Type your domain name"
      : undefined;

  return (
    <div className="space-y-3">
      <label htmlFor={type} className="block li-title capitalize">
        {title}
      </label>
      <p className="section-sub-paragraph text-gray-600 capitalize">{p}</p>
      <div className="mt-1">
        <textarea
          id={type}
          name={type}
          {...register(registerFilter, {
            required: "This is field is required",
            maxLength: 400,
          })}
          rows={3}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-8 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          placeholder={placeholder}
          autoComplete="on"
        />
      </div>
    </div>
  );
}
