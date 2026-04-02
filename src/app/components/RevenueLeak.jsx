"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RevenueLeak() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Eyebrow
      gsap.fromTo(
        ".eyebrow",
        { opacity: 0, y: 15 },
        {
          opacity: 0.6,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".eyebrow",
            start: "top 85%",
          },
        },
      );

      // 2. Headline Stagger
      gsap.fromTo(
        ".headline-word",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".headline-trigger",
            start: "top 80%",
          },
        },
      );

      // 3. Body text
      const bodyLines = gsap.utils.toArray(".body-line");
      bodyLines.forEach((line, i) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.4, // Pause between lines
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".body-trigger",
              start: "top 75%",
            },
          },
        );
      });

      // 4. "It is invisible." Moment
      gsap.fromTo(
        ".invisible-pivot",
        { opacity: 0.05, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".invisible-pivot",
            start: "top 75%",
            end: "top 45%",
            scrub: true,
          },
        },
      );

      // 5. Scenarios sequence
      const scenarios = [
        { el: ".scenario-1", x: -30 },
        { el: ".scenario-2", x: 30 },
        { el: ".scenario-3", x: -30 },
      ];

      scenarios.forEach((sc, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sc.el,
            start: "top 85%",
          },
        });

        tl.fromTo(
          sc.el + " .scenario-main",
          { opacity: 0, x: sc.x },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        ).fromTo(
          sc.el + " .scenario-sub",
          { opacity: 0 },
          { opacity: 0.5, duration: 0.8, ease: "power2.out" },
          "-=0.4",
        );
      });

      // 6. Final Statement
      gsap.fromTo(
        ".resolution",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".resolution",
            start: "top 85%",
          },
        },
      );

      // 7. Background Interaction (Faint blinking dots)
      const dots = gsap.utils.toArray(".bg-dot");
      dots.forEach((dot) => {
        gsap.to(dot, {
          opacity: Math.random() * 0.1,
          duration: gsap.utils.random(2, 5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 3),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headline = "THE INVISIBLE REVENUE LEAK".split(" ");

  // Generate some faint dots for the background
  const renderDots = () => {
    return Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="bg-dot absolute w-1 h-1 rounded-full bg-white opacity-0 pointer-events-none will-change-opacity"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-48 md:py-64 bg-[#0a0a0a] text-white flex flex-col items-center justify-center cursor-default z-10"
    >
      {/* Background Subtle Signal effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">{renderDots()}</div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center lg:text-left flex flex-col items-center lg:items-start space-y-32">
        {/* Intro Group */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full space-y-8">
          <div className="eyebrow text-sm tracking-[0.25em] font-medium text-neutral-400 uppercase will-change-transform will-change-opacity">
            Why This Exists
          </div>

          <h2 className="headline-trigger text-[2.5rem] md:text-5xl lg:text-6xl font-bold tracking-tight text-white flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 leading-tight">
            {headline.map((word, i) => (
              <span
                key={i}
                className="headline-word inline-block will-change-transform will-change-opacity text-transparent bg-clip-text bg-linear-to-br from-white to-neutral-400"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Story Text */}
        <div className="body-trigger w-full max-w-2xl text-xl md:text-2xl pt-16 leading-relaxed font-light text-neutral-300 space-y-12 ml-auto mr-auto lg:ml-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="body-line will-change-transform will-change-opacity text-neutral-400">
            You invest heavily in marketing. You build authority. You drive
            demand to your front door.
          </p>
          <p className="body-line will-change-transform will-change-opacity text-neutral-400">
            But somewhere between a prospect's initial intent and the final
            handshake...
          </p>
          <p className="body-line text-neutral-300 font-medium will-change-transform will-change-opacity">
            ...quietly, consistently, high-value opportunities are slipping
            through the cracks.
          </p>
        </div>

        {/* Invisible Moment */}
        <div className="w-full flex justify-center py-24 md:py-32">
          <h3
            className="invisible-pivot text-5xl md:text-7xl font-light tracking-tighter text-white will-change-transform will-change-opacity text-center"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.1)" }}
          >
            It is invisible.
          </h3>
        </div>

        {/* Scenarios */}
        <div className="w-full max-w-3xl flex flex-col gap-24 py-16 mx-auto">
          {/* Scenario 1 */}
          <div className="scenario-1 flex flex-col items-start pr-8 md:pr-0">
            <div className="scenario-main text-2xl md:text-3xl text-white font-medium mb-4 will-change-transform will-change-opacity leading-tight border-l-2 border-white/20 pl-6 py-1">
              "A prospect calls at 6:15pm. Nobody answers."
            </div>
            <div className="scenario-sub text-lg md:text-xl text-neutral-500 font-light will-change-opacity pl-6">
              They move on to the next firm.
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="scenario-2 flex flex-col items-end text-right pl-8 md:pl-0">
            <div className="scenario-main text-2xl md:text-3xl text-white font-medium mb-4 will-change-transform will-change-opacity leading-tight border-r-2 border-white/20 pr-6 py-1">
              "A website form submitted on a Saturday..."
            </div>
            <div className="scenario-sub text-lg md:text-xl text-neutral-500 font-light will-change-opacity pr-6">
              Waits until Monday, by which time they've booked a competitor.
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="scenario-3 flex flex-col items-start pr-8 md:pr-0">
            <div className="scenario-main text-2xl md:text-3xl text-white font-medium mb-4 will-change-transform will-change-opacity leading-tight border-l-2 border-white/20 pl-6 py-1">
              "Even a referral from your best client..."
            </div>
            <div className="scenario-sub text-lg md:text-xl text-neutral-500 font-light will-change-opacity pl-6">
              Reaches voicemail and decides to explore other options.
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="resolution w-full text-center py-24 md:py-32 will-change-transform will-change-opacity">
          <p className="text-xl md:text-3xl text-white/90 font-light mb-6 tracking-wide">
            None of this is intentional.
          </p>
          <p
            className="text-lg md:text-2xl text-blue-400/90 font-medium tracking-wide"
            style={{ textShadow: "0 0 20px rgba(59,130,246,0.2)" }}
          >
            It is a systems problem — and systems problems have systems
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
