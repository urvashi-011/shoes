import React from 'react';

const FeaturedShoes = ({ theme }) => {
  const shoes = [
    { name: "Air More Uptempo", img: "/images/tempo.png", price: "$229" },
    { name: "Air Jordan 18", img: "/images/jordan.png", price: "$199" },
    { name: "Air DT Max '96", img: "/images/dtmax.png", price: "$219" },
  ];

  return (
    <div className={`w-screen min-h-screen ${theme?.sectionBg || 'bg-[#121212]'} relative flex items-center justify-between px-6 md:px-20 overflow-hidden transition-colors duration-700`}>
      
      {/* Left Text Content */}
      <div className="z-10 w-full md:w-[60%] md:max-w-xl flex flex-col">
        <h1 className={`text-5xl sm:text-7xl md:text-[120px] font-black uppercase ${theme?.primaryText || 'text-white'} leading-[0.85] tracking-tight transition-colors duration-700`}>
          {theme?.name === 'green' ? 'Air Jordan' : theme?.name === 'red' ? 'Air DT Max' : 'Airmax Nike'}
          <br />
          {theme?.name === 'green' ? '18' : theme?.name === 'red' ? "'96" : '270'}
        </h1>
        
        {/* Mobile Spacer for Shoe */}
        <div className="h-[220px] sm:h-[300px] md:hidden w-full"></div>
        
        <p className={`mt-4 md:mt-8 ${theme?.secondaryText || 'text-gray-400'} text-[10px] sm:text-xs md:text-sm leading-relaxed max-w-md font-medium transition-colors duration-700`}>
          {theme?.name === 'black' ? "The Air More Uptempo encapsulates the basketball style of the 90s at its best. Big, bold, and in your face. It's an icon of sneaker history, featuring maximum Air cushioning." : 
           theme?.name === 'green' ? "The Air Jordan 18 was famously worn by Michael Jordan during his final season in the NBA. Inspired by high-performance Italian sports cars and elegant dress shoes." : 
           "The Air DT Max '96 is a fierce trainer built for the gridiron. With its distinctive aggressive strap and bold design lines, it delivers unstoppable lockdown and support."}
        </p>
        
        <button className={`mt-8 px-10 py-3 border border-transparent ${theme?.buttonBg || 'bg-white'} ${theme?.buttonText || 'text-black'} font-semibold text-sm rounded-full ${theme?.buttonHover || 'hover:bg-gray-300'} transition-all duration-300 uppercase tracking-widest`}>
          New Arrivals
        </button>

        {/* Small Slider Dots Indicator */}
        <div className="flex flex-col gap-2 mt-16">
          <div className={`w-12 h-1 ${theme?.buttonBg || 'bg-white'} rounded-full transition-colors duration-700`}></div>
          <div className={`w-12 h-1 ${theme?.buttonBg || 'bg-white'} opacity-20 rounded-full transition-colors duration-700`}></div>
          <div className={`w-12 h-1 ${theme?.buttonBg || 'bg-white'} opacity-20 rounded-full transition-colors duration-700`}></div>
        </div>
      </div>

    </div>
  );
};

export default FeaturedShoes;
