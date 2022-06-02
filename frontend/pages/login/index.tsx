import React from "react";
//components
import Banner from "../../components/Banner/Banner";
import LoginForm from "../../components/Form/LoginForm";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="relative">
      <Banner
        page={"login"}
        title="sign in"
        subTitle="Follow the progress of your orders every step of the way."
      />
      {/*       <div className="absolute top-50 right-0 translate-y-1/2 translate-x-1/2">
        <LoginForm
          emailLabel={"email"}
          passwordLabel={"password"}
          email={""}
          password={""}
        />
      </div> */}
    </div>
  );
}
