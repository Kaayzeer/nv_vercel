import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";

import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import FindFormStep1 from "../Form/FindFormStep1";
import FindFormStep2 from "../Form/FindFormStep2";
import FindFormStep3 from "../Form/FindFormStep3";
import StripeCheckout from "../stripeCheckout/stripeCheckout";

export default (props: {
  step: TStep;
  wizard: IWizard;
  form: any;
  dispatchForm: Function;
}) => {
  switch (props.step) {
    case "name purpose":
      return <FindFormStep1 {...props} />;

    case "name preference":
      return <FindFormStep2 {...props} />;

    case "customer":
      return <FindFormStep3 {...props} />;

    case "payment":
      return <StripeCheckout />;

    default:
      return <>Step does not exist</>;
  }
};
