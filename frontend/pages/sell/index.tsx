import React, { useState, useReducer, useEffect } from "react";
import { useWizard } from "use-wizard";

import WizardSteps from "../../components/Wizard/WizardSteps";
import formReducer from "../../components/Wizard/formReducer";
import FindFormStep1 from "../../components/Form/FindFormStep1";
import FindFormStep2 from "../../components/Form/FindFormStep2";
import FindFormStep3 from "../../components/Form/FindFormStep3";

export interface ISellProps {}

export default function Sell(props: ISellProps) {
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
