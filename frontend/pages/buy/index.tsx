import React, { useState } from "react";
import Form from "../../components/Form/Form";

export interface IBuyProps {}

export default function Buy(props: IBuyProps) {
  const [isFind, setIsFind] = useState(false);

  return (
    <div>
      <Form isFind={isFind} isLogin type="buy" />
    </div>
  );
}
