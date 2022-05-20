import { useState, useRef, useEffect } from "react";
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: { step: TStep; wizard: IWizard }) => {
  const [selected, setSelected] = useState<null | boolean>(null);

  const showPreviousStep = props.wizard.nPreviousSteps >= 0 && props.step !== 5;
  const showForwardStep = props.wizard.nForwardSteps >= 0;

  const formParts = ["name purpose", "name preference", "customer", "payment"];

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = (e?: any) => {
    /*  console.log(e); */
    console.log(props.step);

    /*  if (props.wizard.history[0] === e) {
      setSelected(true);
    } */

    if (e === "name purpose") {
      props.wizard.goToStep(e);
    }

    if (e === "name preference") {
      props.wizard.goToStep(e);
    }

    if (e === "customer") {
      props.wizard.goToStep(e);
    }
  };

  return (
    <nav className="wizard-layout__navbar">
      {formParts.map((part, idx) =>
        part === "payment" && showPreviousStep ? (
          <button
            key={idx}
            className={`${
              selected
                ? "wizard-layout-button-selected"
                : "wizard-layout-button"
            } `}
            onClick={() => handleClick(part)}
          >
            {part}
          </button>
        ) : (
          part !== "payment" &&
          showForwardStep && (
            <button
              key={idx}
              className={`${
                selected
                  ? "wizard-layout-button-selected"
                  : "wizard-layout-button"
              } `}
              onClick={() => handleClick(part)}
            >
              {part}
            </button>
          )
        )
      )}
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
