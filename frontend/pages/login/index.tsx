import React from "react";
//components
import Banner from "../../components/Banner/Banner";
import Layout from "../../components/Layout/Layout";

type Props = {};

export default function Login({}: Props) {
  return (
    <Layout title={""} description={""} keywords={""}>
      <Banner
        page={"login"}
        title="sign in"
        subTitle="Follow the progress of your orders every step of the way."
      />
    </Layout>
  );
}
