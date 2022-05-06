import * as React from "react";
import Banner from "../../components/Banner/Banner";
import AboutDescription from "../../components/Description/AboutDescription";
import Section from "../../components/ui-components/Section/Section";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div>
      <Banner page="about" />
      <AboutDescription />
      <Section
        bgColor={"bg-section-blue"}
        h1={"want to know more?"}
        p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        page={"about"}
      />
    </div>
  );
}
