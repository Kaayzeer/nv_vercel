import React, { useState } from "react";
import Form from "../../components/Form/Form";

export interface IBuyProps {}

export default function Buy(props: IBuyProps) {
  const [isFind, setIsFind] = useState(false);

  return (
    <>
      <Form
        isFind={isFind}
        isLogin
        type="sell"
        onFetched={function (id: number): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
}
