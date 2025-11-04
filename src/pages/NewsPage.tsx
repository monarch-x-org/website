import React from 'react';
import FeaturedNews from '../components/sections/FeaturedNews';
import RecentNews from '../components/sections/RecentNews';

const NewsPage: React.FC = () => {
  return (
    <>
      <FeaturedNews />
      <RecentNews />
    </>
  );
};

export default NewsPage;
