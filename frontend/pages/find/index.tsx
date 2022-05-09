import React, { useState } from "react";
import Form from "../../components/Form/Form";
import StripeCheckout from "../../components/stripeCheckout/stripeCheckout";
import { useAuthContext } from "../../hooks/useAuthContext";

export interface IFindProps {}

export default function Find(props: IFindProps) {
  const { user, authIsReady } = useAuthContext();
  console.log(user);
  return (
    <div>
      <StripeCheckout/>
    </div>
  );
}
