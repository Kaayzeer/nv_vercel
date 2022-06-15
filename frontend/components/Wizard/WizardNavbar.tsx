import React, { useState, useRef, useEffect } from "react";
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import { useRouter } from "next/router";
import useResizeWindow from "../../hooks/useResize";

export default (props: {
  step: TStep;
  wizard: IWizard;
  dispatchForm: Function;
  form: any;
}) => {
  const [selected, setSelected] = useState<null | boolean>(null);
  //layout breakpoints
  const { width } = useResizeWindow();
  const view = width >= 769;

  //url:s
  const router = useRouter();
  const formRoute = router.route.toString().substring(1);

  //keys match urls:s
  const formSteps = {
    findform: ["name purpose", "name preference", "customer", "payment"],

    buyform: ["buy", "customer", "payment", "transaction"],

    sellform: ["sell project", "contact details", "payment"],
  };

  //render first wizard step on page load
  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = (e?: any) => {
    /*     console.log(props.wizard.stepIndex());
    console.log(e);
    console.log(props.step); */

    props.wizard.goToStep(e);
  };

  return (
    <nav className="wizard-layout__navbar">
      {formRoute &&
        //@ts-ignore
        formSteps[formRoute].map((name: string, idx: number) => (
          <button
            key={idx}
            className={`${
              name == props.step
                ? " wizard-layout-button-selected"
                : " wizard-layout-button "
            }`}
            onClick={() => handleClick(name)}
          >
            {view ? name : name == props.step && name}
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
