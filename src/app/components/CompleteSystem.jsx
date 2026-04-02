"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Zap, BrainCircuit, CalendarCheck, Database } from "lucide-react";

export default function CompleteSystem() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  // Animation variants
  const eyebrowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 0.6, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  const bodyVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative z-10 w-full overflow-hidden bg-[#0a0a0a] py-20 lg:py-30 text-white"
    >
      {/* Background Treatment */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle radial glow to maintain premium feel without being noisy */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-250 h-125 bg-white/1.5 blur-[100px] rounded-[100%]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6">
        
        {/* Top Content Block */}
        <div className="flex w-full flex-col items-center justify-center text-center">
          <motion.div
            variants={eyebrowVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-6 inline-block"
          >
            <span className="block text-[13px] font-semibold uppercase tracking-[0.2em] text-white">
              WHAT WE BUILD
            </span>
          </motion.div>

          {/* Masked reveal for headline using overflow-hidden wrapper */}
          <div className="overflow-hidden pb-2 mb-6">
            <motion.h2 
              variants={headlineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="max-w-200 text-[32px] font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-[56px] text-white"
            >
              An AI Acquisition System that works like a top-tier front desk team— except it never sleeps.
            </motion.h2>
          </div>

          <motion.p 
            variants={bodyVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-175 text-base md:text-lg font-normal leading-relaxed text-neutral-400"
          >
            We design and deploy AI-powered front desk systems built specifically for the nuances of professional services. By the time your team sees the appointment, the qualification and scheduling work is already done.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 lg:mt-20 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-250"
        >
          {/* Card 1 */}
          <motion.div 
            variants={cardVariants}
            className="group flex flex-col items-start rounded-[20px] border border-white/4 bg-white/2 p-6 md:p-7 text-left transition-all duration-250 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-white/3 will-change-transform"
          >
            <Zap className="mb-5 h-5.5 w-5.5 text-neutral-400" strokeWidth={1.5} />
            <h3 className="mb-2 text-lg font-bold tracking-tight text-white">Responds in Seconds</h3>
            <p className="text-[15px] font-normal leading-relaxed text-neutral-400">
              Immediate handling across all four channels, including weekends.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={cardVariants}
            className="group flex flex-col items-start rounded-[20px] border border-white/4 bg-white/2 p-6 md:p-7 text-left transition-all duration-250 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-white/3 will-change-transform"
          >
            <BrainCircuit className="mb-5 h-5.5 w-5.5 text-neutral-400" strokeWidth={1.5} />
            <h3 className="mb-2 text-lg font-bold tracking-tight text-white">Qualifies Intelligently</h3>
            <p className="text-[15px] font-normal leading-relaxed text-neutral-400">
              Captures entity type, service need and urgency before the first meeting. No more noise in the calendar.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={cardVariants}
            className="group flex flex-col items-start rounded-[20px] border border-white/4 bg-white/2 p-6 md:p-7 text-left transition-all duration-250 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-white/3 will-change-transform"
          >
            <CalendarCheck className="mb-5 h-5.5 w-5.5 text-neutral-400" strokeWidth={1.5} />
            <h3 className="mb-2 text-lg font-bold tracking-tight text-white">Books Directly</h3>
            <p className="text-[15px] font-normal leading-relaxed text-neutral-400">
              Appointments land in your calendar fully prepared with complete context.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={cardVariants}
            className="group flex flex-col items-start rounded-[20px] border border-white/4 bg-white/2 p-6 md:p-7 text-left transition-all duration-250 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-white/3 will-change-transform"
          >
            <Database className="mb-5 h-5.5 w-5.5 text-neutral-400" strokeWidth={1.5} />
            <h3 className="mb-2 text-lg font-bold tracking-tight text-white">Logs Everything</h3>
            <p className="text-[15px] font-normal leading-relaxed text-neutral-400">
              Every interaction is routed to your existing CRM automatically. Zero admin work.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-16 lg:mt-20 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          {/* Primary CTA */}
          <Link
            href="https://ai.automationastrix.com/widget/booking/ldUWZEMuCZLT7aJQx4xB"
            className="group relative inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] sm:w-auto"
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <span className="relative z-10">Book a 20-Minute Demo</span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="tel:+13135409640"
            className="group relative inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:w-auto"
          >
            <span>Call Us - 24/7 Line</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
