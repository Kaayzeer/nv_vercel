import React, { useRef, useState } from "react";

//react hook form
import { useForm, SubmitHandler } from "react-hook-form";

//hooks
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useLogin } from "../../../hooks/useLogin";

//firebase imports
import { auth } from "../../../firebase/firebaseSetup";

//components
import BackButton from "../../ui-components/Button/BackButton";
import FormTitle from "../../ui-components/FormTitle/FormTitle";
import FormInput from "../../ui-components/InputField/FormInput";
import NameInput from "../../ui-components/InputField/NameInput";
import RadioButton from "../../ui-components/RadioButton/RadioButton";

//wizard imports
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import WizardLayout from "../../Wizard/WizardLayout";
import FormButton from "../../ui-components/Button/FormButton";
import StripeCheckout from "../../stripeCheckout/stripeCheckout";

type Props = {
  type: "offer" | "buy" | "sell";
};

interface IFormInput {
  firstname: string;
  surname: string;
  phone: number;
  email: string;
  company: string;
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [fetchedId, setFetchedId] = useState<string>("");

  const hiddenStripeSubmit = useRef(null);

  const handleFormButton: SubmitHandler<IFormInput> = async (
    form_data: any
  ) => {
    console.log("hej");
    console.log(form_data);

    console.log(errors);

    let fetchedId = -1;
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

    // Exists already, use update route
    if (props.form.fetchId) {
      // TODO
    } else {
      //send to db
      await fetch(
        `http://localhost:5001/next-venture/europe-west1/api/public/sell`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            ...props.form,
            ...form_data,
            domains: ["asd.com"],
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // if (!data.success) setError(data.message.details.join("\n"));

          if (data.id) {
            setFetchedId(data.id);
            fetchedId = data.id;
          }
        })
        .catch((err) => console.log(err));
    }

    // Save form info
    props.dispatchForm({
      type: "UPDATE_KEY_VALUES",
      payload: { ...form_data, fetchedId },
    });

    // Fire submit on hidden form
    // @ts-ignore
    /*  hiddenStripeSubmit.current.submit(); */
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
            step={"step 3"}
            title={"Who are you?"}
            p={
              "Tell us about yourself or the business you represent so that we can process your order. "
            }
          />

          <form
            onSubmit={handleSubmit(handleFormButton)}
            className="space-y-10"
          >
            <NameInput
              title={"Name*"}
              p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              register={register}
            />

            <div className="flex text-left space-x-6">
              {errors.firstname && (
                <p className="error ">{errors.firstname.message}</p>
              )}
              {errors.surname && (
                <p className="error ">{errors.surname.message}</p>
              )}
            </div>

            <FormInput
              title={"Email*"}
              p={"This is your registered email."}
              placeholder={"ifyllt redan"}
              inputType={"email"}
              register={register}
              type="email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <FormInput
              title={"Phone*"}
              p={"This is your registered phone number."}
              placeholder={"ifyllt redan"}
              inputType={"number"}
              register={register}
              type="phone"
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
            <FormInput
              title={"Organisation"}
              p={"Do you represent a company? Yes No. "}
              placeholder={"Company name"}
              inputType={"text"}
              register={register}
              type="company"
            />
            {errors.company && (
              <p className="error">{errors.company.message}</p>
            )}
            <div className="pt-6 ">
              <RadioButton
                id={"check-policy"}
                htmlFor={"check-policy"}
                name={"check-policy"}
                title={"Här skriver vi något om att godkänna vilkor och POLICY"}
                register={register}
              />
            </div>
            <div className="px-4 py-40 mb-10 text-center sm:px-6 flex flex-col items-center">
              <BackButton title={"Go back"} onClick={handleBackButton} />

              <FormButton
                color={"text-white"}
                buttonText={"Checkout"}
                type={"formBtn"}
              />
            </div>
          </form>

          {/*   <form
            action={`http://localhost:5001/next-venture/europe-west1/api/payment/create-checkout-session?id=${fetchedId}`}
            method="POST"
            ref={hiddenStripeSubmit}
          /> */}
        </div>
      </WizardLayout>
    </div>
  );
}
