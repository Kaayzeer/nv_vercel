import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";

import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

//components
import FindFormStep1 from "../Form/FindForm/FindFormStep1";
import FindFormStep2 from "../Form/FindForm/FindFormStep2";
import FindFormStep3 from "../Form/FindForm/FindFormStep3";
import BuyFormStep1 from "../Form/BuyForm/BuyFormStep1";
import BuyFormStep2 from "../Form/BuyForm/BuyFormStep2";
import StripeCheckout from "../stripeCheckout/stripeCheckout";

//route
import { useRouter } from "next/router";
import SellFormStep1 from "../Form/SellForm/SellFormStep1";
import SellFormStep2 from "../Form/SellForm/SellFormStep2";

export default (props: {
  step: TStep;
  wizard: IWizard;
  form: any;
  dispatchForm: Function;
}) => {
  const router = useRouter();
  const route = router.route.substring(1);

  const contactOrCustomerDetails =
    route === "findform" ? (
      <FindFormStep3 {...props} />
    ) : route === "buyform" ? (
      <BuyFormStep2 {...props} />
    ) : route === "sellform" ? (
      <SellFormStep2 {...props} />
    ) : null;

  switch (props.step) {
    case "name purpose":
      return <FindFormStep1 {...props} />;

    case "name preference":
      return <FindFormStep2 {...props} />;

    case "customer":
      return contactOrCustomerDetails;

    case "payment":
      return <StripeCheckout fetchedId={""} />;

    case "buy":
      return <BuyFormStep1 {...props} />;

    case "sell project":
      return <SellFormStep1 {...props} />;

    case "contact details":
      return contactOrCustomerDetails;

    default:
      return <>Step does not exist</>;
  }
};
