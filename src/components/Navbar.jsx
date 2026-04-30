import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoaded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!isLoaded) return;
    gsap.from(navref.current, {
      y: -100,
      duration: 0.8,
      opacity: 0,
    });
  }, [isLoaded]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav ref={navref} className="w-full flex items-center justify-between px-6 md:px-10 py-6 z-[100] relative">
      
      {/* Logo */}
      <Link to="/" className="logo shrink-0 z-[160]">
        <img className="h-6 md:h-10" src="/images/nike-logo.png" alt="Nike Logo" />
      </Link>

      {/* DESKTOP Nav Links */}
      <div className="hidden md:flex navlinks bg-white/5 backdrop-blur-xl p-1 rounded-full border border-white/10 items-center gap-1 lg:gap-4">
        <Link to="/" className="bg-white text-black py-2 px-6 rounded-full font-bold text-sm transition-all duration-300">Home</Link>
        <Link to="/collections" className="text-white py-2 px-6 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-semibold">Collections</Link>
        <Link to="/about" className="text-white py-2 px-6 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-semibold">About</Link>
        <Link to="/login" className="text-white py-2 px-6 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-semibold border border-white/20 ml-2">Login</Link>
      </div>

      {/* RIGHT Icons & Toggle */}
      <div className="flex items-center gap-3 z-[160]">
        <div className="hidden sm:flex items-center gap-2">
          <button className="text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all">
            <i className="ri-search-line text-lg"></i>
          </button>
          <button className="text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all">
            <i className="ri-shopping-bag-line text-lg"></i>
          </button>
        </div>

        {/* Hamburger Toggle */}
        <button 
          className="text-white bg-white/10 p-3 rounded-full md:hidden flex items-center justify-center transition-all hover:bg-white/20"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-black z-[200] flex flex-col transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"}`}>
        
        {/* Top bar inside menu */}
        <div className="w-full flex items-center justify-between px-6 py-6 border-b border-white/5">
          <Link to="/" onClick={toggleMenu}>
            <img className="h-6" src="/images/nike-logo.png" alt="Nike Logo" />
          </Link>
          <button onClick={toggleMenu} className="text-white bg-white/10 p-3 rounded-full">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Links Container */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6 px-10">
          <Link to="/" onClick={toggleMenu} className="text-white text-3xl font-black uppercase tracking-tight hover:text-gray-400 transition-colors">Home</Link>
          <Link to="/collections" onClick={toggleMenu} className="text-white text-3xl font-black uppercase tracking-tight hover:text-gray-400 transition-colors">Collections</Link>
          <Link to="/about" onClick={toggleMenu} className="text-white text-3xl font-black uppercase tracking-tight hover:text-gray-400 transition-colors">About</Link>
          <Link to="/login" onClick={toggleMenu} className="text-white text-3xl font-black uppercase tracking-tight hover:text-gray-400 transition-colors">Login</Link>
        </div>

        {/* Bottom bar inside menu */}
        <div className="p-10 border-t border-white/5 flex flex-col gap-6">
          <div className="flex gap-4">
             <button className="flex-1 text-white text-sm font-bold bg-white/5 py-4 rounded-xl flex items-center justify-center gap-2 border border-white/10">
               <i className="ri-search-line"></i> Search
             </button>
             <button className="flex-1 text-white text-sm font-bold bg-white/5 py-4 rounded-xl flex items-center justify-center gap-2 border border-white/10">
               <i className="ri-shopping-bag-line"></i> Cart
             </button>
          </div>
          
          <div className="flex justify-center opacity-30 mt-2">
             <img className="h-6" src="/images/nike-logo.png" alt="Nike Logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
