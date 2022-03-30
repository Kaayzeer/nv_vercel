import React, { useState } from "react";
import Form from "../../components/Form/Form";

export interface ISellProps {}

export default function Sell(props: ISellProps) {
  const [isFind, setIsFind] = useState(false);

  return (
    <div>
      <Form isFind={isFind} />
    </div>
  );
}
