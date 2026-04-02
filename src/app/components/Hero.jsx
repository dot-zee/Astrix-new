"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

// -------------------------------------------------------------
// Component: AnimatedCounter
// Purpose: Animate numbers smoothly on intersection
// -------------------------------------------------------------
const AnimatedCounter = ({ value, prefix = "", suffix = "", isTime = false }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(value.toString().replace(/[^0-9]/g, ""));
    const duration = 2000;
    const startTime = performance.now();

    const animateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Custom ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const currentCount = Math.floor(easeProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateNumber);
  }, [isVisible, value]);

  return (
    <span ref={counterRef} className="font-semibold text-white tracking-tight">
      {prefix}
      {isTime && count === parseInt(value) ? value : count}
      {suffix}
    </span>
  );
};

// -------------------------------------------------------------
// Component: RotatingText
// Purpose: Animate rotation of headlines
// -------------------------------------------------------------
const RotatingText = () => {
  const words = [
    "Scales Without Headcount",
    "Converts 21x More",
    "Delivers 5-Star Service",
    "Leads the Competition",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-block h-[2.25em] w-full overflow-hidden align-bottom text-[0.7em] text-white mt-2 md:mt-3 pb-2 pt-1">
      {words.map((word, i) => (
        <span
          key={i}
          className={`absolute left-0 top-0 w-full text-center lg:text-left font-(--font-orbitron) uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${i === index
            ? "translate-y-[10%] opacity-100 blur-none"
            : i < index || (index === 0 && i === words.length - 1)
              ? "-translate-y-full opacity-0 blur-sm"
              : "translate-y-full opacity-0 blur-sm"
            }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

// -------------------------------------------------------------
// Component: Hero
// Purpose: Advanced Enterprise Hero
// -------------------------------------------------------------
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a] pt-32 pb-24 lg:pt-48 lg:pb-32 z-0">

      {/* 
        ========================================================
        ATMOSPHERIC LIGHTING & BACKGROUND ARCHITECTURE
        ========================================================
      */}
      {/* Deep environmental grid fading softly into the blackness */}
      <div
        className="absolute inset-0 z-[-2] opacity-[0.15] animate-hero-bg"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center 20%, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center 20%, black 10%, transparent 70%)',
        }}
      />

      {/* Primary Top Lighting - Soft white/gray volumetric glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] rounded-full bg-white/[0.03] blur-[120px] pointer-events-none z-[-1]" />

      {/* Secondary accent lighting (very subtle blue/teal to look "tech") */}
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[50vh] rounded-full bg-slate-500/[0.04] blur-[100px] pointer-events-none z-[-1]" />

      {/* Bottom fade out to smoothly blend into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />

      {/* 
        ========================================================
        MAIN CONTENT CONTAINER
        ========================================================
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* EYEBROW */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 sm:mb-10 animate-hero-content" style={{ animationDelay: '100ms' }}>
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.15em] font-semibold text-neutral-300">
              AI Acquisition System for Established Businesses
            </span>
          </div>

          {/* HEADLINE */}
          <h1
            className="text-h1 text-[40px] leading-[1.1] sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] font-medium tracking-[-0.03em] text-neutral-400 max-w-lg lg:max-w-4xl mb-8 flex flex-col items-center lg:items-start"
          >
            <span className="block animate-hero-content" style={{ animationDelay: '200ms' }}>
              The Firm with an Automated Front Desk...
            </span>
            <span className="block w-full animate-hero-content" style={{ animationDelay: '300ms' }}>
              <RotatingText />
            </span>
          </h1>

          {/* BODY TEXT */}
          <div className="max-w-xl bg-gradient-to-r from-transparent via-transparent to-transparent flex flex-col gap-6">
            <p className="text-lg md:text-xl leading-relaxed text-neutral-400 animate-hero-content" style={{ animationDelay: '400ms' }}>
              Astrix builds AI-powered acquisition systems for firms that capture, qualify and convert every inbound call, text, email and website enquiry — <span className="text-white">automatically booking appointments 24/7.</span>
            </p>
            <div className="flex flex-col gap-3 border-l border-white/10 pl-4 py-1">
              <p className="text-sm md:text-base leading-relaxed text-neutral-500 animate-hero-content" style={{ animationDelay: '500ms' }}>
                Your outbound agent calls new leads back within 60 seconds of submission — before they can call a competitor.
              </p>
              <div className="animate-hero-content" style={{ animationDelay: '600ms' }}>
                <span className="inline-block px-2 py-1 bg-white/[0.02] border border-white/5 rounded-md text-xs tracking-wide text-neutral-400">
                  📞 Calls &nbsp;|&nbsp; 💬 Texts &nbsp;|&nbsp; ✉️ Emails &nbsp;|&nbsp; 🌐 Website Enquiries
                </span>
              </div>
            </div>
          </div>

          {/* CTAS */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-12 mb-20 animate-hero-content w-full sm:w-auto"
            style={{ animationDelay: '700ms' }}
          >
            {/* Primary CTA */}
            <Link
              href="https://ai.automationastrix.com/widget/booking/ldUWZEMuCZLT7aJQx4xB"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-black bg-white rounded-full transition-all duration-500 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
              <span className="relative z-10">Book a 20-Minute Demo</span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="tel:+13135409640"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-300 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-md w-full sm:w-auto"
            >
              <span>Call Us – 24/7 Line</span>
            </Link>
          </div>

          {/* PERFORMANCE STATS */}
        <div
          className="w-full relative animate-hero-content mt-4 lg:mt-0"
          style={{ animationDelay: '800ms' }}
        >
          {/* Stylized Telemetry Bracket Borders */}
          <div className="absolute z-10 top-0 left-0 w-4 h-4 border-t border-l border-white/30 pointer-events-none" />
          <div className="absolute z-10 top-0 right-0 w-4 h-4 border-t border-r border-white/30 pointer-events-none" />
          <div className="absolute z-10 bottom-0 left-0 w-4 h-4 border-b border-l border-white/30 pointer-events-none" />
          <div className="absolute z-10 bottom-0 right-0 w-4 h-4 border-b border-r border-white/30 pointer-events-none" />
          
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/0 overflow-hidden p-[1px]">
            {/* Stat 1 */}
            <div className="bg-[#0a0a0a] p-6 lg:p-4 flex flex-col gap-2 relative group">
              <div className="text-3xl font-light text-white tracking-tighter">
                <AnimatedCounter prefix="< " value="60" suffix=" s" />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium whitespace-nowrap">Callback Time</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#0a0a0a] p-6 lg:p-4 flex flex-col gap-2">
              <div className="text-3xl font-light text-white tracking-tighter line-clamp-1">
                <AnimatedCounter value="24" isTime={true} />
                <span className="text-neutral-500 inline-block mx-1">/</span>
                <AnimatedCounter value="7" isTime={true} />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium whitespace-nowrap">Always On</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#0a0a0a] p-6 lg:p-4 flex flex-col gap-2">
              <div className="text-3xl font-light text-white tracking-tighter">
                <AnimatedCounter value="4" />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium whitespace-nowrap">Channels Covered</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-[#0a0a0a] p-6 lg:p-4 flex flex-col gap-2">
              <div className="text-3xl font-light text-white tracking-tighter">
                <AnimatedCounter value="90" suffix="%" />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium whitespace-nowrap">Overhead Savings</div>
            </div>
          </div>
        </div>
        </div>

        {/* Right Column - Big Logo (Hidden on mobile) */}
        <div 
          className="hidden lg:flex items-center justify-center lg:justify-end animate-hero-logo mt-12 lg:mt-0"
          style={{ animationDelay: '300ms' }}
        >
          <div className="relative w-full max-w-none lg:w-[120%] aspect-square flex items-center justify-center perspective-1000">
            <img
              src="/Astrix_logo.png"
              alt="Astrix Large Logo Mark"
              className="w-full h-auto object-contain opacity-90 transition-transform duration-1000 hover:scale-[1.03]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
