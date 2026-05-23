import React from 'react';
import { services, softwareTools, SoftwareTool } from '../data';
import { CheckCircle2, ChevronRight, Video, Scissors, Figma, LayoutGrid, Sparkles, Activity, Clapperboard, HelpCircle } from 'lucide-react';

interface ServicesProps {
  onScrollToSection: (sectionId: string) => void;
}

// Map tool icon names in string form to physical Lucide icons dynamically
const renderToolIcon = (iconName: string, className: string = "w-5 h-5") => {
  switch (iconName) {
    case 'Clapperboard':
      return <Clapperboard className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Video':
      return <Video className={className} />;
    case 'Scissors':
      return <Scissors className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'Figma':
      return <Figma className={className} />;
    case 'LayoutGrid':
      return <LayoutGrid className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

export default function Services({ onScrollToSection }: ServicesProps) {
  return (
    <section 
      id="services" 
      className="py-24 bg-brand-slate relative"
    >
      {/* Dynamic graphic accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase">
            Creative Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mt-3 glow-red">
            Professional Services
          </h2>
          <div className="w-16 h-1.5 bg-brand-red mx-auto mt-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-[#a0a0ad] font-sans mt-5">
            Engineered using elite industry tools to ensure your message captures attention, holds engagement, and drives commercial loyalty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              className="bg-brand-card border border-brand-border/80 hover:border-brand-red/40 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[-5px_5px_20px_rgba(255,30,30,0.1)] group flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-card via-brand-card/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-md px-3 py-1 rounded-sm border border-brand-border text-[10px] font-mono font-bold tracking-widest text-brand-red uppercase">
                  Service {`0${idx + 1}`}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white group-hover:text-brand-red transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#a0a0ad] font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features Bulletpoints */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-white font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onScrollToSection('portfolio')}
                  className="w-full flex items-center justify-between bg-brand-dark hover:bg-brand-red hover:text-white border border-brand-border hover:border-brand-red p-3 rounded-lg text-xs font-display font-bold uppercase tracking-wider text-[#a0a0ad] transition-all duration-300 group/btn cursor-pointer"
                >
                  <span>Verify Work Showcase</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Software We Use Panel */}
        <div className="border border-brand-border bg-brand-card/40 rounded-3xl p-8 backdrop-blur-md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-lg sm:text-2xl font-display font-bold uppercase tracking-wide text-white">
              Software Toolstack We Use
            </h3>
            <p className="text-xs sm:text-sm text-[#a0a0ad] font-sans mt-2">
              Industry-standard, professional suites deployed to optimize latency, export quality, and render accuracy.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {softwareTools.map((tool) => (
              <div 
                key={tool.name}
                className={`p-4 rounded-xl border border-brand-border flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 cursor-crosshair group ${tool.bgColor}`}
              >
                {/* Visual Icon Box */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${tool.textColor} ${tool.glowColor}`}>
                  {renderToolIcon(tool.iconName, "w-6 h-6")}
                </div>
                
                <span className="text-xs font-display font-bold text-white tracking-wide">
                  {tool.name}
                </span>
                <span className="text-[9px] font-mono text-[#a0a0ad] uppercase tracking-widest mt-1">
                  {tool.category === 'video' ? 'VideoSuite' : 'DesignSuite'}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
