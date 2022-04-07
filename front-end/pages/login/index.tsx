import React from "react";
import Form from "../../components/Form/Form";
import { useAuthContext } from "../../hooks/useAuthContext";

type Props = {};

export default function index({}: Props) {
  return (
    <div>
      <Form isFind={false} isLogin={true} type="offer" />
    </div>
  );
}
