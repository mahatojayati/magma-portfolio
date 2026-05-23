import React, { useState } from 'react';
import { portfolioItems, PortfolioItem } from '../data';
import { Filter, Eye, Play, X, ExternalLink, Calendar, User, Tag, Film, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'graphic_design' | 'video_editing' | 'smm'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all' as const },
    { label: 'Video Edits', value: 'video_editing' as const },
    { label: 'Graphic Design', value: 'graphic_design' as const },
    { label: 'S.M.M.', value: 'smm' as const },
  ];

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section 
      id="portfolio" 
      className="py-24 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase">
              Curated Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mt-3 glow-red">
              Creative Archives
            </h2>
            <div className="w-16 h-1.5 bg-brand-red mt-4 rounded-full"></div>
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap gap-2 bg-brand-slate border border-brand-border/80 p-1.5 rounded-xl">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-display font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === filter.value
                    ? 'bg-brand-red text-white font-extrabold shadow-md shadow-brand-red/20 scale-[1.02]'
                    : 'text-[#a0a0ad] hover:text-white hover:bg-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-brand-card border border-brand-border/60 hover:border-brand-red/35 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,30,30,0.12)]"
            >
              {/* Media Thumbnail Frame */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-90"></div>
                
                {/* Play Badge overlay for Video editing */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-brand-red/90 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 glow-box-lg">
                    {item.category === 'video_editing' ? (
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    ) : (
                      <Eye className="w-6 h-6" />
                    )}
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur-md px-2.5 py-1 rounded-sm border border-brand-border text-[9px] font-mono font-extrabold tracking-widest text-brand-red uppercase">
                  {item.category.replace('_', ' ')}
                </div>
              </div>

              {/* Text Meta blocks */}
              <div className="p-6">
                <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest">
                  Client: {item.client}
                </span>
                <h3 className="text-lg sm:text-xl font-display font-black text-white group-hover:text-brand-red transition-colors mt-1.5 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a0a0ad] font-sans line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Hash pill segments */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] bg-brand-slate border border-brand-border/60 text-[#bbbbc6] px-2 py-1 rounded-sm font-mono font-medium"
                    >
                      #{tag.replace(' ', '')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emptiness Safeguards */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-brand-card/30 border border-brand-border/60 rounded-3xl">
            <span className="text-sm font-mono text-[#a0a0ad]">No items in this filter block match archives on system indexes. Check back soon!</span>
          </div>
        )}

      </div>

      {/* Showcase Details Modal Dialog */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="w-full max-w-4xl bg-brand-card border border-brand-border rounded-3xl overflow-hidden shadow-2xl glow-box relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Exit Action button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-brand-dark/80 backdrop-blur-md border border-brand-border flex items-center justify-center text-[#a0a0ad] hover:text-brand-red transition-all cursor-pointer hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media/Presentation Frame (Scrollable main content if screen too low) */}
            <div className="overflow-y-auto w-full">
              {/* If video exists and can play */}
              {selectedItem.category === 'video_editing' && selectedItem.videoUrl ? (
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src={selectedItem.videoUrl}
                    title={selectedItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0 absolute top-0 left-0"
                  ></iframe>
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden bg-brand-slate">
                  <img 
                    src={selectedItem.thumbnail} 
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-card via-transparent to-transparent"></div>
                </div>
              )}

              {/* Text Detailed Context Block */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-red/15 border border-brand-red/35 text-brand-red rounded-full text-[10px] font-mono font-bold tracking-wider uppercase">
                    {selectedItem.category.replace('_', ' ')}
                  </span>
                  
                  <span className="flex items-center gap-1.5 text-xs text-[#a0a0ad] font-mono bg-brand-slate border border-brand-border px-3 py-1 rounded-full">
                    <User className="w-3.5 h-3.5 text-brand-red" />
                    <span>Client: {selectedItem.client}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-white mb-4">
                  {selectedItem.title}
                </h3>

                <p className="text-[#cdd1dc] text-sm sm:text-base font-sans leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                {/* Additional contextual value blocks for simulation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-slate/85 border border-brand-border/80 rounded-2xl p-5 mb-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-display font-black text-white uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4 text-brand-red" />
                      <span>Sponsor Ambition</span>
                    </h4>
                    <p className="text-xs text-[#a0a0ad] leading-relaxed">
                      Optimize user attention retention levels beyond standard 15-second marks by overlaying hyper-synced visual alerts and keyframed audio beats.
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-display font-black text-white uppercase tracking-wider mb-2">
                      <Tag className="w-4 h-4 text-brand-red" />
                      <span>Deliverables Delivered</span>
                    </h4>
                    <ul className="text-xs text-[#a0a0ad] space-y-1">
                      <li>• High contrast visual edits</li>
                      <li>• Color grading master setup</li>
                      <li>• 1080p high quality master exports</li>
                    </ul>
                  </div>
                </div>

                {/* Footer action */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-brand-border/80 pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] font-mono bg-brand-slate text-brand-red uppercase font-semibold px-2 py-1 border border-brand-border/40 rounded-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-xs font-display font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-all glow-box cursor-pointer"
                  >
                    <span>Commission Similar Standard</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
