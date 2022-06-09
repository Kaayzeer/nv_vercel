import React from "react";

//components
import Banner from "../../components/Banner/Banner";
import Description from "../../components/Description/Description";
import BSFsection from "../../components/ui-components/Section/BSFsection";
import Section from "../../components/ui-components/Section/Section";

export interface IBuyProps {}

export default function Buy(props: IBuyProps) {
  return (
    <>
      <Banner
        page={"buy"}
        title={"go get it"}
        subTitle={
          "When the perfect domain is taken - rise to the challenge and reap the rewards."
        }
      />
      <BSFsection
        h1={"Buy pilot"}
        p={
          "Can I sell it? We help you determine if and how your domain name can be sold. Negotiation or transaction not included, but an optional next step."
        }
        page={"buy"}
      />
      <Description
        page={"buy"}
        bgColor={"bg-pages-background"}
        textColor="text-black"
      />

      <Section
        bgColor={"bg-white"}
        h1={"want to know more"}
        p={"Jump on a call or send us a message and we will be on the case."}
        page={"buy"}
      />
    </>
  );
}
