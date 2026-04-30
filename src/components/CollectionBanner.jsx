import React from 'react';

const CollectionBanner = ({ theme }) => {
  return (
    <div className={`w-screen min-h-screen ${theme?.sectionBg || 'bg-[#121212]'} relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-700`}>
      
      {/* Huge Text - Top on mobile, Right on desktop */}
      <div className="absolute top-10 md:top-20 left-6 md:left-auto md:right-20 text-left md:text-right z-10 w-[80%] md:w-auto">
        <h1 className={`text-4xl sm:text-7xl md:text-[100px] font-black uppercase ${theme?.primaryText || 'text-white'} leading-[0.85] tracking-tight transition-colors duration-700`}>
          Quality<br />
          that speaks.
        </h1>
      </div>

      {/* Feature Callouts (Floating text around where the shoe will land) */}
      <div className="relative w-full max-w-[1200px] h-[500px] md:h-[600px] mt-24 md:mt-20 pointer-events-none">
        
        {/* Top Left (Moved higher) */}
        <div className="absolute top-[28%] left-4 md:top-[20%] md:left-[28%] flex items-center gap-2 md:gap-3">
          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${theme?.buttonBg || 'bg-white'} transition-colors duration-700`}></div>
          <span className={`${theme?.secondaryText || 'text-gray-400'} font-semibold text-[10px] md:text-sm uppercase tracking-wide transition-colors duration-700`}>
            {theme?.name === 'black' ? 'Slip-resistant soles' : theme?.name === 'green' ? 'Carbon fiber plate' : 'Turf traction spikes'}
          </span>
        </div>

        {/* Top Right (Moved higher) */}
        <div className="absolute top-[32%] right-4 md:top-[30%] md:left-[40%] flex items-center gap-2 md:gap-3 flex-row-reverse md:flex-row z-50">
          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${theme?.buttonBg || 'bg-white'} transition-colors duration-700`}></div>
          <span className={`${theme?.secondaryText || 'text-gray-400'} font-semibold text-[10px] md:text-sm uppercase tracking-wide transition-colors duration-700 text-right md:text-left drop-shadow-md`}>
            {theme?.name === 'black' ? 'Lightweight design' : theme?.name === 'green' ? 'Hidden laces' : 'Aggressive stance'}
          </span>
        </div>

        {/* Mid Left (Moved higher) */}
        <div className="absolute top-[36%] left-4 md:top-[40%] md:left-[8%] flex items-center gap-2 md:gap-3">
          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${theme?.buttonBg || 'bg-white'} transition-colors duration-700`}></div>
          <span className={`${theme?.secondaryText || 'text-gray-400'} font-semibold text-[10px] md:text-sm uppercase tracking-wide transition-colors duration-700`}>
            {theme?.name === 'black' ? 'Eco-friendly dyes' : theme?.name === 'green' ? 'Suede upper' : 'Midfoot strap'}
          </span>
        </div>

        {/* Bottom Right (Moved much lower) */}
        <div className="absolute bottom-[30%] right-4 md:top-[45%] md:right-[40%] flex items-center gap-2 md:gap-3 flex-row-reverse md:flex-row z-50">
          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${theme?.buttonBg || 'bg-white'} transition-colors duration-700`}></div>
          <span className={`${theme?.secondaryText || 'text-gray-400'} font-semibold text-[10px] md:text-sm uppercase tracking-wide transition-colors duration-700 text-right md:text-left drop-shadow-md`}>
            {theme?.name === 'black' ? 'Sustainable Material' : theme?.name === 'green' ? 'Premium leather' : 'Synthetic overlays'}
          </span>
        </div>

        {/* Bottom Left (Moved lower) */}
        <div className="absolute bottom-[22%] left-4 md:bottom-[35%] md:right-[38%] flex items-center gap-2 md:gap-3">
          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${theme?.buttonBg || 'bg-white'} transition-colors duration-700`}></div>
          <span className={`${theme?.secondaryText || 'text-gray-400'} font-semibold text-[10px] md:text-sm uppercase tracking-wide transition-colors duration-700`}>
            {theme?.name === 'black' ? 'Shock absorption' : theme?.name === 'green' ? 'Zoom Air cushioning' : 'Max Air unit'}
          </span>
        </div>

        {/* Bottom Right Low (Moved lower) */}
        <div className="absolute bottom-[14%] right-4 md:bottom-[15%] md:right-[45%] flex items-center gap-2 md:gap-3 flex-row-reverse md:flex-row z-50">
          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${theme?.buttonBg || 'bg-white'} transition-colors duration-700`}></div>
          <span className={`${theme?.secondaryText || 'text-gray-400'} font-semibold text-[10px] md:text-sm uppercase tracking-wide transition-colors duration-700 text-right md:text-left drop-shadow-md`}>
            {theme?.name === 'black' ? 'Durable stitching' : theme?.name === 'green' ? 'Italian design' : 'Bold branding'}
          </span>
        </div>

        {/* Very Bottom Center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-[5%] md:right-[25%] md:left-auto md:translate-x-0 flex items-center gap-2 md:gap-3">
          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${theme?.buttonBg || 'bg-white'} transition-colors duration-700`}></div>
          <span className={`${theme?.secondaryText || 'text-gray-400'} font-semibold text-[10px] md:text-sm uppercase tracking-wide transition-colors duration-700 whitespace-nowrap`}>
            {theme?.name === 'black' ? 'Quick dry lining' : theme?.name === 'green' ? 'Ventilation flaps' : 'Lockdown fit'}
          </span>
        </div>

      </div>

    </div>
  );
};

export default CollectionBanner;
