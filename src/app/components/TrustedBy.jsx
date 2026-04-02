"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Red_Rose } from "next/font/google";

const redRose = Red_Rose({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  { src: "/Trustee1.png", alt: "" },
  { src: "/Trustee2.png", alt: "" },
  { src: "/Trustee3.png", alt: "" },
  { src: "/Trustee4.png", alt: "" },
  //   { src: "/Trustee5.png", alt: "" },
  { src: "/Trustee6.png", alt: "" },
  { src: "/Trustee7.png", alt: "" },
];

export default function GoodCompany() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId;
    let position = 0;
    const speed = 0.75; // pixels per frame

    const animate = () => {
      position -= speed;

      // Calculate the width of one complete set of logos
      const logoWidth = 120 + 48; // logo width + gap
      const totalWidth = logoWidth * logos.length;

      // When we've scrolled one complete set, reset to create seamless loop
      if (position <= -totalWidth) {
        position = 0;
      }

      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="relative w-full bg-[#0a0a0a] py-16 flex flex-col items-center overflow-hidden">
      <h2 className={` ${redRose.className} text-4xl md:text-5xl mb-10 text-purple-600 text-center font-semibold`}>
        TRUSTED <span className="text-white">BY</span>
      </h2>

      <div className="relative w-1/2 sm:w-3/4 flex justify-center overflow-hidden group">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex gap-12 whitespace-nowrap" ref={marqueeRef}>
          {/* Create multiple sets of logos for seamless infinite scrolling */}
          {Array.from({ length: 3 }, (_, setIndex) =>
            logos.map((logo, index) => (
              <div
                key={`set-${setIndex}-${index}`}
                className="shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain opacity-100 md:opacity-70 md:hover:opacity-100 md:grayscale md:hover:grayscale-0"
                />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
