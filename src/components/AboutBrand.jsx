import React from 'react';

const AboutBrand = ({ theme }) => {
  return (
    <div className={`w-screen min-h-[50vh] ${theme?.sectionBg || 'bg-[#121212]'} relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-700`}>

    </div>
  );
};

export default AboutBrand;
