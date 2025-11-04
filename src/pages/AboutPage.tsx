import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import AboutMission from '../components/sections/AboutMission';
import AboutValues from '../components/sections/AboutValues';
import AboutTimeline from '../components/sections/AboutTimeline';

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTimeline />
    </>
  );
};

export default AboutPage;
