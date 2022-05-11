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
import BackButton from "../ui-components/Button/BackButton";

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
              title={"What do you need to name?"}
              p={
                "Tell us about the use case in mind so that we can present a selection of suitable brand name domains. "
              }
            />

            <form className="space-y-10  ">
              <TextArea
                title="What is your Business about?"
                p="Let us know what you do. "
              />

              <Dropdown
                title="Select your industry"
                p="Choose your primary vertical."
              />

              <Dropdown
                title="Primary regions for the brand or business "
                p="Where are you present?"
              />

              <TextArea
                title="Additional details "
                p="Let us know what you think."
              />

              <div className="px-4 py-40 mb-10 text-center sm:px-6 flex flex-col items-center">
                <BackButton title={"Go back"} />
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
