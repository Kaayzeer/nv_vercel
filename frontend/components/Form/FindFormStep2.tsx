import React from "react";
import Button from "../ui-components/Button/Button";
import Dropdown from "../ui-components/Dropdown/Dropdown";
import FormTitle from "../ui-components/FormTitle/FormTitle";
import FormInput from "../ui-components/InputField/formInput";

type Props = {};

export default function FindFormStep2({}: Props) {
  return (
    <div className="w-full pt-40 ">
      <div className="customContainer px-4 py-5 md:px-0 md:py-0  space-y-10">
        <FormTitle
          step={"step 2"}
          title={"Find a name"}
          p={
            "Let us help you curate a selection of brand names where the matching domain is likely possible to acquire. "
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
            p={"These words or ideas are not what we like."}
            placeholder={"write what you don't like..."}
          />
          <Dropdown
            title="maximum number of letters"
            p="(Which is your primary industry?)"
          />

          <Dropdown
            title="maximum number of words"
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
  );
}
