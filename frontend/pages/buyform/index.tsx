import React, { useState, useReducer, useEffect } from "react";
import { useWizard } from "use-wizard";

import WizardSteps from "../../components/Wizard/WizardSteps";
import formReducer from "../../components/Wizard/formReducer";

//components
import Layout from "../../components/Layout/Layout";

type Props = {};

export default function BuyForm({}: Props) {
  //Modal toggler
  const [showModal, setShowModal] = useState(true);

  // This is how you create the wizard
  const [step, wizard] = useWizard(["buy", "customer", "payment"]);

  // This is only used to store user inputs
  const [form, dispatchForm] = useReducer(formReducer, {});

  //store formData in outside state to save input values via props in the useForm declaration
  const [findFormValues, setFindFormValues] = useState({});
  const [sellFormValues, setSellFormValues] = useState({});
  const [buyFormValues, setBuyFormValues] = useState({});

  useEffect(() => {
    console.log(form);
  }, [form]);

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
          setBuyFormValues,
          buyFormValues,
        }}
      />
    </Layout>
  );
}
