import React from "react";

type Props = {
  title: string;
  p: string;
};

export default function TextArea({ title, p }: Props) {
  return (
    <div className="space-y-3">
      <label htmlFor="about" className="block li-title capitalize">
        {title}
      </label>
      <p className="section-sub-paragraph text-gray-600 capitalize">{p}</p>
      <div className="mt-1">
        <textarea
          id="about"
          name="about"
          rows={3}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-8 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          placeholder="Describe your business"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
