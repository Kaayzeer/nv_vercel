import React, { useEffect } from "react";

//react hook form
import { useForm, SubmitHandler } from "react-hook-form";

//hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogin } from "../../hooks/useLogin";

//firebase imports
import { auth } from "../../firebase/firebaseSetup";

//components
import BackButton from "../ui-components/Button/BackButton";
import Button from "../ui-components/Button/Button";
import DropdownFS2 from "../ui-components/Dropdown/DropDownFS2";
import FormTitle from "../ui-components/FormTitle/FormTitle";
import FormInput from "../ui-components/InputField/FormInput";
import RadioButton from "../ui-components/RadioButton/RadioButton";

//wizard
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import WizardLayout from "../Wizard/WizardLayout";
import FormButton from "../ui-components/Button/FormButton";

type Props = {
  type: "offer" | "buy" | "sell";
};

interface IFormInput {
  firstname: string;
  surname: string;
  phone: number;
  email: string;
  password: string;
}
export default function FindFormStep2(
  props: {
    step: TStep;
    wizard: IWizard;
    form: any;
    dispatchForm: Function;
  },
  { type }: Props
) {
  const { user } = useAuthContext();
  const { register, handleSubmit } = useForm<IFormInput>();

  const handleFormButton = (saved_data: any) => {
    props.dispatchForm({
      type: "UPDATE_KEY_VALUES",
      payload: saved_data,
    });

    props.wizard.nextStep();
    window.scrollTo(0, 0);
  };

  const handleBackButton = () => {
    props.wizard.previousStep();
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full pt-40 ">
      <WizardLayout {...props}>
        <div className="customContainer px-4 py-5 md:px-0 md:py-0  space-y-10">
          <div className="wizard-layout__question">name preference</div>
          <FormTitle
            step={"step 2"}
            title={"What kind of name do you want?"}
            p={
              "Try to explain what you are looking for in the name. This helps with curation and selection of suitable brand names. "
            }
          />

          <form
            onSubmit={handleSubmit(handleFormButton)}
            className="space-y-10 "
          >
            <FormInput
              title={"What we like"}
              p={"Try to incorporate these words or ideas in the name."}
              placeholder={"write what you like..."}
              register={register}
              inputType="text"
            />

            <FormInput
              title={"What we don't like"}
              p={"Try to avoid using these terms or ideas in the name."}
              placeholder={"write what you don't like..."}
              register={register}
              inputType="text"
            />

            <div className="relative">
              <DropdownFS2
                title="maximum number of letters"
                p="Do not exceed this character count."
                register
              />
              <div className="mt-6 md:mt-0 md:absolute md:bottom-2 md:right-20">
                <RadioButton
                  id={"no-letter-preference"}
                  htmlFor={"no-letter-preference"}
                  name={"no-preference-of-letter"}
                  title={"I dont have a preference"}
                />
              </div>
            </div>
            <div className="relative">
              <DropdownFS2
                title="maximum number of words"
                p="Do not exceed this amount of terms."
                register
              />
              <div className="mt-6 md:mt-0 md:absolute md:bottom-2 md:right-20">
                <RadioButton
                  id={"no-word-preference"}
                  htmlFor={"no-word-preference"}
                  name={"no-preference-of-word"}
                  title={"I dont have a preference"}
                />
              </div>
            </div>
            <div className="px-4 py-40 mb-10 text-center sm:px-6 flex flex-col items-center">
              <BackButton title={"Go back"} onClick={handleBackButton} />
              <FormButton
                color={"text-white"}
                buttonText={"continue"}
                type={"formBtn"}
              />
            </div>
          </form>
        </div>
      </WizardLayout>
    </div>
  );
}
