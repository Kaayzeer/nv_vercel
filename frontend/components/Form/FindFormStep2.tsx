import React, { useEffect, useState } from "react";

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
import Dropdown from "../ui-components/Dropdown/DropDown";
import FormTitle from "../ui-components/FormTitle/FormTitle";
import FormInput from "../ui-components/InputField/FormInput";
import RadioButton from "../ui-components/RadioButton/RadioButton";

//wizard
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import WizardLayout from "../Wizard/WizardLayout";
import FormButton from "../ui-components/Button/FormButton";
import DropDownRadioLTR from "../ui-components/Dropdown/DropDownRadioLTR";
import DropDownRadioWords from "../ui-components/Dropdown/DropDownRadioWords";

interface IFormInput {
  names_disliked?: string[];
  keywords: string[];
  maximum_letters: string | number | boolean;
  maximum_words: string | number | boolean;
  no_letters: boolean;
  no_words: boolean;
}
export default function FindFormStep2(props: {
  step: TStep;
  wizard: IWizard;
  form: any;
  dispatchForm: Function;
}) {
  const {
    register,
    handleSubmit,
    watch,
    unregister,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      names_disliked: [],
      keywords: [],
      maximum_letters: 0,
      maximum_words: 0,
      no_letters: false,
      no_words: false,
    },
  });

  const wordCheckbox = watch("no_words");

  const letterCheckbox = watch("no_letters");

  /*   console.log("no_words", wordCheckbox);
  console.log("no_letters", letterCheckbox); */

  console.log(errors);

  useEffect(() => {
    if (wordCheckbox) {
      unregister("maximum_words");
    }
    if (letterCheckbox) {
      unregister("maximum_letters");
    }
  }, [letterCheckbox, wordCheckbox, unregister]);

  const handleFormButton: SubmitHandler<IFormInput> = (saved_data: any) => {
    console.log(saved_data);
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
              type="keywords"
            />
            {errors.keywords && (
              <p className="error">{(errors.keywords as any).message}</p>
            )}
            <FormInput
              title={"What we don't like"}
              p={"Try to avoid using these terms or ideas in the name."}
              placeholder={"write what you don't like..."}
              register={register}
              inputType="text"
              type="names_disliked"
            />
            {errors.names_disliked && (
              <p className="error">{(errors.names_disliked as any).message}</p>
            )}
            <DropDownRadioLTR
              register={register}
              letterCheckbox={letterCheckbox}
            />
            <DropDownRadioWords
              register={register}
              wordCheckbox={wordCheckbox}
            />
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
