import React from "react";

//react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";

//components
import FormTitle from "../ui-components/FormTitle/FormTitle";
import FormInput from "../ui-components/InputField/FormInput";
import FormButton from "../ui-components/Button/FormButton";

/* interface IFormInput {
  phone: number;
  email: string;
} */

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
  /*   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>(); */

  /*   const handleFormButton: SubmitHandler<IFormInput> = async (
    form_data: any
  ) => {
    console.log(form_data);
  }; */
  return (
    <div
      className="fixed top-0 left-0 z-100 w-full h-full"
      style={{ backgroundColor: "#00000032" }}
    >
      <div className=" h-full flex justify-center">
        <form
          className="w-full m-auto bg-white p-12 rounded-2xl md:w-1/2 "
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
          <div className="text-center" >
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
