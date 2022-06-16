import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Form from "../Forms/Form";

type Props = {
  fetchedId: string;
};

const StripeCheckout = ({ fetchedId }: Props) => {
  const router = useRouter();
  const { success, canceled } = router.query;
  /* const [fetchedId, setFetchedId] = useState<string>(""); */

  useEffect(() => {
    // Check if ID is set
    // Check to see if this is a redirect back from Checkout
    if (success !== undefined || canceled !== undefined) {
      //const query = new URLSearchParams(window.location.search);
      if (success) {
        console.log("Order placed! You will receive an email confirmation.");
      }

      if (canceled) {
        console.log(
          "Order canceled -- continue to shop around and checkout when you’re ready."
        );
      }
    }
  }, [success, canceled]);

  /*  const onFetched = (id: string) => {
    console.log(id);
    setFetchedId(id);
  };
 */
  return (
    <>
      {/*  {!fetchedId ? (
        <FindFormStep3 
          type={"sell"}
          onFetched={onFetched}
        />
      ) : ( */}
      <>
        <form
          action={`http://localhost:5001/next-venture/europe-west1/api/payment/create-checkout-session?id=${fetchedId}`}
          method="POST"
        >
          <section>
            {fetchedId && (
              <button type="submit" role="link" className="formBtn text-white">
                Checkout
              </button>
            )}
            {!fetchedId && (
              <button
                disabled
                type="submit"
                role="link"
                className="formBtn text-white"
              >
                Checkout
              </button>
            )}
          </section>
        </form>
      </>
      {/*  )}  */}
    </>
  );
};

export default StripeCheckout;
