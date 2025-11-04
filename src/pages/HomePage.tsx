import React from "react";
import Hero from "../components/sections/Hero";
import Discord from "../components/sections/Discord";
import News from "../components/sections/News";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Discord />
      <News />
    </>
  );
};

export default HomePage;
