import * as React from "react";
import AboutQuestions from "../../components/AboutQuestions/AboutQuestions";
import Banner from "../../components/Banner/Banner";
import Description from "../../components/Description/Description";
import Layout from "../../components/Layout/Layout";
import Section from "../../components/ui-components/Section/Section";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <Layout title={""} description={""} keywords={""}>
      <Banner
        page="about"
        title="WE GET NAMES."
      />
      <Description
        page="about"
        bgColor="bg-royal-blue"
        textColor="text-white"
      />
      <AboutQuestions />
      <Section
        bgColor={"bg-section-blue"}
        h1={"want to know more?"}
        p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        page={"about"}
      />
    </Layout>
  );
}
