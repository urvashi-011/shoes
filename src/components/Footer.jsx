import { Link } from 'react-router-dom';

const Footer = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`w-screen ${theme?.sectionBg || 'bg-[#111111]'} ${theme?.primaryText || 'text-white'} pt-20 pb-10 px-10 transition-colors duration-700 border-t border-white/10 z-50 relative`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Nike <span className="text-[#ff4d4d]">Kicks</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              We bring inspiration and innovation to every athlete in the world. Step into the future with our premium collection.
            </p>
            <div className="flex flex-col space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <span>📍</span>
                <span>1 Bowerman Drive, Beaverton, OR 97005</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <span>📞</span>
                <span>1-800-806-6453</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <span>✉️</span>
                <span>support@nikekicks.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium hover:translate-x-2 inline-block transform">Home</Link></li>
              <li><Link to="/collections" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium hover:translate-x-2 inline-block transform">Collections</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium hover:translate-x-2 inline-block transform">About Us</Link></li>
              <li><Link to="/login" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium hover:translate-x-2 inline-block transform">Login</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal Pages */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white">Legal</h3>
            <ul className="space-y-4">
              <li><span className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium hover:translate-x-2 inline-block transform cursor-pointer">Privacy Policy</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium hover:translate-x-2 inline-block transform cursor-pointer">Terms & Conditions</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium hover:translate-x-2 inline-block transform cursor-pointer">Return Policy</span></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white">Stay In The Loop</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#1a1a1a] border border-white/10 focus:border-white/40 text-white px-5 py-4 rounded-xl outline-none transition-colors duration-300 text-sm placeholder-gray-600"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-2 bottom-2 bg-white text-black font-bold uppercase tracking-widest text-xs px-6 rounded-lg hover:bg-gray-300 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-500">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-white/20">
                  <span>FB</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-white/20">
                  <span>IG</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-white/20">
                  <span>TW</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-white/20">
                  <span>YT</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-white/20">
                  <span>IN</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium">© 2026 Nike Kicks. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group font-bold text-xs uppercase tracking-[2px]"
          >
            <span>Back to top</span>
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-lg">
              <span>↑</span>
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;