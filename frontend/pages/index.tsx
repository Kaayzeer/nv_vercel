import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import PortraitCard from "../components/Card/PortraitCard";
import Description from "../components/Description/Description";
import Testimonials from "../components/Testimonials/Testimonials";
import Section from "../components/ui-components/Section/Section";

const HomePage = () => {
  return (
    <>
      <Banner imgUrl="" width={300} height={300} />
      <Section
        bgColor="bg-section-blue"
        h1="services"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        flex="flex-center"
        textAlign="text-center"
      />
      <div className="aspect-[1090/100] bg-center  bg-cover bg-no-repeat bg-[url('/icons/bgbluecloud.svg')]"></div>
      <Card />
      <Description />
      <div className="aspect-[1090/100] bg-center  bg-cover bg-no-repeat bg-[url('/icons/bgyellowcloud.svg')]"></div>
      <Section
        bgColor="bg-section-yellow"
        h1="get to know us"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        flex="flex-start"
        textAlign="text-left"
      />
      <Testimonials bgColor="bg-white" />
    </>
  );
};

export default HomePage;
