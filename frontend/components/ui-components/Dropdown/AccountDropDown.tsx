import React from "react";
import { branches } from "../../../lib/branches";
import { regions } from "../../../lib/regions";

type Props = {
  title: string;
  register: any;
  type: "industry" | "country";
};

export default function Dropdown({ title, register, type }: Props) {
  const mapFrom =
    type === "industry" ? branches : type === "country" ? regions : [];

  return (
    <div className="w-full space-y-3">
      <label htmlFor={title} className="block text-lg capitalize">
        {title}
      </label>

      <select
        id={title}
        name={title}
        {...register(title, {
          required: false,
        })}
        autoComplete="category-name"
        className={`mt-1 block w-full py-4 px-3 border-none bg-sign-in-input-bg rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm `}
      >
        <option key="optkey" value={"Select"}>
          Select
        </option>
        {mapFrom.map((branch, idx) => (
          <option key={idx}>{branch}</option>
        ))}
      </select>
    </div>
  );
}
