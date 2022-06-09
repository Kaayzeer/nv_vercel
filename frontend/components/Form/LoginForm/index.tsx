import React, { useEffect, useState } from "react";
import Button from "../../ui-components/Button/Button";

//hooks
import { useLogin } from "../../../hooks/useLogin";
import { useAuthContext } from "../../../hooks/useAuthContext";
//firebase imports
import { auth } from "../../../firebase/firebaseSetup";

//react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
import FormButton from "../../ui-components/Button/FormButton";

type IFormInput = {
  email: string;
  password: string;
};

type Props = {
  emailLabel: "email";
  passwordLabel: "password";
};

export default function LoginForm({ emailLabel, passwordLabel }: Props) {
  const { login } = useLogin();
  const { user } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleFormButton: SubmitHandler<IFormInput> = (form_data: any) => {
    console.log("email:", form_data.email);
    console.log("password: ", form_data.password);

    login(form_data.email, form_data.password);
  };

  return (
    <div className="flex max-w-lg bg-white rounded-lg shadow-signInCard">
      <form
        onSubmit={handleSubmit(handleFormButton)}
        className="flex flex-col items-left justify-between p-10 2xl:p-20 w-full gap-3 "
      >
        <label
          htmlFor={emailLabel}
          className="section-sub-paragraphMediumBold capitalize"
        >
          {emailLabel}
        </label>
        <input
          type={emailLabel}
          id={emailLabel}
          {...register("email", {
            required: "This field required",
          })}
          autoComplete="email"
          className="mt-1 py-4 px-4 w-full bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
        />

        {errors.email && <p className="error">{errors.email.message}</p>}

        <label
          htmlFor={passwordLabel}
          className="section-sub-paragraphMediumBold capitalize"
        >
          {passwordLabel}
        </label>
        <input
          type={passwordLabel}
          {...register("password", {
            required: "This field is required",
            maxLength: 20,
            pattern: /^[a-zA-Z0-9]{3,30}$/,
          })}
          autoComplete="current-password"
          className="mt-1 py-4 px-4 w-full bg-sign-in-input-bg  sm:text-sm gray-300 rounded-lg border-0"
        />

        <FormButton
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
