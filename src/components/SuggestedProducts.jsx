import React from 'react';
import { Link } from 'react-router-dom';

const SuggestedProducts = ({ currentTheme }) => {
  const shoes = [
    { name: "Air More Uptempo", img: "/images/tempo.png", price: "$229", color: "Black" },
    { name: "Air Jordan 18", img: "/images/jordan.png", price: "$199", color: "Green" },
    { name: "Air DT Max '96", img: "/images/dtmax.png", price: "$219", color: "Red" },
  ];

  return (
    <div className={`py-20 ${currentTheme.sectionBg} border-t border-white/5 transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className={`text-3xl md:text-5xl font-black uppercase mb-12 tracking-tighter ${currentTheme.primaryText}`}>
          You Might Also Like
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shoes.map((shoe, index) => (
            <div key={index} className={`${currentTheme.cardBg} p-8 rounded-[40px] group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/5`}>
              <div className="relative z-10">
                <h3 className={`text-xl font-bold uppercase mb-1 ${currentTheme.primaryText}`}>{shoe.name}</h3>
                <p className={`${currentTheme.secondaryText} text-sm font-semibold mb-6 uppercase tracking-widest opacity-60`}>{shoe.color}</p>
                
                <div className="h-48 flex items-center justify-center py-4">
                  <img 
                    src={shoe.img} 
                    alt={shoe.name} 
                    className="h-full object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                  />
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <span className={`text-2xl font-black ${currentTheme.primaryText}`}>{shoe.price}</span>
                  <Link to="/collections" className={`px-6 py-2 rounded-full ${currentTheme.buttonBg} ${currentTheme.buttonText} text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all active:scale-95`}>
                    View
                  </Link>
                </div>
              </div>
              
              {/* Decorative Background Blur */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedProducts;
