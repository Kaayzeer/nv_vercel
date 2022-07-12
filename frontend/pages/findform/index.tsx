import React, { useState, useReducer, useEffect } from "react";
import { useWizard } from "use-wizard";

import WizardSteps from "../../components/Wizard/WizardSteps";
import formReducer from "../../components/Wizard/formReducer";

//components
import Layout from "../../components/Layout/Layout";

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

  //store formData in outside state to save input values
  const [formOneValues, setFormOneValues] = useState({});
  const [formTwoValues, setFormTwoValues] = useState({});

  console.log({ formOneValues }, { formTwoValues });
  console.log(form);
  return (
    <Layout title={""} description={""} keywords={""}>
      <WizardSteps
        {...{
          step,
          wizard,
          form,
          dispatchForm,
          setFormOneValues,
          formOneValues,
          formTwoValues,
          setFormTwoValues,
        }}
      />
    </Layout>
  );
}
