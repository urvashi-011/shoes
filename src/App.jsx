// Last updated: 2026-04-30 22:00 - Added Policy Pages
import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import FeaturedShoes from "./components/FeaturedShoes";
import CollectionBanner from "./components/CollectionBanner";
import AboutBrand from "./components/AboutBrand";
import Footer from "./components/Footer";

export const themes = [
  { // Black (Tempo)
    name: "black",
    image: "/images/tempo.png",
    sectionBg: "bg-[#121212]",
    cardBg: "bg-[#1a1a1a]",
    primaryText: "text-white",
    secondaryText: "text-gray-400",
    buttonBg: "bg-white",
    buttonText: "text-black",
    buttonHover: "hover:bg-gray-300",
    bannerBg: "from-[#1a1a1a]",
    bannerStroke: "rgba(255,255,255,0.8)",
    footerBg: "from-[#121212] to-black",
    imageBg: "from-[#2b2b2b] to-[#121212]",
  },
  { // Green (Jordan)
    name: "green",
    image: "/images/jordan.png",
    sectionBg: "bg-[#041b12]",
    cardBg: "bg-[#0a2e1e]",
    primaryText: "text-[#a8ff00]",
    secondaryText: "text-[#d1ff66]",
    buttonBg: "bg-[#a8ff00]",
    buttonText: "text-black",
    buttonHover: "hover:bg-[#d1ff66]",
    bannerBg: "from-[#0a2e1e]",
    bannerStroke: "rgba(168,255,0,0.8)",
    footerBg: "from-[#0a2e1e] to-[#041b12]",
    imageBg: "from-[#1a4014] to-[#041b12]",
  },
  { // Red (DT Max)
    name: "red",
    image: "/images/dtmax.png",
    sectionBg: "bg-[#2b0000]",
    cardBg: "bg-[#4a0606]",
    primaryText: "text-[#ff4d4d]",
    secondaryText: "text-[#ff9999]",
    buttonBg: "bg-[#ff4d4d]",
    buttonText: "text-black",
    buttonHover: "hover:bg-[#ff9999]",
    bannerBg: "from-[#4a0606]",
    bannerStroke: "rgba(255,77,77,0.8)",
    footerBg: "from-[#4a0606] to-[#2b0000]",
    imageBg: "from-[#6b0808] to-[#2b0000]",
  }
];

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ReturnPolicy from "./pages/ReturnPolicy";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [themeIndex, setThemeIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentTheme = themes[themeIndex];
  const location = useLocation();

  const movingShoeRef = React.useRef(null);

  // Hide the floating shoe on non-home pages if desired, or keep it.
  // For now, I'll only show it on the Home page ('/') to keep the scroll animation working correctly.
  const isHomePage = location.pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (loading || !isHomePage) return;

    let mm = gsap.matchMedia();

    // Desktop
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });

      tl.to(movingShoeRef.current, { right: "5%", top: "45%", width: "650px", rotation: 0, duration: 2, ease: "power2.inOut" })
        .to(movingShoeRef.current, { right: "48%", top: "55%", width: "400px", rotation: 0, duration: 2, ease: "power2.inOut" })
        .to(movingShoeRef.current, { right: "60%", top: "50%", width: "450px", rotation: -10, duration: 2 })
        .to(movingShoeRef.current, { right: "50%", top: "120%", width: "200px", opacity: 0, duration: 1 });
    });

    // Mobile
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });

      tl.to(movingShoeRef.current, { right: "15%", top: "48%", width: "240px", rotation: 0, duration: 2, ease: "power2.inOut" })
        .to(movingShoeRef.current, { right: "20%", top: "55%", width: "140px", rotation: 0, duration: 2, ease: "power2.inOut" })
        .to(movingShoeRef.current, { right: "60%", top: "50%", width: "200px", rotation: -10, duration: 2 })
        .to(movingShoeRef.current, { right: "50%", top: "120%", width: "100px", opacity: 0, duration: 1 });
    });

    return () => mm.revert();
  }, [loading, isHomePage]);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <div id="main-wrapper" className={`w-screen overflow-x-hidden relative ${!loading ? "opacity-100" : "opacity-0"}`}>

        {/* Floating 3D Shoe - only on home page where the scroll timeline exists */}
        {isHomePage && (
          <img
            ref={movingShoeRef}
            src={currentTheme.image}
            alt="Floating Shoe"
            className={`fixed right-[-5%] md:right-[5%] lg:right-[10%] top-1/2 -translate-y-1/2 w-[600px] z-[60] pointer-events-none drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 hidden'}`}
            style={{ transformOrigin: 'center center' }}
          />
        )}

        <div className="absolute top-0 left-0 right-0 px-4 sm:px-10 py-5 z-50">
          <Navbar isLoaded={!loading} />
        </div>

        <Routes>
          <Route path="/" element={
            <Home 
              loading={loading} 
              themeIndex={themeIndex} 
              setThemeIndex={setThemeIndex} 
              isScrolled={isScrolled} 
              currentTheme={currentTheme} 
            />
          } />
          <Route path="/collections" element={<Collections currentTheme={currentTheme} />} />
          <Route path="/about" element={<About currentTheme={currentTheme} />} />
          <Route path="/login" element={<Login currentTheme={currentTheme} />} />
          <Route path="/checkout" element={<Checkout currentTheme={currentTheme} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy currentTheme={currentTheme} />} />
          <Route path="/terms-conditions" element={<TermsConditions currentTheme={currentTheme} />} />
          <Route path="/return-policy" element={<ReturnPolicy currentTheme={currentTheme} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
