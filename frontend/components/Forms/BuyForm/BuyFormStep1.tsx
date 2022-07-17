import React from "react";

//react hook form
import { useForm, SubmitHandler } from "react-hook-form";

//next router
import { useRouter } from "next/router";

//components

import DropDown from "../../ui-components/Dropdown/DropDown";
import TextArea from "../../ui-components/TextArea/TextArea";
import FormTitle from "../../ui-components/FormTitle/FormTitle";
import BackButton from "../../ui-components/Button/ClickButton";

//wizard imports
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import WizardLayout from "../../Wizard/WizardLayout";
import FormButton from "../../ui-components/Button/Button";

type Props = {
  type: "offer" | "buy" | "sell";
};

interface IFormInput {
  domain: string;
  budget: number;
}

export default function Form(
  props: {
    step: TStep;
    wizard: IWizard;
    form: any;
    dispatchForm: Function;
    setBuyFormValues: any;
    buyFormValues: any;
  },
  { type }: Props
) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      domain: props.buyFormValues.domain,
      budget: props.buyFormValues.budget,
    },
  });

  const handleBuyFormButton: SubmitHandler<IFormInput> = (form_data: any) => {
    console.log(form_data);

    //lift up state for form value updates
    props.setBuyFormValues({ ...props.buyFormValues, ...form_data });

    // Update values
    props.dispatchForm({
      type: "UPDATE_KEY_VALUES",
      payload: form_data,
    });

    // Go to next form
    props.wizard.nextStep();
    window.scrollTo(0, 0);
  };

  //Go back to page
  const handleBackButton = () => {
    router.push("/buy");
    window.scrollTo(0, 0);
  };

  console.log(errors);

  return (
    <>
      <>
        <div className="w-full pt-40 ">
          <WizardLayout {...props}>
            <div className="customContainer px-4 py-5 md:px-0 md:py-0  space-y-10">
              <FormTitle
                step={`step 1`}
                title={"What domain do you want?"}
                p={
                  "Before Next Venture starts to research your domain acquisition to find out if the domain you need can be purchased, we need some information."
                }
              />

              <form
                onSubmit={handleSubmit(handleBuyFormButton)}
                className="space-y-10"
              >
                <TextArea title="" p="" register={register} type="domain" />
                {errors.domain && (
                  <p className="error">{errors.domain.message}</p>
                )}

                <DropDown
                  title="How much are you prepared to spend?."
                  p="Let us know a preliminary budget so we can assess the acquisition project and plan the negotiation."
                  register={register}
                  type="budget"
                />

                {errors.budget && (
                  <p className="error">{errors.budget.message}</p>
                )}
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
      </>
    </>
  );
}
