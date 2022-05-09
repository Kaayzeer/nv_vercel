import React, { useState } from "react";

//react hook form
import { useForm, SubmitHandler } from "react-hook-form";

//hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogin } from "../../hooks/useLogin";

//firebase imports
import { auth } from "../../firebase/firebaseSetup";
import Button from "../ui-components/Button/Button";
import Dropdown from "../ui-components/Dropdown/Dropdown";
import TextArea from "../ui-components/TextArea/TextArea";
import FormTitle from "../ui-components/FormTitle/FormTitle";

type Props = {
  /*   isFind: Boolean;
  isLogin: Boolean;
  type: "offer" | "buy" | "sell";
  onFetched: (id: number) => void; */
};

interface IFormInput {
  firstname: string;
  surname: string;
  phone: number;
  email: string;
  password: string;
}

export default function Form({}: Props) {
  const { login } = useLogin();
  const { user } = useAuthContext();
  const { register, handleSubmit } = useForm<IFormInput>();
  const [error, setError] = useState<String>("");

  return (
    <>
      <>
        <div className="w-full pt-40 ">
          <div className="customContainer px-4 py-5 md:px-0 md:py-0  space-y-10">
            <FormTitle
              step={"step 1"}
              title={"Find a name"}
              p={
                "Let us help you curate a selection of brand names where the matching domain is likely possible to acquire. "
              }
            />

            <form className="space-y-10  ">
              <TextArea
                title="What is your Business/ Brand about?"
                p="Let us know what your business does and what traits you are looking for in a brand name."
              />

              <Dropdown
                title="Select your industry"
                p="(Which is your primary industry?)"
              />

              <TextArea
                title="Additional details"
                p="Let us know any further thoughts"
              />

              <Dropdown
                title="Primary regions for the brand or business "
                p="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />

              <div className="px-4 py-40 mb-10 text-center sm:px-6 ">
                <Button
                  linkHref={"#"}
                  color={"text-white"}
                  buttonText={"Continue"}
                  type={"formBtn"}
                />
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
}
