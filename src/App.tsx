import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import PriceCalculator from './components/PriceCalculator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { ArrowUp, Heart } from 'lucide-react';

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenCalculator = () => {
    handleScrollToSection('pricing');
    // Set focus or flash pricing briefly if required
  };

  return (
    <div className="bg-brand-dark min-h-screen relative font-sans text-white overflow-hidden Selection:bg-brand-red Selection:text-white">
      
      {/* Dynamic Glow Overlay backdrops */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/10 left-1/10 w-[500px] h-[500px] rounded-full bg-brand-red/5 blur-[120px]" />
        <div className="absolute bottom-1/10 right-1/10 w-[500px] h-[500px] rounded-full bg-brand-red/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Header */}
        <Header 
          onScrollToSection={handleScrollToSection} 
          openCalculator={handleOpenCalculator}
        />

        {/* Core Layout Screens */}
        <main className="flex-grow">
          
          {/* 1. Hero Presentational Landing block */}
          <Hero 
            onScrollToSection={handleScrollToSection}
            openCalculator={handleOpenCalculator}
          />

          {/* 2. Structured Services & Tool stacks */}
          <Services onScrollToSection={handleScrollToSection} />

          {/* 3. Archives/Portfolio Grid for filterable layouts */}
          <Portfolio />

          {/* 4. Brand Specific Detailed Case Studies (highly requested) */}
          <CaseStudies />

          {/* 5. Custom Live Pricing & Multiplier calculator cards */}
          <PriceCalculator />

          {/* 6. Customer authentic Testimonials feedback carousel */}
          <Testimonials />

          {/* 7. Footer flyer interactive Connect panels */}
          <Contact />

        </main>

        {/* Human Standard Lite Footer bar */}
        <footer className="bg-brand-dark border-t border-brand-border/60 py-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Back to top quick shortcut */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleScrollToSection('top')}
                  className="p-2.5 rounded-lg bg-brand-slate hover:bg-brand-red text-[#a0a0ad] hover:text-white border border-brand-border hover:border-brand-red/40 transition-all cursor-pointer group"
                  title="Scroll back to top"
                >
                  <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                </button>
                <span className="text-xs font-mono text-[#a0a0ad] uppercase tracking-wider">
                  Magma Editor Custom Space • Copyright 2026
                </span>
              </div>

              {/* Creators design credits */}
              <div className="flex items-center gap-1.5 text-xs text-[#a0a0ad] font-mono uppercase">
                <span>Hand-coded with</span>
                <Heart className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
                <span>for the Creative Syndicate</span>
              </div>

            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
