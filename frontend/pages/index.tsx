import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";

import Description from "../components/Description/Description";
import Testimonials from "../components/Testimonials/Testimonials";
import Section from "../components/ui-components/Section/Section";

const HomePage = () => {
  return (
    <>
      <Banner
        page="home"
        title="get that domain"
        subTitle={
          "Hire an experienced acquisition agent and find out if the domain name you need can be yours."
        }
      />
      <Section
        bgColor="bg-section-blue"
        h1="services"
        p="Buy taken domains. Find a brand name. Sell domain assets."
        page="home"
      />
      <div className="aspect-[1090/100] bg-center  bg-cover bg-no-repeat bg-[url('/icons/bgbluecloud.svg')]"></div>
      <Card />
      <Description />
      <div className="aspect-[1090/100] bg-center  bg-cover bg-no-repeat bg-[url('/icons/bgyellowcloud.svg')] -mb-1"></div>
      <Section
        bgColor="bg-section-yellow"
        h1="get to know us"
        p="We are experienced domain name agents and help clients all over the world to navigate and utilize the domain aftermarket."
        page="home"
      />
      <Testimonials bgColor="bg-white" />
    </>
  );
};

export default HomePage;
