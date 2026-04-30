import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import SuggestedProducts from '../components/SuggestedProducts';

const TermsConditions = ({ currentTheme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`pt-32 pb-20 min-h-screen ${currentTheme.sectionBg} ${currentTheme.primaryText} transition-colors duration-700`}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">Terms & Conditions</h1>
        
        <div className="space-y-8 opacity-80 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">3. Disclaimer</h2>
            <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">4. Limitations</h2>
            <p>In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider">5. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which we operate.</p>
          </section>
        </div>
      </div>
      <SuggestedProducts currentTheme={currentTheme} />
      <Footer theme={currentTheme} />
    </div>
  );
};

export default TermsConditions;
