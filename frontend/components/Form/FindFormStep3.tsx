import React from "react";
import BackButton from "../ui-components/Button/BackButton";
import Button from "../ui-components/Button/Button";
import FormTitle from "../ui-components/FormTitle/FormTitle";
import FormInput from "../ui-components/InputField/FormInput";
import NameInput from "../ui-components/InputField/NameInput";
import RadioButton from "../ui-components/RadioButton/RadioButton";

type Props = {};

export default function FindFormStep3({}: Props) {
  return (
    <div className="w-full pt-40 ">
      <div className="customContainer px-4 py-5 md:px-0 md:py-0  space-y-10">
        <FormTitle
          step={"step 3"}
          title={"Who are you?"}
          p={
            "Tell us about yourself or the business you represent so that we can process your order. "
          }
        />

        <form className="space-y-10">
          <NameInput
            title={"Name*"}
            p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />

          <FormInput
            title={"Email*"}
            p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            placeholder={"john.doe@gmail.com"}
          />

          <FormInput
            title={"Phone*"}
            p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            placeholder={"phonenumber"}
          />

          <FormInput
            title={"Company name*"}
            p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            placeholder={"Company name"}
          />
          <div className="pt-6 ">
            <RadioButton
              id={"check-policy"}
              htmlFor={"check-policy"}
              name={"check-policy"}
              title={"Här skriver vi något om att godkänna vilkor och POLICY"}
            />
          </div>
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
  );
}
