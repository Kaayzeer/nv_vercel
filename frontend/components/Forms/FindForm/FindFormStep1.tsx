import React, { useState, useEffect, useRef } from "react";

//react hook form
import { useForm, SubmitHandler } from "react-hook-form";

//next router
import { useRouter } from "next/router";

//components

import DropDown from "../../ui-components/Dropdown/DropDown";
import TextArea from "../../ui-components/TextArea/TextArea";
import FormTitle from "../../ui-components/FormTitle/FormTitle";
import BackButton from "../../ui-components/Button/ClickButton";
import GetStarted from "../../../components/Modals/GetStarted";

//wizard imports
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import WizardLayout from "../../Wizard/WizardLayout";
import FormButton from "../../ui-components/Button/FormButton";

type Props = {
  type: "offer" | "buy" | "sell";
};

interface IFormInput {
  business_desc: string;
  additional_details?: string;
  industry: string;
  region: string;
  phone: number | string;
  email: string;
}

export default function Form(
  props: {
    step: TStep;
    wizard: IWizard;
    form: any;
    dispatchForm: Function;

    findFormValues: any;
    setFindFormValues: Function;
  },
  { type }: Props
) {
  //Modal toggler
  const [showModal, setShowModal] = useState(true);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      business_desc: props.findFormValues.business_desc,
      additional_details: props.findFormValues.additional_details,
      industry: props.findFormValues.industry,
      region: props.findFormValues.region,
      phone: props.findFormValues.phone,
      email: props.findFormValues.email,
    },
  });

  const handleFormButton: SubmitHandler<IFormInput> = (form_data: any) => {
    console.log(form_data);

    props.setFindFormValues({ ...props.findFormValues, ...form_data });
    // Update values
    props.dispatchForm({
      type: "UPDATE_KEY_VALUES",
      payload: form_data,
    });

    // Go to next form
    props.wizard.nextStep();
    window.scrollTo(0, 0);
  };

  //Go back to find page
  const handleBackButton = () => {
    router.push("/find");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <>
        <div className="w-full pt-40 ">
          <WizardLayout {...props}>
            {!props.findFormValues.email && showModal && (
              <GetStarted
                setShowModal={setShowModal}
                register={register}
                handleFormButton={handleFormButton}
                handleSubmit={handleSubmit}
                /*  dispatchForm={props.dispatchForm}
                form={props.form} */
              />
            )}
            <div className="customContainer px-4 py-5 md:px-0 md:py-0  space-y-10">
              <FormTitle
                step={`step 1`}
                title={"What do you need to name?"}
                p={
                  "Tell us about the use case in mind so that we can present a selection of suitable brand name domains. "
                }
              />

              <form
                onSubmit={handleSubmit(handleFormButton)}
                className="space-y-10"
              >
                <TextArea
                  title="What is your Business about?"
                  p="Let us know what you do. "
                  register={register}
                  type="about_business"
                  /* value={
                    props.formOneValues.business_desc &&
                    props.formOneValues.business_desc
                  } */
                />
                {errors.business_desc && (
                  <p className="error">{errors.business_desc.message}</p>
                )}
                <DropDown
                  title="Select your industry"
                  p="Choose your primary vertical."
                  register={register}
                  type="industry"
                  /*  value={
                    props.formOneValues.industry && props.formOneValues.industry
                  } */
                />

                <DropDown
                  title="Primary regions for the brand or business "
                  p="Where are you present?"
                  register={register}
                  type="region"
                  /* value={
                    props.formOneValues.region && props.formOneValues.region
                  } */
                />

                <TextArea
                  title="Additional details"
                  p="Let us know what you think."
                  register={register}
                  type="additional_details"
                  /* value={
                    props.formOneValues.additional_details &&
                    props.formOneValues.additional_details
                  } */
                />
                {errors.additional_details && (
                  <p className="error">{errors.additional_details.message}</p>
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
