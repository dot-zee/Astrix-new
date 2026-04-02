"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneCall, MessageSquareText, Mail, Globe, Cpu } from "lucide-react";

const nodes = [
  {
    id: 1,
    title: "Inbound Calls",
    description:
      "Never miss a call again. AI qualifies the caller, captures details, and books the appointment before voicemail. 80% of callers who reach voicemail do not call back.",
    icon: PhoneCall,
    left: 20,
    top: 25,
  },
  {
    id: 2,
    title: "Text Messages",
    description:
      "Capture the 60% of prospects who prefer texting. SMS handled in real-time — qualification and booking automated.",
    icon: MessageSquareText,
    left: 80,
    top: 25,
  },
  {
    id: 3,
    title: "Emails",
    description:
      "Every enquiry acknowledged in minutes. Urgent messages flagged. Follow-ups automated. Average response time reduced from 12 hours to minutes.",
    icon: Mail,
    left: 20,
    top: 75,
  },
  {
    id: 4,
    title: "Website Enquiries",
    description:
      "AI calls leads within 60 seconds of form submission. Leads contacted within 60 seconds are 21x more likely to convert.",
    icon: Globe,
    left: 80,
    top: 75,
  },
];

const UnifiedSystem = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full py-24 bg-{#0a0a0a} overflow-hidden flex flex-col items-center">
      {/* Background Animated Grid / Radial Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-wide mb-6">
            UNIFIED COMMUNICATION
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight">
            One System. Four Channels. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Zero Missed Opportunities.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Your clients reach out in four different ways, but most firms are only ready for one. 
            Every missed channel is a missed client. A prospect who calls and gets voicemail doesn't wait; 
            they call your competitor.
          </p>
        </motion.div>

        {/* Desktop Interactive Layout */}
        <div className="hidden lg:block relative w-full h-150 mt-10">
          
          {/* SVG Connection Lines */}
          {mounted && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {nodes.map((node, i) => {
                const isActive = activeNode === node.id;
                
                return (
                  <g key={`line-${node.id}`}>
                    {/* Default dimmed line */}
                    <motion.line
                      x1="50%" y1="50%" x2={`${node.left}%`} y2={`${node.top}%`}
                      className="stroke-white/10"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                      viewport={{ once: true }}
                    />
                    {/* Active highlighted line */}
                    <motion.line
                      x1="50%" y1="50%" x2={`${node.left}%`} y2={`${node.top}%`}
                      stroke="url(#blue-purple-grad)"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        pathLength: isActive ? 1 : 0 
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </g>
                )
              })}
              <defs>
                <linearGradient id="blue-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center"
          >
            {/* Pulsing rings */}
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-48 h-48 rounded-full border border-blue-500/20"
            />
            <motion.div 
              animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-48 h-48 rounded-full border border-purple-500/20"
            />
            
            {/* Core Element */}
            <div className="relative w-28 h-28 rounded-full bg-black border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{ background: 'conic-gradient(from 0deg, transparent, rgba(59,130,246,0.5) 50%, transparent)' }}
              />
              <div className="absolute inset-1 rounded-full bg-black z-0" />
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md z-0" />
              <Cpu className="w-10 h-10 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>
            <div className="mt-8 text-sm font-semibold tracking-[0.2em] text-blue-400/80">
              CORE SYSTEM
            </div>
          </motion.div>

          {/* Flow Nodes */}
          {nodes.map((node, i) => {
            const isActive = activeNode === node.id;
            const isOtherActive = activeNode !== null && activeNode !== node.id;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                style={{ left: `${node.left}%`, top: `${node.top}%`, x: '-50%', y: '-50%' }}
                className={`absolute z-30 w-80 p-5 rounded-2xl backdrop-blur-md transition-all duration-500 cursor-pointer overflow-hidden ${
                  isActive 
                    ? 'bg-white/10 border border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.2)] scale-105' 
                    : isOtherActive 
                      ? 'bg-white/5 border border-white/5 opacity-40 scale-95' 
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors duration-500 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/70'}`}>
                    <node.icon size={22} className={isActive ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : ''} />
                  </div>
                  <h3 className={`text-lg font-semibold transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/80'}`}>
                    {node.title}
                  </h3>
                </div>
                
                {/* Description expand */}
                <motion.div
                  initial={false}
                  animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 16 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-white/60 text-sm leading-relaxed text-left">
                    {node.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden flex flex-col gap-6 mt-10 w-full max-w-lg z-20 relative">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 text-left relative overflow-hidden"
            >
              {/* Subtle gradient bg */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-4 relative z-10">
                 <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/20">
                    <node.icon size={22} />
                 </div>
                 <h3 className="text-xl font-semibold text-white">{node.title}</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">
                {node.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UnifiedSystem;
