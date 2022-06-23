import React from "react";
import Layout from "../../components/Layout/Layout";
import PolicyCom from "../../components/Policy/Policy";

type Props = {};

export default function Policy({}: Props) {
  return (
    <Layout title={""} description={""} keywords={""}>
      <div className="w-full">
        <div className="customContainer">
          <PolicyCom />
        </div>
      </div>
    </Layout>
  );
}
