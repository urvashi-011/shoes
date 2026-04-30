import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import SuggestedProducts from '../components/SuggestedProducts';

const PrivacyPolicy = ({ currentTheme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`pt-32 pb-20 min-h-screen ${currentTheme.sectionBg} ${currentTheme.primaryText} transition-colors duration-700`}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">Privacy Policy</h1>
        
        <div className="space-y-8 opacity-80 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This may include your name, email address, postal address, phone number, and payment information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">2. How We Use Your Information</h2>
            <p>We use the information we collect to process your orders, provide customer support, send you technical notices, and communicate with you about products, services, offers, and events.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">3. Sharing of Information</h2>
            <p>We do not share your personal information with third parties except as described in this policy, such as with vendors who help us provide our services or as required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">4. Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at support@nikekicks.com.</p>
          </section>
        </div>
      </div>
      <SuggestedProducts currentTheme={currentTheme} />
      <Footer theme={currentTheme} />
    </div>
  );
};

export default PrivacyPolicy;
