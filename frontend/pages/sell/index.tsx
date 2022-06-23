import React from "react";

//components
import Banner from "../../components/Banner/Banner";
import BSFsection from "../../components/ui-components/Section/BSFsection";
import Description from "../../components/Description/Description";
import Section from "../../components/ui-components/Section/Section";
import Layout from "../../components/Layout/Layout";

export interface ISellProps {}

export default function Sell(props: ISellProps) {
  return (
    <Layout title={""} description={""} keywords={""}>
      <Banner
        page={"sell"}
        title={"monetize it"}
        subTitle={
          "Don’t sleep on valuable domain assets. Let us help you sell them and turn them into useful capital."
        }
      />
      <BSFsection
        h1={"sell your domain"}
        p={
          "The aftermarket is a strange place. We help you track down owners and find out if they are interested in selling. Negotiation, acquisition or transaction not included, but an optional next step."
        }
        page={"sell"}
      />
      <Description
        page={"sell"}
        bgColor={"bg-pages-background"}
        textColor="text-black"
      />

      <Section
        bgColor={"bg-white"}
        h1={"want to know more"}
        p={"Jump on a call or send us a message and we will be on the case."}
        page={"sell"}
      />
    </Layout>
  );
}
