import React, { useState } from "react";
import Form from "../../components/Form/Form";

export interface IFindProps {}

export default function Find(props: IFindProps) {
  const [isFind, setIsFind] = useState(true);

  return (
    <div>
      <Form isFind={isFind} />
    </div>
  );
}
