import React, { useState } from "react";

//react hook form
import { useForm, SubmitHandler } from "react-hook-form";

//hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogin } from "../../hooks/useLogin";

//firebase imports
import { auth } from "../../firebase/firebaseSetup";

//components
import BackButton from "../ui-components/Button/BackButton";
import FormTitle from "../ui-components/FormTitle/FormTitle";
import FormInput from "../ui-components/InputField/FormInput";
import NameInput from "../ui-components/InputField/NameInput";
import RadioButton from "../ui-components/RadioButton/RadioButton";

//wizard imports
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import WizardLayout from "../Wizard/WizardLayout";
import FormButton from "../ui-components/Button/FormButton";
import StripeCheckout from "../stripeCheckout/stripeCheckout";

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

export default function FindFormStep3(
  props: {
    step: TStep;
    wizard: IWizard;
    form: any;
    dispatchForm: Function;
  },
  { type }: Props
) {
  const { login } = useLogin();
  const { user } = useAuthContext();

  const { register, handleSubmit } = useForm<IFormInput>();

  const [error, setError] = useState<String>("");
  const [fetchedId, setFetchedId] = useState<string>("");

  const handleFormButton = () => {
    props.wizard.nextStep();
    window.scrollTo(0, 0);
  };

  const handleBackButton = () => {
    props.wizard.previousStep();
    window.scrollTo(0, 0);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    let fetched_id: number = -1;

    const headers: any = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    // Add to header
    if (user) {
      await auth.currentUser?.getIdToken().then(async (token: string) => {
        headers["authorization"] = `Bearer  ${token}`;
      });
    }

    console.log(data);

    //send to db
    await fetch(
      `http://localhost:5001/next-venture/europe-west1/api/public/${type}`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ ...data, domains: ["asd.com"] }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (!data.success) setError(data.message.details.join("\n"));

        if (data.id) {
          console.log(data.id);
          setFetchedId(data.id);
        }
      })
      .catch((err) => console.log(err));

    /* login("niko@test.com", "123456"); */
  };

  return (
    <div className="w-full pt-40 ">
      <WizardLayout {...props}>
        <div className="customContainer px-4 py-5 md:px-0 md:py-0  space-y-10">
          <div className="wizard-layout__question">customer</div>
          <FormTitle
            step={"step 3"}
            title={"Who are you?"}
            p={
              "Tell us about yourself or the business you represent so that we can process your order. "
            }
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <NameInput
              register={register}
              title={"Name*"}
              p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />

            <FormInput
              title={"Email*"}
              p={"This is your registered email."}
              placeholder={"ifyllt redan"}
              inputType={"email"}
              register={register}
            />

            <FormInput
              title={"Phone*"}
              p={"This is your registered phone number."}
              placeholder={"ifyllt redan"}
              inputType={"number"}
              register={register}
            />

            <FormInput
              title={"Organisation"}
              p={"Do you represent a company? Yes No. "}
              placeholder={"Company name"}
              inputType={"text"}
              register={register}
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
              <BackButton title={"Go back"} onClick={handleBackButton} />
              {/* <FormButton
                color={"text-white"}
                buttonText={"continue"}
                type={"formBtn"}
                onClick={handleFormButton}
              /> */}
              {!fetchedId && <StripeCheckout fetchedId={fetchedId} />}
              {fetchedId && <StripeCheckout fetchedId={fetchedId} />}
            </div>
          </form>
        </div>
      </WizardLayout>
    </div>
  );
}
