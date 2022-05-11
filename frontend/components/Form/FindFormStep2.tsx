import React from "react";
import BackButton from "../ui-components/Button/BackButton";
import Button from "../ui-components/Button/Button";
import Dropdown from "../ui-components/Dropdown/Dropdown";
import FormTitle from "../ui-components/FormTitle/FormTitle";
import FormInput from "../ui-components/InputField/FormInput";
import RadioButton from "../ui-components/RadioButton/RadioButton";

type Props = {};

export default function FindFormStep2({}: Props) {
  return (
    <div className="w-full pt-40 ">
      <div className="customContainer px-4 py-5 md:px-0 md:py-0  space-y-10">
        <FormTitle
          step={"step 2"}
          title={"What kind of name do you want?"}
          p={
            "Try to explain what you are looking for in the name. This helps with curation and selection of suitable brand names. "
          }
        />

        <form className="space-y-10  ">
          <FormInput
            title={"What we like"}
            p={"Try to incorporate these words or ideas in the name."}
            placeholder={"write what you like..."}
          />

          <FormInput
            title={"What we don't like"}
            p={"Try to avoid using these terms or ideas in the name."}
            placeholder={"write what you don't like..."}
          />

          <div className="relative">
            <Dropdown
              title="maximum number of letters"
              p="(Which is your primary industry?)"
            />
            <div className="absolute bottom-2 right-20">
              <RadioButton
                id={"no-letter-preference"}
                htmlFor={"no-letter-preference"}
                name={"no-preference-of-letter"}
                title={"I dont have a preference"}
              />
            </div>
          </div>
          <div className="relative">
            <Dropdown
              title="maximum number of words"
              p="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <div className="absolute bottom-2 right-20">
              <RadioButton
                id={"no-word-preference"}
                htmlFor={"no-word-preference"}
                name={"no-preference-of-word"}
                title={"I dont have a preference"}
              />
            </div>
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
