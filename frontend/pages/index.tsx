import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";

import Description from "../components/Description/Description";
import Testimonials from "../components/Testimonials/Testimonials";
import Section from "../components/ui-components/Section/Section";

const HomePage = () => {
  return (
    <>
      <Banner page="home" />
      <Section
        bgColor="bg-section-blue"
        h1="services"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        page="home"
      />
      <div className="aspect-[1090/100] bg-center  bg-cover bg-no-repeat bg-[url('/icons/bgbluecloud.svg')]"></div>
      <Card />
      <Description />
      <div className="aspect-[1090/100] bg-center  bg-cover bg-no-repeat bg-[url('/icons/bgyellowcloud.svg')]"></div>
      <Section
        bgColor="bg-section-yellow"
        h1="get to know us"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        page="home"
      />
      <Testimonials bgColor="bg-white" />
    </>
  );
};

export default HomePage;
