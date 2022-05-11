import React, { useState } from "react";
import FindFormStep1 from "../../components/Form/FindFormStep1";
import FindFormStep2 from "../../components/Form/FindFormStep2";
import FindFormStep3 from "../../components/Form/FindFormStep3";

export interface ISellProps {}

export default function Sell(props: ISellProps) {
  const [isFind, setIsFind] = useState(false);

  return (
    <>
      <FindFormStep1 />
      <FindFormStep2 />
      <FindFormStep3 />
    </>
  );
}
