import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Checkout = ({ currentTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [isProcessing, setIsProcessing] = useState(false);

  // If no product is selected, redirect back to collections
  if (!product) {
    React.useEffect(() => {
      navigate('/collections');
    }, []);
    return null;
  }

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 2) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(3);
      }, 2000);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className={`pt-32 pb-20 min-h-screen ${currentTheme.sectionBg} transition-colors duration-700`}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        
        {step < 3 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Side - Checkout Form */}
            <div className="flex-1">
              {/* Stepper Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? currentTheme.buttonBg + ' ' + currentTheme.buttonText : 'bg-white/10 text-gray-500'}`}>1</div>
                <div className={`h-[2px] w-12 ${step >= 2 ? currentTheme.buttonBg : 'bg-white/10'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? currentTheme.buttonBg + ' ' + currentTheme.buttonText : 'bg-white/10 text-gray-500'}`}>2</div>
              </div>

              <h1 className={`text-4xl font-black uppercase ${currentTheme.primaryText} mb-8`}>
                {step === 1 ? 'Shipping Details' : 'Payment Method'}
              </h1>

              <form onSubmit={handleNextStep} className="space-y-6">
                {step === 1 ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className={`text-xs font-bold uppercase ${currentTheme.secondaryText}`}>First Name</label>
                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 text-white" />
                      </div>
                      <div className="space-y-2">
                        <label className={`text-xs font-bold uppercase ${currentTheme.secondaryText}`}>Last Name</label>
                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase ${currentTheme.secondaryText}`}>Address</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 text-white" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className={`text-xs font-bold uppercase ${currentTheme.secondaryText}`}>City</label>
                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 text-white" />
                      </div>
                      <div className="space-y-2">
                        <label className={`text-xs font-bold uppercase ${currentTheme.secondaryText}`}>Postal Code</label>
                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 text-white" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl border border-white/20 bg-white/5 flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-4">
                          <i className="ri-bank-card-line text-2xl text-white"></i>
                          <span className="text-white font-bold">Credit / Debit Card</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-4 ${currentTheme.buttonBg} border-black`}></div>
                      </div>
                      <div className="p-4 rounded-xl border border-white/5 bg-black/20 flex items-center justify-between cursor-not-allowed opacity-50">
                        <div className="flex items-center gap-4">
                          <i className="ri-paypal-line text-2xl text-white"></i>
                          <span className="text-white font-bold">PayPal</span>
                        </div>
                        <div className="w-5 h-5 rounded-full border border-white/20"></div>
                      </div>
                    </div>
                    
                    <div className="pt-6 space-y-4">
                       <div className="space-y-2">
                          <label className={`text-xs font-bold uppercase ${currentTheme.secondaryText}`}>Card Number</label>
                          <input required type="text" placeholder="xxxx xxxx xxxx xxxx" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 text-white" />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className={`text-xs font-bold uppercase ${currentTheme.secondaryText}`}>Expiry Date</label>
                            <input required type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 text-white" />
                          </div>
                          <div className="space-y-2">
                            <label className={`text-xs font-bold uppercase ${currentTheme.secondaryText}`}>CVV</label>
                            <input required type="password" placeholder="***" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 text-white" />
                          </div>
                       </div>
                    </div>
                  </>
                )}

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest mt-8 transition-all duration-300 ${isProcessing ? 'opacity-50 cursor-not-allowed' : currentTheme.buttonBg + ' ' + currentTheme.buttonText + ' hover:scale-[1.02] active:scale-95'}`}
                >
                  {isProcessing ? 'Processing Payment...' : (step === 1 ? 'Continue to Payment' : `Pay ${product.price}`)}
                </button>
              </form>
            </div>

            {/* Right Side - Order Summary */}
            <div className="w-full lg:w-[380px]">
              <div className="bg-white/5 border border-white/5 rounded-[40px] p-8 sticky top-32">
                <h3 className={`text-xl font-black uppercase ${currentTheme.primaryText} mb-6`}>Order Summary</h3>
                
                <div className="flex gap-4 mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center p-4">
                    <img src={product.img} alt={product.name} className="w-full h-auto object-contain" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm leading-tight mb-1">{product.name}</h4>
                    <span className={currentTheme.secondaryText + ' text-xs'}>Color: Standard Edition</span>
                    <div className="mt-2 text-white font-black">{product.price}</div>
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/5 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">{product.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-green-500 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-lg font-black border-t border-white/5 pt-4 mt-2">
                    <span className={currentTheme.primaryText}>Total</span>
                    <span className={currentTheme.primaryText}>{product.price}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-700">
            <div className={`w-24 h-24 rounded-full ${currentTheme.buttonBg} flex items-center justify-center mb-8 shadow-2xl shadow-green-500/20`}>
              <i className={`ri-check-line text-5xl ${currentTheme.buttonText}`}></i>
            </div>
            <h1 className={`text-5xl md:text-7xl font-black uppercase ${currentTheme.primaryText} mb-4`}>
              Order Confirmed!
            </h1>
            <p className={`${currentTheme.secondaryText} text-xl max-w-xl mx-auto mb-12 font-medium`}>
              Your exclusive pair of <span className="text-white font-bold">"{product.name}"</span> is being prepared and will be at your doorstep soon.
            </p>
            
            <div className="bg-white/5 border border-white/5 rounded-[40px] p-8 max-w-md w-full mb-12">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400 text-sm">Order Number</span>
                  <span className="text-white font-mono">#NK-{Math.floor(100000 + Math.random() * 900000)}</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Estimated Delivery</span>
                  <span className="text-green-500 font-bold">3-5 Business Days</span>
               </div>
            </div>

            <button 
              onClick={() => navigate('/')}
              className={`px-12 py-5 rounded-2xl font-black uppercase tracking-widest ${currentTheme.buttonBg} ${currentTheme.buttonText} hover:scale-105 active:scale-95 transition-all`}
            >
              Back to Home
            </button>
          </div>
        )}

      </div>
      <Footer theme={currentTheme} />
    </div>
  );
};

export default Checkout;
