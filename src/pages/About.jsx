import React from 'react';
import AboutBrand from '../components/AboutBrand';
import Footer from '../components/Footer';

const About = ({ currentTheme }) => {
  return (
    <div className="pt-20">
      <AboutBrand theme={currentTheme} />
      <div className={`${currentTheme.sectionBg} py-20 px-10 text-center border-t border-white/5`}>
        <h2 className={`text-4xl font-black uppercase ${currentTheme.primaryText}`}>Our Legacy</h2>
        <p className={`mt-4 ${currentTheme.secondaryText} max-w-2xl mx-auto`}>
          Founded on the principle of innovation, we continue to push the boundaries of what's possible in athletic footwear.
        </p>
      </div>
      <Footer theme={currentTheme} />
    </div>
  );
};

export default About;
