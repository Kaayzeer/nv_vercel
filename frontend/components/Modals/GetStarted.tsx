import React from "react";

//react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";

//components
import FormTitle from "../ui-components/FormTitle/FormTitle";
import FormInput from "../ui-components/InputField/FormInput";
import FormButton from "../ui-components/Button/Button";

type Props = {
  setShowModal: any;
  register: any;
  handleFormButton: any;
  handleSubmit: any;
};

export default function GetStarted({
  setShowModal,
  register,
  handleFormButton,
  handleSubmit,
}: Props) {
  return (
    <div
      className="fixed top-0 left-0 z-100 w-full h-full "
      style={{ backgroundColor: "#00000032" }}
    >
      <div className="h-full flex justify-center ">
        <form
          className="w-5/6 m-auto bg-white p-8 md:p-20 rounded-2xl md:w-3/5 lg:w-2/5"
          onSubmit={handleSubmit(handleFormButton)}
        >
          <FormTitle
            step={""}
            title={"Kom igång!"}
            p={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
          />

          <FormInput
            title={""}
            p={""}
            placeholder={"email"}
            inputType={"email"}
            type={"email"}
            register={register}
          />
          <FormInput
            title={""}
            p={""}
            placeholder={"phonenumber"}
            inputType={"phone"}
            type={"phone"}
            register={register}
          />
          <div className="text-center">
            <FormButton
              onClick={() => setShowModal(false)}
              color={"text-white"}
              buttonText={"continue"}
              type={"getStartedBtn"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
