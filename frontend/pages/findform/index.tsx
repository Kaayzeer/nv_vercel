import React, { useState, useReducer, useEffect } from "react";
import { useWizard } from "use-wizard";

import WizardSteps from "../../components/Wizard/WizardSteps";
import formReducer from "../../components/Wizard/formReducer";

type Props = {};

export default function index({}: Props) {
  // This is how you create the wizard
  const [step, wizard] = useWizard([
    "name purpose",
    "name preference",
    "customer",
    "payment",
  ]);

  // This is only used to store user inputs
  const [form, dispatchForm] = useReducer(formReducer, {});

  /*   useEffect(() => {
      console.log(form);
    }, [form]); */

  return (
    <>
      <WizardSteps {...{ step, wizard, form, dispatchForm }} />
    </>
  );
}
