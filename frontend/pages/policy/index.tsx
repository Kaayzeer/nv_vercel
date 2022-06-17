import React from "react";
import PolicyCom from "../../components/Policy/Policy";

type Props = {};

export default function Policy({}: Props) {
  return (
    <div className="w-full">
      <div className="customContainer">
        <PolicyCom />
      </div>
    </div>
  );
}
