/* import { useRouter } from "next/router"; */
import React from "react";

/* //components
import Banner from "../../components/Banner/Banner";
import BSFsection from "../../components/ui-components/Section/BSFsection";
import Description from "../../components/Description/Description";
import Section from "../../components/ui-components/Section/Section";

//Dynamic styles
import { QueryPages } from "../../functions/queryPages"; */

type Props = {};

export default function Page({}: Props) {
  /*   const router = useRouter(); */

  return (
    <div className="relative">
      {/*      <Banner
        page={
          QueryPages(router).queryPage as
            | ""
            | "home"
            | "about"
            | "login"
            | "find"
            | "buy"
            | "sell"
        }
        title={QueryPages(router).title as string}
        subTitle={QueryPages(router).subTitle as string}
      />
      <BSFsection
        h1={QueryPages(router).sectionTitle as string}
        p={QueryPages(router).sectionSubTitle as string}
        page={QueryPages(router).queryPage as "find" | "buy" | "sell"}
      />
      <Description
        page={QueryPages(router).queryPage as "about" | "find" | "buy" | "sell"}
        bgColor={"bg-pages-background"}
        textColor="text-black"
      />

      <Section
        bgColor={"bg-white"}
        h1={"want to know more"}
        p={"Jump on a call or send us a message and we will be on the case."}
        page={
          QueryPages(router).queryPage as
            | "home"
            | "about"
            | "find"
            | "buy"
            | "sell"
        }
      /> */}
    </div>
  );
}
