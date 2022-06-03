import React from "react";

type Props = {
  title: string;
  p: string;
  register: any;
};

export default function FormInputHalf({ title, p, register }: Props) {
  return (
    <div className="grid grid-cols-6 gap-6">
      <div className="col-span-3 space-y-3">
        <label className="block li-title capitalize" htmlFor="firstname">
          {title}
        </label>
        <p className="section-sub-paragraph text-gray-600 capitalize">{p}</p>
        <input
          type="text"
          {...register("firstname", {
            required: "This field is required",
            maxLength: 20,
          })}
          autoComplete="given-name"
          placeholder="Firstname"
          className="block w-full border-solid border border-black py-3 px-4 placeholder-gray-500  rounded-lg focus:outline-none focus:ring-2"
        />
      </div>
      <div className="col-span-3 space-y-3 mt-auto">
        <input
          type="text"
          {...register("surname", {
            required: "This field is required",
            maxLength: 20,
          })}
          autoComplete="family-name"
          placeholder="Surname"
          className="block w-full border-solid border border-black py-3 px-4 placeholder-gray-500  rounded-lg focus:outline-none focus:ring-2"
        />
      </div>
    </div>
  );
}
