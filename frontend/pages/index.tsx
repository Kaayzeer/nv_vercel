import React from "react";

import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Section from "../components/ui-components/Section/Section";

const HomePage = () => {
  return (
    <>
      <Banner imgUrl="" width={300} height={300} />
      <Section
        bgColor="bg-section-blue"
        h1="SERVICES"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <div className="aspect-[1090/100] bg-center  bg-cover bg-no-repeat bg-[url('/icons/bgbluecloud.svg')]"></div>
      <Card />
    </>
  );
};

export default HomePage;
