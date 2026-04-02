"use client";

import React from "react";
import Link from "next/link";
import { Zap, BrainCircuit, CalendarCheck, Database } from "lucide-react";

export default function CompleteSystem() {
  return (
    <section className="relative z-10 w-full overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-20 text-white md:py-30">
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center overflow-hidden">
        <div className="h-150 w-200 translate-y-[-20%] rounded-full bg-white/2 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6">
        <div className="w-full text-center flex justify-center">
          <div className="flex max-w-200 flex-col items-center">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              WHAT WE BUILD
            </span>

            <h2 className="mb-6 text-[2.25rem] font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[56px]">
              An AI Acquisition System that works like a top-tier front desk team, except it never sleeps.
            </h2>

            <p className="max-w-175 text-base font-light leading-relaxed text-neutral-400 md:text-xl">
              We design and deploy AI-powered front desk systems built specifically for the nuances of professional services. By the time your team sees the appointment, the qualification and scheduling work is already done.
            </p>
          </div>
        </div>

        <div className="cs-cards-grid mt-20 mb-20 grid w-full max-w-250 grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="cs-card group flex flex-col items-start rounded-[20px] border border-white/5 bg-white/2 p-6 text-left transition-all duration-250 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-white/3 md:p-8">
            <Zap className="mb-5 h-6 w-6 text-neutral-400 transition-colors duration-250 group-hover:text-white" strokeWidth={1.5} />
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">Responds in Seconds</h3>
            <p className="text-base font-light leading-relaxed text-neutral-400">
              Immediate handling across all four channels, including weekends.
            </p>
          </div>

          <div className="cs-card group flex flex-col items-start rounded-[20px] border border-white/5 bg-white/2 p-6 text-left transition-all duration-250 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-white/3 md:p-8">
            <BrainCircuit className="mb-5 h-6 w-6 text-neutral-400 transition-colors duration-250 group-hover:text-white" strokeWidth={1.5} />
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">Qualifies Intelligently</h3>
            <p className="text-base font-light leading-relaxed text-neutral-400">
              Captures entity type, service need and urgency before the first meeting. No more noise in the calendar.
            </p>
          </div>

          <div className="cs-card group flex flex-col items-start rounded-[20px] border border-white/5 bg-white/2 p-6 text-left transition-all duration-250 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-white/3 md:p-8">
            <CalendarCheck className="mb-5 h-6 w-6 text-neutral-400 transition-colors duration-250 group-hover:text-white" strokeWidth={1.5} />
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">Books Directly</h3>
            <p className="text-base font-light leading-relaxed text-neutral-400">
              Appointments land in your calendar fully prepared with complete context.
            </p>
          </div>

          <div className="cs-card group flex flex-col items-start rounded-[20px] border border-white/5 bg-white/2 p-6 text-left transition-all duration-250 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-white/3 md:p-8">
            <Database className="mb-5 h-6 w-6 text-neutral-400 transition-colors duration-250 group-hover:text-white" strokeWidth={1.5} />
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">Logs Everything</h3>
            <p className="text-base font-light leading-relaxed text-neutral-400">
              Every interaction is routed to your existing CRM automatically. Zero admin work.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Link
            href="https://ai.automationastrix.com/widget/booking/ldUWZEMuCZLT7aJQx4xB"
            className="group relative inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] sm:w-auto"
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <span className="relative z-10">Book a 20-Minute Demo</span>
          </Link>

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
