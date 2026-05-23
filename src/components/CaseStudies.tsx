import React, { useState } from 'react';
import { caseStudies, CaseStudy } from '../data';
import { Award, Target, CheckCircle, TrendingUp, Sparkles, ChevronLeft, ChevronRight, BarChart3 } from 'lucide-react';

export default function CaseStudies() {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const currentCase = caseStudies[activeTabIdx];

  const nextCase = () => {
    setActiveTabIdx((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveTabIdx((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section 
      id="case-studies" 
      className="py-24 bg-brand-slate relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase">
            Proven Outcomes
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mt-3 glow-red">
            Brand Case Studies
          </h2>
          <div className="w-16 h-1.5 bg-brand-red mx-auto mt-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-[#a0a0ad] font-sans mt-5">
            Real strategic insights, creative deliverables, and hard, verified performance metrics return details on major sponsor investments.
          </p>
        </div>

        {/* Tab Selector Links */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveTabIdx(idx)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTabIdx === idx
                  ? 'bg-brand-red text-white border border-brand-red/40 shadow-lg shadow-brand-red/15'
                  : 'bg-brand-card text-[#a0a0ad] hover:text-white border border-brand-border/80'
              }`}
            >
              Case {idx + 1}: {study.client.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Study Display Board */}
        <div className="bg-brand-card border border-brand-border rounded-3xl overflow-hidden shadow-2xl transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Frame & Results Panel */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[500px]">
              <img 
                src={currentCase.imageUrl} 
                alt={currentCase.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/25 to-brand-slate/40"></div>
              
              {/* Overlaid Results Display Block */}
              <div className="absolute inset-x-6 bottom-6 bg-brand-slate/90 backdrop-blur-md border border-brand-border/80 p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-brand-red text-xs font-mono font-bold uppercase tracking-wider mb-4 border-b border-brand-border/60 pb-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Performance Benchmarks Obtained:</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  {currentCase.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex flex-col items-center">
                      <span className="text-lg sm:text-2xl font-display font-black text-brand-red glow-red leading-none">
                        {res.metric}
                      </span>
                      <span className="text-[9px] text-white/80 uppercase tracking-wide leading-tight mt-1">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Quick arrows */}
              <div className="absolute top-4 left-4 flex gap-1.5">
                <button 
                  onClick={prevCase}
                  className="w-10 h-10 rounded-lg bg-brand-dark/80 backdrop-blur-md border border-brand-border text-white hover:text-brand-red hover:border-brand-red/50 flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextCase}
                  className="w-10 h-10 rounded-lg bg-brand-dark/80 backdrop-blur-md border border-brand-border text-white hover:text-brand-red hover:border-brand-red/50 flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Structured Content Details panel */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-extrabold text-brand-red uppercase tracking-widest bg-brand-slate border border-brand-border px-3 py-1.5 rounded-sm">
                  {currentCase.category}
                </span>

                <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase mt-4 mb-2">
                  {currentCase.title}
                </h3>
                <p className="text-brand-red font-mono text-xs sm:text-sm font-semibold mb-6">
                  "{currentCase.tagline}"
                </p>

                <div className="h-px bg-brand-border/60 mb-6"></div>

                {/* Challenge & Solution Side by Side or stacked */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-display font-black text-white uppercase tracking-wider mb-2">
                      <Target className="w-4 h-4 text-brand-red" />
                      <span>Sponsor Ambition & Challenge:</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#a0a0ad] leading-relaxed">
                      {currentCase.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-display font-black text-white uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4 text-brand-red" />
                      <span>Strategy & Deliverable Execution:</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#a0a0ad] leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>
                </div>

                {/* Scope deliverables */}
                <div className="mb-8">
                  <h4 className="flex items-center gap-2 text-xs font-display font-black text-white uppercase tracking-wider mb-3">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Deliverable Outlines Issued:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentCase.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 bg-brand-slate border border-brand-border/50 p-2 rounded-lg text-xs text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Commission CTA button */}
              <div className="border-t border-brand-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-[10px] font-mono text-[#a0a0ad] uppercase tracking-wider">Interested in similar metrics?</p>
                  <p className="text-xs text-white font-semibold">Book a strategy blueprint with Magma.</p>
                </div>
                
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white text-xs font-display font-extrabold uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all glow-box cursor-pointer"
                >
                  Book My Strategy Call
                </button>
              </div>

            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}
