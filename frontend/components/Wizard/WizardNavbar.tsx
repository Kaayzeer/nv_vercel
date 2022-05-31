import React, { useState, useRef, useEffect } from "react";
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
  dispatchForm: Function;
  form: any;
}) => {
  const [selected, setSelected] = useState<null | boolean>(null);
  /* const [complete, setComplete] = useState<boolean>(false); */

  const showPreviousStep = props.wizard.nPreviousSteps >= 0 && props.step !== 5;
  const showForwardStep = props.wizard.nForwardSteps >= 0;

  const formParts = [
    { name: "name purpose", complete: true },
    { name: "name preference", complete: true },
    { name: "customer", complete: false },
    { name: "payment", complete: false },
  ];

  useEffect(() => {
    handleClick();
  }, []);

  /*   useEffect(() => {
    if (props.form) {
      console.log(props.form);
    }
  }, [props.form]); */

  const handleClick = (e?: any) => {
    console.log(props.wizard.stepIndex());
    console.log(e);
    console.log(props.step);

    // formParts[e].complete = true;
    props.wizard.goToStep(e);

    // if (e === "name preference") {
    //   props.wizard.goToStep(e);
    // }

    // if (e === "customer") {
    //   props.wizard.goToStep(e);
    // }
  };

  return (
    <nav className="wizard-layout__navbar">
      {formParts.map((part, idx) => (
        <button
          /* disabled={props.wizard.stepIndex() <= idx && !part.complete && true} */
          key={idx}
          className={`${
            part.name == props.step
              ? " wizard-layout-button-selected "
              : " wizard-layout-button "
          }`}
          onClick={() => handleClick(part.name)}
        >
          {part.name}
        </button>
      ))}
    </nav>
  );
};

{
  /* Previous step */
}

/*
 <button
        className={`${"wizard-layout-button"} `}
        onClick={() => props.wizard.previousStep()}
      >
        name purpose
      </button>

      {!showPreviousStep && <div></div>}

      <button
        className={`wizard-layout-button`}
        onClick={() => props.wizard.nextStep()}
      >
        name preference
      </button>

      {!showForwardStep && <div></div>}

      <button
        className={`wizard-layout-button`}
        onClick={() => props.wizard.nextStep()}
      >
        customer
      </button>

      {!showForwardStep && <div></div>}

      <button
        className={`wizard-layout-button`}
        onClick={() => props.wizard.previousStep()}
      >
        payment
      </button>

      {!showForwardStep && <div></div>}
 */

/*   */

/*   if (e === "payment") {
      return;
    }

    if (e === "customer"){
      previousStep
    };
    if (e !== "payment" && e !== "name purpose") {
      forwardStep;
    } */
