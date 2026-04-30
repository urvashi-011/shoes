import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedShoes from '../components/FeaturedShoes';
import CollectionBanner from '../components/CollectionBanner';
import AboutBrand from '../components/AboutBrand';
import Footer from '../components/Footer';

const Home = ({ loading, themeIndex, setThemeIndex, isScrolled, currentTheme }) => {
  return (
    <>
      <div id="home">
        <HeroSection isLoaded={!loading} themeIndex={themeIndex} onThemeChange={setThemeIndex} isScrolled={isScrolled} />
      </div>
      <FeaturedShoes theme={currentTheme} />
      <div id="collections">
        <CollectionBanner theme={currentTheme} />
      </div>
      <div id="about">
        <AboutBrand theme={currentTheme} />
      </div>
      <Footer theme={currentTheme} />
    </>
  );
};

export default Home;
