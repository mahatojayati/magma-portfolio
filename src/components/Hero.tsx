import React from 'react';
import { ArrowDown, MessageSquare, Briefcase, Zap, Flame, ShieldCheck, Award } from 'lucide-react';
import { softwareTools, SoftwareTool } from '../data';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  openCalculator: () => void;
}

export default function Hero({ onScrollToSection, openCalculator }: HeroProps) {
  return (
    <section 
      id="hero-banner"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-brand-dark"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 z-0">
        {/* Large red glow on left */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brand-red/10 blur-[130px]" />
        {/* Large red glow on right */}
        <div className="absolute bottom-1/4 -right-1/4 w-[550px] h-[550px] rounded-full bg-brand-red/10 blur-[130px]" />
        
        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,30,30,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,30,30,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        {/* Custom Artistic Flair Logo / Badge */}
        <div className="flex flex-col items-center mb-8">
          <span className="text-[10px] sm:text-xs tracking-[0.4em] text-brand-red font-black uppercase mb-3 animate-pulse">
            Available for Worldwide Projects
          </span>
          <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
        </div>

        {/* Core Main Displays with special Playfair Display italic serif font */}
        <h1 className="max-w-5xl mx-auto text-4xl sm:text-6xl lg:text-8xl font-display font-black tracking-tighter uppercase leading-[0.95] text-white mb-6">
          <span className="block text-white">Magma Editor</span>
          <span className="block mt-2 font-display">
            HIGH-INTENSITY <span className="italic font-serif font-light text-brand-red lowercase tracking-normal px-2 block sm:inline">creative</span> SYSTEMS
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-white/70 font-sans font-normal leading-relaxed mb-10">
          Crafting hyper-synched video montages, thumb-stopping graphic assets, and high-growth social media campaigns. Built to convert casual viewers into obsessed brand advocates.
        </p>

        {/* Dynamic CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => onScrollToSection('contact')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-display font-extrabold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 active:scale-95 glow-box-lg cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Start Collaboration</span>
          </button>

          <button
            onClick={() => onScrollToSection('portfolio')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-brand-slate hover:bg-[#1a1a20] text-white border border-brand-border hover:border-brand-red/40 px-8 py-4 rounded-lg font-display font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-brand-red" />
            <span>Explore Works</span>
          </button>
        </div>

        {/* Micro Stats Display block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto py-8 bg-brand-slate/60 border border-brand-border/60 rounded-2xl backdrop-blur-xs">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-display font-black text-brand-red glow-red">25M+</span>
            <span className="text-xs text-[#a0a0ad] font-mono uppercase mt-1">Cumulative Views</span>
          </div>
          <div className="flex flex-col items-center border-l border-brand-border/60">
            <span className="text-3xl sm:text-4xl font-display font-black text-white">100%</span>
            <span className="text-xs text-[#a0a0ad] font-mono uppercase mt-1">Retention Focused</span>
          </div>
          <div className="flex flex-col items-center border-l border-brand-border/60">
            <span className="text-3xl sm:text-4xl font-display font-black text-brand-red glow-red">15+</span>
            <span className="text-xs text-[#a0a0ad] font-mono uppercase mt-1">Active SMM Accounts</span>
          </div>
          <div className="flex flex-col items-center border-l border-brand-border/60">
            <span className="text-3xl sm:text-4xl font-display font-black text-white">50+</span>
            <span className="text-xs text-[#a0a0ad] font-mono uppercase mt-1">Successful Collabs</span>
          </div>
        </div>

        {/* Scroll cues */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => onScrollToSection('services')}
            className="flex flex-col items-center gap-2 text-xs font-mono text-[#a0a0ad] hover:text-brand-red transition-colors cursor-pointer"
          >
            <span>DISCOVER CREATIVE CAPABILITIES</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-brand-red" />
          </button>
        </div>
      </div>
    </section>
  );
}
