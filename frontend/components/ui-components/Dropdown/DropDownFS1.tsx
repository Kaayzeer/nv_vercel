import React from "react";
import { branches } from "../../../lib/branches";
import { regions } from "../../../lib/regions";

type Props = {
  title: string;
  p: string;
  register: any;
};

export default function DropDownFS1({ title, p, register }: Props) {
  const mapFrom = title === "Select your industry" ? branches : regions;
  const registerFilter =
    title === "Select your industry" ? "business_type" : "country";

  return (
    <div className="md:w-1/2 space-y-3">
      <label htmlFor={registerFilter} className="block li-title capitalize">
        {title}
      </label>
      <p className="section-sub-paragraph text-gray-600 capitalize">{p}</p>
      <select
        id={registerFilter}
        name={registerFilter}
        {...register(registerFilter, {
          required: false,
        })}
        defaultValue={title}
        autoComplete="category-name"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option key="optkey" value={title}>
          {title}
        </option>
        {mapFrom.map((branch, idx) => (
          <option key={idx}>{branch}</option>
        ))}
      </select>
    </div>
  );
}
