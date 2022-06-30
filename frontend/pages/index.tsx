import React from "react";

//components
import Banner from "../components/Banner/Banner";
import InfoCard from "../components/Card/InfoCard";
import HomeDescription from "../components/Description/HomeDescription";
import Layout from "../components/Layout/Layout";
import Testimonials from "../components/Testimonials/Testimonials";
import Section from "../components/ui-components/Section/Section";

const HomePage = () => {
  return (
    <Layout title={""} description={""} keywords={""}>
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
      <div className="aspect-[1090/100] bg-center  bg-cover bg-no-repeat bg-[url('/static/bgbluecloud.svg')]"></div>
      <InfoCard />
      <HomeDescription />
      <div className="aspect-[1090/100] bg-center  bg-cover bg-no-repeat bg-[url('/static/bgyellowcloud.svg')] -mb-1"></div>
      <Section
        bgColor="bg-section-yellow"
        h1="get to know us"
        p="We are experienced domain name agents and help clients all over the world to navigate and utilize the domain aftermarket."
        page="home"
      />
      <Testimonials bgColor="bg-white" />
    </Layout>
  );
};

export default HomePage;
