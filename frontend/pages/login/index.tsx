import React from "react";
//components
import Banner from "../../components/Banner/Banner";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="relative">
      <Banner
        page={"login"}
        title="sign in"
        subTitle="Follow the progress of your orders every step of the way."
      />
    </div>
  );
}
