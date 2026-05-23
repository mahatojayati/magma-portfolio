import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Clock, Cpu, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  openCalculator: () => void;
}

export default function Header({ onScrollToSection, openCalculator }: HeaderProps) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [timeMode, setTimeMode] = useState<'UTC' | 'LOCAL'>('UTC');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatTime = (date: Date) => {
    if (timeMode === 'UTC') {
      return date.toUTCString().replace('GMT', 'UTC');
    }
    return date.toLocaleTimeString() + ' (' + Intl.DateTimeFormat().resolvedOptions().timeZone + ')';
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Works', id: 'portfolio' },
    { name: 'Brand Case Studies', id: 'case-studies' },
    { name: 'Rate Cards', id: 'pricing' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Connect', id: 'contact' },
  ];

  return (
    <header 
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-border/60 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => onScrollToSection('top')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Custom vector logo emulation (skull / stars symbol) */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-brand-red rounded-lg overflow-hidden border border-brand-red/30 transition-transform duration-300 group-hover:scale-115">
              <span className="text-white font-extrabold text-xl font-display uppercase tracking-widest leading-none">M</span>
              <div className="absolute inset-0 bg-linear-to-tr from-brand-red-dark via-transparent to-transparent opacity-60"></div>
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-lg border border-white/20"></div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-display font-extrabold uppercase tracking-widest text-lg group-hover:text-brand-red transition-colors duration-200">
                  MAGMA
                </span>
                <span className="text-[#a0a0ad] text-xs px-1.5 py-0.5 rounded-sm bg-brand-border font-mono border border-brand-border/80">
                  EDITOR
                </span>
              </div>
              <span className="text-[10px] text-brand-red font-mono uppercase tracking-widest leading-none">
                DYNAMIC CREATOR
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollToSection(link.id)}
                className="text-[#a0a0ad] hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"></span>
              </button>
            ))}
          </nav>

          {/* Interactive Clock / Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="clock-widget"
              onClick={() => setTimeMode(prev => prev === 'UTC' ? 'LOCAL' : 'UTC')}
              className="flex items-center gap-2 bg-brand-slate border border-brand-border hover:border-brand-red/40 px-3 py-1.5 rounded-full text-xs font-mono text-[#a0a0ad] hover:text-white transition-all duration-300 cursor-pointer"
              title="Click to toggle timezone format"
            >
              <Clock className="w-3.5 h-3.5 text-brand-red animate-pulse" />
              <span>{formatTime(currentTime)}</span>
            </button>

            <button
              onClick={openCalculator}
              className="flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-dark text-white px-4 py-1.5 rounded-md text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 glow-box outline-none cursor-pointer"
            >
              <span>Instant Estimate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="timezone-toggle-mobile"
              onClick={() => setTimeMode(prev => prev === 'UTC' ? 'LOCAL' : 'UTC')}
              className="p-1.5 rounded-md text-[#a0a0ad] border border-brand-border hover:text-white mr-1"
              title="Toggle Timezone"
            >
              <Clock className="w-4 h-4 text-brand-red" />
            </button>
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[#a0a0ad] hover:text-white hover:bg-brand-border transition-colors outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="lg:hidden bg-brand-slate border-b border-brand-border/95 transition-all duration-300 p-4 absolute top-full left-0 right-0 shadow-2xl glow-box"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onScrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-[#cdd1dc] hover:text-white hover:bg-brand-border/40 px-4 py-3 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="h-px bg-brand-border/80 my-2"></div>
            <div className="flex flex-col gap-3 p-2">
              <div className="flex items-center justify-between text-xs text-[#a0a0ad] font-mono">
                <span>System Clock:</span>
                <span className="text-brand-red">{formatTime(currentTime)}</span>
              </div>
              <button
                onClick={() => {
                  openCalculator();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-brand-red hover:bg-brand-red-dark text-white font-display font-bold uppercase tracking-wider text-sm rounded-md transition-all text-center"
              >
                Instant Estimate Calculator
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
