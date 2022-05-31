import React from "react";

type Props = {
  title: string;
  p: string;
  register: any;
  type: "about_business" | "additional_details";
};

export default function TextArea({ title, p, register, type }: Props) {
  const registerFilter =
    type === "about_business"
      ? "business_desc"
      : type === "additional_details"
      ? "additional_details"
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
            required: true,
            maxLength: 400,
          })}
          rows={3}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-8 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          placeholder="Describe your business"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
