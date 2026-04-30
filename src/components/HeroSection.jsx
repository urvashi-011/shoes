import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";

const HeroSection = ({ isLoaded, themeIndex, onThemeChange, isScrolled }) => {

  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const shoeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const badgesRef = useRef(null);
  const dividerRef = useRef(null);
  const platformRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const currentIndex = themeIndex;

  useGSAP(() => {
    if (!isLoaded) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // --- LEFT SIDE: slides in from left first ---
    tl.from(leftRef.current, {
      x: -80,
      opacity: 0,
      duration: 1,
    }, 0);

    // --- TITLE: drops down with a slight overshoot ---
    tl.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.9,
      ease: "back.out(1.4)",
    }, 0.1);

    // --- SUBTITLE: rises up ---
    tl.from(subtitleRef.current, {
      y: 25,
      opacity: 0,
      duration: 0.7,
    }, 0.35);

    // --- DIVIDER LINE: width expands from 0 ---
    tl.from(dividerRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power2.inOut",
    }, 0.5);

    // --- DESCRIPTION: fades up ---
    tl.from(descRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.7,
    }, 0.6);

    // --- BADGES: pop in one by one ---
    tl.from(badgesRef.current?.querySelectorAll("span"), {
      y: 15,
      opacity: 0,
      scale: 0.85,
      duration: 0.5,
      stagger: 0.12,
      ease: "back.out(2)",
    }, 0.75);

    // --- RIGHT SIDE: slides in from right ---
    tl.from(rightRef.current, {
      x: 80,
      opacity: 0,
      duration: 0.9,
    }, 0.2);

    // --- SHOE: dramatic entrance from right with rotation ---
    tl.from(shoeRef.current, {
      x: 900,
      opacity: 0,
      scale: 0.75,
      rotation: 20,
      duration: 1.4,
      ease: "expo.out",
    }, 0.3);

    // --- PLATFORM ELLIPSES: fade in after shoe lands ---
    tl.from(platformRef.current, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
      duration: 0.6,
      ease: "power2.out",
    }, 1.4);

    // --- SCROLL INDICATOR: fades in last ---
    tl.from(scrollIndicatorRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.6,
    }, 1.6);

    // --- SHOE: infinite float after landing ---
    gsap.to(shoeRef.current, {
      y: -18,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.8,
    });

    // --- PLATFORM: subtle pulse in sync with shoe float ---
    gsap.to(platformRef.current, {
      scaleX: 0.85,
      opacity: 0.5,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.8,
    });

  }, [isLoaded]);


  const shoes = [
    {
      name: "Air More Uptempo",
      color: "Black",
      image: "/images/tempo.png",
      bg: "from-[#2b2b2b] via-[#121212] to-[#000000]",
      price: "$229",
      rotate: "-20deg",
      scale: 0.95,
      title1: "Own the",
      strokeWord: "streets",
      title2: "with style.",
    },
    {
      name: "Air Jordan 18",
      color: "Green",
      image: "/images/jordan.png",
      bg: "from-[#a8ff00] via-[#3a7d2c] to-[#041b12]",
      price: "$199",
      rotate: "20deg",
      translateY: "60px",
      scale: 1.1,
      title1: "Defy gravity,",
      strokeWord: "fly",
      title2: "higher.",
    },
    {
      name: "Air DT Max '96",
      color: "Red",
      image: "/images/dtmax.png",
      bg: "from-[#ff4d4d] via-[#c1121f] to-[#2b0000]",
      price: "$219",
      rotate: "-20deg",
      scale: 0.85,
      title1: "Elevate every",
      strokeWord: "step",
      title2: "you take.",
    },
  ];

  // --- Shoe change animation ---
  // When user clicks arrow, shoe flies out then new one flies in
  const animateShoeChange = (newIndex) => {
    const shoeEl = shoeRef.current;
    const titleEl = titleRef.current;
    const subtitleEl = subtitleRef.current;

    // Phase 1: current shoe and text fly out
    gsap.to(shoeEl, {
      x: -300,
      opacity: 0,
      scale: 0.8,
      rotation: -10,
      duration: 0.15,
      ease: "power1.in",
    });

    gsap.to([titleEl, subtitleEl], {
      y: -20,
      opacity: 0,
      duration: 0.15,
      stagger: 0.05,
      ease: "power1.in",
      onComplete: () => {
        // Switch shoe and text after they exit via global state
        onThemeChange(newIndex);

        // Phase 2: new shoe and text fly in
        gsap.fromTo(shoeEl,
          { x: 400, opacity: 0, scale: 0.8, rotation: 15 },
          { x: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.2, ease: "expo.out" }
        );

        gsap.fromTo([titleEl, subtitleEl],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.2, stagger: 0.05, ease: "power1.out", delay: 0.05 }
        );
      },
    });
  };

  const nextSlide = () => {
    animateShoeChange((currentIndex + 1) % shoes.length);
  };

  const prevSlide = () => {
    animateShoeChange(currentIndex === 0 ? shoes.length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    if (!isLoaded || isScrolled) return;
    const timer = setInterval(() => {
      animateShoeChange((currentIndex + 1) % shoes.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [isLoaded, isScrolled, currentIndex, shoes.length]);


  return (
    <div
      ref={containerRef}
      className={`w-full h-screen bg-gradient-to-br ${shoes[currentIndex].bg} ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } relative flex items-center justify-between px-6 md:px-10 overflow-hidden`}
    >

      {/* ================= LEFT CONTENT ================= */}
      <div ref={leftRef} className="w-full md:w-[60%] md:max-w-[480px] z-10 -mt-32 md:mt-20">

        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-[52px] font-black uppercase text-white leading-[1.2] tracking-wide">
          {shoes[currentIndex].title1}<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,1)" }}>
            {shoes[currentIndex].strokeWord}
          </span> {shoes[currentIndex].title2}
        </h1>

        <h2 ref={subtitleRef} className="text-sm sm:text-base md:text-3xl font-bold tracking-[2px] md:tracking-[8px] uppercase text-white mt-4 md:mt-12">
          {shoes[currentIndex].name}
        </h2>

        {/* Divider — now has its own ref for animation */}
        <div
          ref={dividerRef}
          className="h-[1px] md:h-[2px] w-20 md:w-82 mt-2 md:mt-3"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }}
        />

        <div className="h-full w-full pt-4 md:pt-45">
          <p ref={descRef} className="w-full md:w-[420px] text-white/85 text-[10px] md:text-[14px] leading-[1.6] md:leading-[1.8] mt-4 md:mt-7">
          </p>

          <div ref={badgesRef} className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-8">
          </div>
        </div>
      </div>


      {/* ================= SHOES SLIDER ================= */}
      <div
        ref={shoeRef}
        className="absolute right-[-10%] sm:right-[5%] md:right-[5%] lg:right-[10%] top-[65%] md:top-1/2 -translate-y-1/2 w-[260px] sm:w-[350px] md:w-[600px] h-[300px] md:h-[600px] flex items-center justify-center"
      >
        {/* Only render the active shoe — GSAP handles all transitions */}
        <img
          src={shoes[currentIndex].image}
          alt={shoes[currentIndex].color}
          className={`absolute w-full transition-opacity duration-300 ${isScrolled ? 'opacity-0 hidden' : 'opacity-100'}`}
          style={{
            transform: `rotate(${shoes[currentIndex].rotate}) translateY(${shoes[currentIndex].translateY || "0px"}) scale(${shoes[currentIndex].scale})`,
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))",
          }}
        />

        {/* Platform ellipses — now has ref for animation */}
        <svg
          ref={platformRef}
          className="absolute top-full -translate-y-16 md:-translate-y-12"
          width="100%"
          height="80"
          viewBox="0 0 500 80"
        >
          <ellipse cx="250" cy="40" rx="200" ry="35"
            fill="none" stroke="rgba(255,255,255,0.3)"
            strokeWidth="2" strokeDasharray="5,5"
          />
          <ellipse cx="250" cy="40" rx="180" ry="30"
            fill="none" stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
        </svg>
      </div>





      {/* ================= SCROLL INDICATOR ================= */}
      <div
        ref={scrollIndicatorRef}
      >
      </div>




    </div>
  );
};

export default HeroSection;



