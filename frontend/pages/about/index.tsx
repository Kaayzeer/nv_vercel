import * as React from "react";
import AboutQuestions from "../../components/AboutQuestions/AboutQuestions";
import Banner from "../../components/Banner/Banner";
import Description from "../../components/Description/Description";
import Section from "../../components/ui-components/Section/Section";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div>
      <Banner
        page="about"
        title="THE DOMAIN AFTERMARKET AGENCY WITH TRANSPARENT, COST-EFFECTIVE PROCESS."
      />
      <Description
        page="about"
        bgColor="bg-section-blue-about"
        textColor="text-white"
      />
      <AboutQuestions />
      <Section
        bgColor={"bg-section-blue"}
        h1={"want to know more?"}
        p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        page={"about"}
      />
    </div>
  );
}
