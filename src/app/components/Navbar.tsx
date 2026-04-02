"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Industries", href: "/industries" },
  { name: "Pricing", href: "/pricing" },
  { name: "How it Works", href: "/how-it-works" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const shouldScroll = window.scrollY > 20;
    setScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Body scroll lock (SSR safe)
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        left-1/2 -translate-x-1/2 w-[94%] max-w-7xl rounded-full
        ${scrolled
            ? "top-4 bg-[#030303]/75 backdrop-blur-xl border border-white/10 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]"
            : "top-6 bg-transparent border border-transparent py-4"
          }`}
      >
        <div className="px-6 md:px-10 flex items-center justify-between relative">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Astrix Home"
            className="relative z-50 flex items-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/Astrix_logo.png"
              alt="Astrix Digital Media"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group px-4 py-2"
                >
                  <span
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive
                        ? "text-white"
                        : "text-neutral-400 group-hover:text-white"
                      }`}
                  >
                    {link.name}
                  </span>

                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[1px] bg-white transition-transform duration-500 origin-left ${isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-40"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4 z-50">
            <Link
              href="tel:+13135409640"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-neutral-300 transition-all duration-300 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 backdrop-blur-md"
            >
              Call Us – 24/7 Line
            </Link>

            <Link
              href="https://ai.automationastrix.com/widget/form/XXpoAJkQpIFhuhrpw2aO"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-black bg-white rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative z-50 p-2 text-neutral-300 hover:text-white"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-[5px]">
              <span
                className={`block w-5 h-[2px] bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
              />
              <span
                className={`block w-5 h-[2px] bg-current transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`block w-5 h-[2px] bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#020202]/95 backdrop-blur-2xl transition-all duration-700 lg:hidden ${isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col h-full pt-32 pb-12 px-8">
          <ul className="flex flex-col space-y-6 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-3xl font-light tracking-tight transition-colors ${isActive ? "text-white" : "text-neutral-400 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-col gap-4">
            <Link
              href="https://ai.automationastrix.com/widget/booking/ldUWZEMuCZLT7aJQx4xB"
              className="flex items-center justify-center px-6 py-4 text-base font-semibold text-black bg-white rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Demo
            </Link>

            <Link
              href="tel:+13135409640"
              className="flex items-center justify-center px-6 py-4 text-base font-medium text-white border border-white/10 bg-white/5 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Call Us - 24/7 Line
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}