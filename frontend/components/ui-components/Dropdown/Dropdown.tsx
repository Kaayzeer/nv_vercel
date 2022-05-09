import React from "react";

type Props = {
  title: string;
  p: string;
};

export default function Dropdown({ title, p }: Props) {
  return (
    <div className="md:w-1/2 space-y-3">
      <label htmlFor="business" className="block li-title capitalize">
        {title}
      </label>
      <p className="section-sub-paragraph text-gray-600 capitalize">{p}</p>
      <select
        id="business"
        name="business"
        autoComplete="category-name"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option>IT</option>
        <option>investment</option>
        <option>finances</option>
      </select>
    </div>
  );
}
