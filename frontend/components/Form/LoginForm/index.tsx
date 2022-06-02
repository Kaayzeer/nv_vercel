import React from "react";
import Button from "../../ui-components/Button/Button";

type Props = {
  emailLabel: "Email";
  passwordLabel: "Password";
  email: string;
  password: string;
};

const loginInputs = [
  { inputNameLabel: "email", inputNamePassword: "password" },
];

export default function LoginForm({
  emailLabel,
  email,
  password,
  passwordLabel,
}: Props) {
  return (
    <div className="flex max-w-lg bg-white rounded-lg shadow-signInCard">
      <form className="flex flex-col items-left justify-between p-10 2xl:p-20 w-full gap-3 ">
        <label htmlFor="city" className="section-sub-paragraphMediumBold">
          {emailLabel}
        </label>
        <input
          type="text"
          name="city"
          id="city"
          autoComplete="address-level2"
          className="mt-1 py-4 px-4 w-full bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
        />

        <label htmlFor="city" className="section-sub-paragraphMediumBold">
          {passwordLabel}
        </label>
        <input
          type="password"
          name="city"
          id="city"
          autoComplete="address-level2"
          className="mt-1 py-4 px-4 w-full bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
        />
        <Button
          linkHref={"#"}
          color={"text-white"}
          buttonText={"sign in"}
          type={"signInBtn"}
        />
        <button className="underline text-sm font-normal mt-10" type="button">
          Forgot password?
        </button>
      </form>
    </div>
  );
}
