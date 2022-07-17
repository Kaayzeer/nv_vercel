import React from "react";

//react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";

//components
import FormTitle from "../ui-components/FormTitle/FormTitle";
import Button from "../ui-components/Button/Button";

type Props = {
  setShowModal: any;
  register: any;
  handleFormButton: any;
  handleSubmit: any;
};

export default function GetStarted({ setShowModal }: Props) {
  const onClick = () => {};

  return (
    <div
      className="fixed top-0 left-0 z-100 w-full h-full "
      style={{ backgroundColor: "#00000032" }}
    >
      <div className="h-full flex justify-center ">
        <FormTitle step={""} title={"Do you want to sign out"} p={""} />
        <div className="flex">
          <Button
            color={"bg-yellow"}
            buttonText={"text-black"}
            type={"signOutModalBtn"}
            onClick={onClick}
          />
          <Button
            color={"bg-grey"}
            buttonText={"text-black"}
            type={"signOutModalBtn"}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}
