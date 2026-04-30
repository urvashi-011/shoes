import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import SuggestedProducts from '../components/SuggestedProducts';

const ReturnPolicy = ({ currentTheme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`pt-32 pb-20 min-h-screen ${currentTheme.sectionBg} ${currentTheme.primaryText} transition-colors duration-700`}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">Return Policy</h1>
        
        <div className="space-y-8 opacity-80 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">1. Returns</h2>
            <p>You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">2. Refunds</h2>
            <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. If your return is approved, we will initiate a refund to your original method of payment.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">3. Shipping</h2>
            <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">4. Contact Us</h2>
            <p>If you have any questions on how to return your item to us, contact us at returns@nikekicks.com.</p>
          </section>
        </div>
      </div>
      <SuggestedProducts currentTheme={currentTheme} />
      <Footer theme={currentTheme} />
    </div>
  );
};

export default ReturnPolicy;
