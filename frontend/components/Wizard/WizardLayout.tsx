import WizardNavbar from "./WizardNavbar";
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

function WizardLayout(props: {
  step: TStep;
  wizard: IWizard;
  children: any;
  dispatchForm: Function;
  form: any;
}) {
  return (
    <>
      <WizardNavbar {...props} />

      <section className="wizard-layout">{props.children}</section>
    </>
  );
}

export default WizardLayout;
