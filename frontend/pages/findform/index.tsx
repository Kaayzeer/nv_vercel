import React, { useState, useReducer, useEffect } from "react";
import { useWizard } from "use-wizard";

import WizardSteps from "../../components/Wizard/WizardSteps";
import formReducer from "../../components/Wizard/formReducer";

//components
import Layout from "../../components/Layout/Layout";
interface IFormInput {
  names_disliked?: string[];
  keywords: string[];
  maximum_letters: string | number | boolean;
  maximum_words: string | number | boolean;
  no_letters: boolean;
  no_words: boolean;
}
type Props = {};

export default function FindForm({}: Props) {
  // This is how you create the wizard
  const [step, wizard] = useWizard([
    "name purpose",
    "name preference",
    "customer",
    "payment",
  ]);

  // This is only used to store user inputs
  const [form, dispatchForm] = useReducer(formReducer, {});

  //store formData in outside state to save input values via props in the useForm declaration
  const [findFormValues, setFindFormValues] = useState({});

  return (
    <Layout title={""} description={""} keywords={""}>
      <WizardSteps
        {...{
          step,
          wizard,
          form,
          dispatchForm,
          setFindFormValues,
          findFormValues,
        }}
      />
    </Layout>
  );
}
