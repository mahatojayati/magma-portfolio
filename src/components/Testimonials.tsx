import React from 'react';
import { testimonials } from '../data';
import { Quote, MessageSquare, Star, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-brand-slate relative overflow-hidden"
    >
      {/* Background circles emulating the red bokeh circles in the user's attachment */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/10 w-32 h-32 rounded-full bg-brand-red/10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/12 w-48 h-48 rounded-full bg-brand-red/15 blur-2xl"></div>
        <div className="absolute top-1/2 left-2/3 w-20 h-20 rounded-full bg-brand-red/10 blur-xl"></div>
        <div className="absolute bottom-1/10 left-1/5 w-40 h-40 rounded-full bg-brand-red/10 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase">
            Sponsor Valuations
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mt-3 glow-red">
            Reviews from other customers
          </h2>
          <div className="w-16 h-1.5 bg-brand-red mx-auto mt-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-[#a0a0ad] font-sans mt-5">
            Client feedback obtained from independent animators, team leads, and creators worldwide.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div 
              key={test.name}
              className="bg-brand-card/90 backdrop-blur-md border border-brand-border hover:border-brand-red/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group"
            >
              <div>
                {/* 5-Star Indicator lines */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star 
                      key={sIdx} 
                      className="w-4 h-4 text-brand-red fill-brand-red" 
                    />
                  ))}
                </div>

                {/* Actual quote quote citation verbatim */}
                <span className="text-brand-red/20 inline-block mb-3">
                  <Quote className="w-8 h-8 fill-brand-red/10" />
                </span>

                <p className="text-sm sm:text-base text-white/95 font-sans leading-relaxed italic mb-8">
                  "{test.quote}"
                </p>
              </div>

              {/* Author and User details footer */}
              <div className="flex items-center gap-4 border-t border-brand-border/60 pt-5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-border/80 group-hover:border-brand-red transition-all shrink-0">
                  <img 
                    src={test.avatarUrl} 
                    alt={test.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-display font-black text-white group-hover:text-brand-red transition-all">
                    {test.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#a0a0ad] font-mono uppercase mt-0.5">
                    {test.company}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
