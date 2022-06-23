import { CardCvcElement } from "@stripe/react-stripe-js";
import React from "react";

type Props = {
  register: any;
  type: "payment_method";
};

export default function TextArea({ register, type }: Props) {
  return (
    <div className="space-y-3">
      <textarea
        id={type}
        name={type}
        {...register(type, {
          required: "This is field is required",
          maxLength: 400,
        })}
        rows={3}
        className="shadow-sm bg-sign-in-input-bg focus:ring-indigo-500 focus:border-indigo-500 p-8 mt-1 block w-full sm:text-sm border border-none rounded-md"
        placeholder={"Card.."}
        autoComplete="on"
      />
    </div>
  );
}
