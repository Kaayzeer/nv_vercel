import React from "react";

type Props = {
  title: string;
  p: string;
  register: any;
};

export default function TextAreaFS1({ title, p, register }: Props) {
  const registerFilter =
    title === "What is your Business about?"
      ? "business_desc"
      : "Additional details";

  return (
    <div className="space-y-3">
      <label htmlFor={registerFilter} className="block li-title capitalize">
        {title}
      </label>
      <p className="section-sub-paragraph text-gray-600 capitalize">{p}</p>
      <div className="mt-1">
        <textarea
          id={registerFilter}
          name={registerFilter}
          {...register(registerFilter, {
            required: false,
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
