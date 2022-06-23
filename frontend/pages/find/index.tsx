import React from "react";

//components
import Banner from "../../components/Banner/Banner";
import Description from "../../components/Description/Description";
import Layout from "../../components/Layout/Layout";
import BSFsection from "../../components/ui-components/Section/BSFsection";
import Section from "../../components/ui-components/Section/Section";

export interface IFindProps {}

export default function Find(props: IFindProps) {
  return (
    <Layout title={""} description={""} keywords={""}>
      <Banner
        page={"find"}
        title={"pick and choose"}
        subTitle={
          "Start your journey with an expertly curated selection of suitable brand name domains."
        }
      />
      <BSFsection
        h1={"name it"}
        p={
          "Settling for a name is tricky. We help you find and select options and to map out a plan, so that you can concentrate on business. Negotiation, acquisition or transaction not included, but an optional next step."
        }
        page={"find"}
      />
      <Description
        page={"find"}
        bgColor={"bg-pages-background"}
        textColor="text-black"
      />

      <Section
        bgColor={"bg-white"}
        h1={"want to know more"}
        p={"Jump on a call or send us a message and we will be on the case."}
        page={"find"}
      />
    </Layout>
  );
}
