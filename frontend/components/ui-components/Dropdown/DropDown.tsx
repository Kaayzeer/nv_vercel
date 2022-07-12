import React from "react";
import { branches } from "../../../lib/branches";
import { regions } from "../../../lib/regions";
import { letters } from "../../../lib/letters";
import { words } from "../../../lib/words";

type Props = {
  title: string;
  p: string;
  register: any;
  type: "industry" | "region" | "letters" | "words" | "budget";
  wordCheckbox?: boolean;
  letterCheckbox?: boolean;
  value?: any;
};

export default function Dropdown({
  title,
  p,
  register,
  type,
  wordCheckbox,
  letterCheckbox,
  value,
}: Props) {
  const registerType =
    type === "industry"
      ? "industry"
      : type === "region"
      ? "region"
      : type === "letters"
      ? "maximum_letters"
      : type === "words"
      ? "maximum_words"
      : type === "budget"
      ? "budget"
      : "";

  const mapFrom =
    type === "industry"
      ? branches
      : type === "region"
      ? regions
      : type === "letters"
      ? letters
      : type === "words"
      ? words
      : [];

  return (
    <div className="md:w-1/2 space-y-3">
      <label htmlFor={registerType} className="block li-title capitalize">
        {title}
      </label>
      <p className="section-sub-paragraph text-gray-600 capitalize">{p}</p>
      <select
        disabled={letterCheckbox || wordCheckbox}
        id={registerType}
        name={registerType}
        {...register(registerType, {
          required: false,
        })}
        autoComplete="category-name"
        className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
          (letterCheckbox && " cursor-not-allowed ") ||
          (wordCheckbox && " cursor-not-allowed ")
        }`}
        value={value}
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
