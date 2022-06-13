import React, { useState, useRef, useEffect } from "react";
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import { useRouter } from "next/router";

export default (props: {
  step: TStep;
  wizard: IWizard;
  dispatchForm: Function;
  form: any;
}) => {
  const [selected, setSelected] = useState<null | boolean>(null);
  const router = useRouter();

  console.log(router.route.substring(1));
  const formRoute = router.route.toString().substring(1);

  /*   const formParts: { [key: string]: any } = {
    findform: {
      name: ["name purpose", "name preference", "customer", "payment"],
    },
    buyform: { name: ["buy", "customer", "payment"] },
  };
 */
  const findformParts = [
    { name: "name purpose", complete: true },
    { name: "name preference", complete: true },
    { name: "customer", complete: false },
    { name: "payment", complete: false },
  ];

  const buyformParts = [
    { name: "buy", complete: true },
    { name: "customer", complete: false },
    { name: "payment", complete: false },
  ];

  const sellformParts = [
    { name: "sell project", complete: true },
    { name: "contact details", complete: false },
    { name: "payment", complete: false },
  ];

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = (e?: any) => {
    console.log(props.wizard.stepIndex());
    console.log(e);
    console.log(props.step);

    props.wizard.goToStep(e);
  };

  return (
    <nav className="wizard-layout__navbar">
      {formRoute === "findform" &&
        findformParts.map((part: any, idx: number) => (
          <button
            /* disabled={props.wizard.stepIndex() <= idx && !part.complete && true} */
            key={idx}
            className={`${
              part.name == props.step
                ? " wizard-layout-button-selected"
                : " wizard-layout-button "
            }`}
            onClick={() => handleClick(part.name)}
          >
            {part.name}
          </button>
        ))}

      {formRoute === "buyform" &&
        buyformParts.map((part, idx) => (
          <button
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

      {formRoute === "sellform" &&
        sellformParts.map((part, idx) => (
          <button
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

/* const [complete, setComplete] = useState<boolean>(false); */

/*   const showPreviousStep = props.wizard.nPreviousSteps >= 0 && props.step !== 5;
  const showForwardStep = props.wizard.nForwardSteps >= 0; */

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
