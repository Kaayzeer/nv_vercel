import React, { useState, useEffect } from "react";

//react hook form
import { useForm, SubmitHandler } from "react-hook-form";

//hooks
//hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogin } from "../../hooks/useLogin";

//firebase imports
import { auth } from "../../firebase/firebaseSetup";

//components
import Button from "../ui-components/Button/Button";
import Dropdown from "../ui-components/Dropdown/Dropdown";
import TextArea from "../ui-components/TextArea/TextArea";
import FormTitle from "../ui-components/FormTitle/FormTitle";
import BackButton from "../ui-components/Button/BackButton";

//wizard imports
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import WizardLayout from "../Wizard/WizardLayout";
import FormButton from "../ui-components/Button/FormButton";

/* type Props = {
  step: TStep;
  wizard: IWizard;
  form: any;
  dispatchForm: Function;
};
 */
interface IFormInput {
  firstname: string;
  surname: string;
  phone: number;
  email: string;
  password: string;
}

export default function Form(props: {
  step: TStep;
  wizard: IWizard;
  form: any;
  dispatchForm: Function;
}) {
  const { login } = useLogin();
  const { user } = useAuthContext();
  const { register, handleSubmit } = useForm<IFormInput>();
  const [error, setError] = useState<String>("");

  const handleFormButton = () => {
    props.wizard.nextStep();
    window.scrollTo(0, 0);
  };

  const handleBackButton = () => {
    props.wizard.previousStep();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <>
        <div className="w-full pt-40 ">
          <WizardLayout {...props}>
            <div className="customContainer px-4 py-5 md:px-0 md:py-0  space-y-10">
              <div className="wizard-layout__question">name purpose</div>
              <FormTitle
                step={`step 1`}
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
                  <BackButton title={"Go back"} onClick={handleBackButton} />
                  <FormButton
                    color={"text-white"}
                    buttonText={"continue"}
                    type={"formBtn"}
                    onClick={handleFormButton}
                  />
                </div>
              </form>
            </div>
          </WizardLayout>
        </div>
      </>
    </>
  );
}
