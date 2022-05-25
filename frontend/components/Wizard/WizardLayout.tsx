import WizardNavbar from "./WizardNavbar";
import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: { step: TStep; wizard: IWizard; children: any }) => {
  return (
    <>
      <WizardNavbar {...props} />

      <section className="wizard-layout">{props.children}</section>
    </>
  );
};
