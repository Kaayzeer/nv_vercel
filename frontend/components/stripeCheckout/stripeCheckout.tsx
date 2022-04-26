import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Form from "../../components/Form/Form";

const stripeCheckout = () => {
  const router = useRouter();
  const { success, canceled } = router.query;
  const [fetchedId, setFetchedId] = useState<number>(-1);

  useEffect(() => {
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

  const onFetched = (id: number) => {
    console.log(id);
    setFetchedId(id);
  };

  return (
    <>
      {fetchedId == -1 ? (
        <Form
          isFind={true}
          isLogin={false}
          type={"offer"}
          onFetched={onFetched}
        />
      ) : (
        <>
          <form
            action={`http://localhost:5001/next-venture/europe-west1/api/payment/create-checkout-session?id=${fetchedId}`}
            method="POST"
          >
            <section>
              <div>
                {/*  <Image
                  src="https://stripe-camo.global.ssl.fastly.net/21f119e8587d8f9e6d68dee9530918d717a701493c26c3f6ab205c08edc9d994/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387853334a4852317043646b68564e565674626e563066475a735833526c6333526663585a795244647354314d7953457832646e68706433647554555a31556b67773030615972394a324479"
                  layout="fill"
                /> */}
              </div>
              <button type="submit" role="link">
                Checkout
              </button>
            </section>
            <style jsx>
              {`
                section {
                  background: #ffffff;
                  display: flex;
                  flex-direction: column;
                  width: 400px;
                  height: 112px;
                  border-radius: 6px;
                  justify-content: space-between;
                }
                button {
                  height: 36px;
                  background: #556cd6;
                  border-radius: 4px;
                  color: white;
                  border: 0;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
                }
                button:hover {
                  opacity: 0.8;
                }
              `}
            </style>
          </form>
        </>
      )}
    </>
  );
};

export default stripeCheckout;
