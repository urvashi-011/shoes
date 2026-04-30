import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Collections = ({ currentTheme }) => {
  const navigate = useNavigate();
  const products = [
    { name: "Limited Edition 'Elite'", img: "/images/WhatsApp_Image_2026-04-30_at_5.52.52_PM-removebg-preview.png", price: "$299" },
    { name: "Limited Edition 'Pro'", img: "/images/WhatsApp_Image_2026-04-30_at_5.54.15_PM-removebg-preview.png", price: "$285" },
    { name: "Air More Uptempo 'Black'", img: "/images/tempo.png", price: "$229" },
    { name: "Air Jordan 18 'Retro'", img: "/images/jordan.png", price: "$199" },
    { name: "Air DT Max '96 'Red'", img: "/images/dtmax.png", price: "$219" },
    { name: "Exclusive Artist Series #01", img: "/images/WhatsApp_Image_2026-04-30_at_6.11.29_PM-removebg-preview.png", price: "$250" },
    { name: "Exclusive Artist Series #02", img: "/images/WhatsApp_Image_2026-04-30_at_6.11.29_PM__1_-removebg-preview.png", price: "$275" },
  ];

  const handleProductClick = (product) => {
    navigate('/checkout', { state: { product } });
  };

  return (
    <div className={`pt-32 pb-20 min-h-screen ${currentTheme.sectionBg} transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Page Header */}
        <div className="mb-16">
          <h1 className={`text-5xl md:text-7xl font-black uppercase ${currentTheme.primaryText} leading-none`}>
            The<br />Collection
          </h1>
          <p className={`mt-6 ${currentTheme.secondaryText} max-w-xl text-lg font-medium`}>
            Explore our curated selection of high-performance sneakers and iconic heritage drops.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              {/* Product Card */}
              <div className="aspect-square overflow-hidden rounded-[40px] bg-white/5 border border-white/5 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 flex items-center justify-center p-8">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" 
                />
              </div>

              {/* Product Info */}
              <div className="mt-6 px-2">
                <h3 className={`text-lg font-bold ${currentTheme.primaryText} uppercase tracking-tight`}>{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className={`${currentTheme.secondaryText} font-bold text-sm`}>{product.price}</span>
                  <button className={`text-xs font-black uppercase py-2 px-4 rounded-full ${currentTheme.buttonBg} ${currentTheme.buttonText} opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0`}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer theme={currentTheme} />
    </div>
  );
};

export default Collections;
