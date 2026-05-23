import React, { useState } from 'react';
import { videoEditingRates, smmPackages } from '../data';
import { IndianRupee, Calculator, Check, Copy, AlertCircle, Sparkles, Send } from 'lucide-react';

export default function PriceCalculator() {
  // State for interactive calculator multipliers
  const [selectedVideoService, setSelectedVideoService] = useState<string>('new_video_edit');
  const [videoCount, setVideoCount] = useState<number>(1);
  const [extraRevisions, setExtraRevisions] = useState<number>(0);
  const [resizeRequired, setResizeRequired] = useState<boolean>(false);
  const [selectedSmmPack, setSelectedSmmPack] = useState<string>('none');
  const [customQuoteText, setCustomQuoteText] = useState<string>('');
  const [copyStatus, setCopyStatus] = useState<boolean>(false);

  // Calculation Logic
  const videoRate = videoEditingRates.find(r => r.id === selectedVideoService)?.price || 0;
  const videoBaseTotal = videoRate * videoCount;
  const revisionsCost = extraRevisions * 49;
  const resizeCost = resizeRequired ? 99 * videoCount : 0;
  
  let smmPrice = 0;
  if (selectedSmmPack === 'smm_1month') smmPrice = 5500;
  if (selectedSmmPack === 'smm_1year') smmPrice = 60000;
  if (selectedSmmPack === 'smm_1time') smmPrice = 800;

  const grandTotal = videoBaseTotal + revisionsCost + resizeCost + smmPrice;

  const handleGenerateQuote = () => {
    const videoLabel = videoEditingRates.find(r => r.id === selectedVideoService)?.title || '';
    const smmLabel = smmPackages.find(p => p.id === selectedSmmPack)?.title || 'No SMM selected';
    
    const text = `--- MAGMA CREATOR COLLABORATION ESTIMATE ---
Date: ${new Date().toLocaleDateString()}
Selected Video Service: ${videoLabel} (Qty: ${videoCount})
Base Video Cost: ${videoBaseTotal} Rs.
Extra Revisions: ${extraRevisions} (${revisionsCost} Rs.)
Resizing Video Adaptation: ${resizeRequired ? 'Yes' : 'No'} (${resizeCost} Rs.)
S.M.M Package selection: ${smmLabel} (${smmPrice} Rs.)
-------------------------------------------
ESTIMATED GRAND TOTAL: ${grandTotal} Rs. (INR Equivalent)

*Terms stipulate 50% advance (deposit: ${grandTotal * 0.5} Rs.). Balance upon absolute clearance.*
Author email inbox: roxcalvin000@gmail.com`;

    setCustomQuoteText(text);
    navigator.clipboard.writeText(text);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2800);
  };

  return (
    <section 
      id="pricing" 
      className="py-24 bg-brand-dark relative"
    >
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-brand-red/5 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mt-3 glow-red">
            Rate Cards & Interactive Quote
          </h2>
          <div className="w-16 h-1.5 bg-brand-red mx-auto mt-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-[#a0a0ad] font-sans mt-5">
            Configure, calculate, and compile a clear estimate specification immediately based on our official rates.
          </p>
        </div>

        {/* Pricing Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Complete Rate Cards display verbatim */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Rates Header */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6 border-b border-brand-border/60 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span>
                <h3 className="text-xl font-display font-black text-white uppercase tracking-wider">
                  Video Editing Rate Sheet
                </h3>
              </div>

              {/* List items */}
              <div className="space-y-4">
                {videoEditingRates.map((rate) => (
                  <div 
                    key={rate.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-brand-slate border border-brand-border/80 hover:border-brand-red/30 rounded-xl transition-all"
                  >
                    <div>
                      <h4 className="text-sm sm:text-base font-display font-bold text-white tracking-wide">
                        {rate.title}
                      </h4>
                      <p className="text-xs text-[#a0a0ad] font-sans mt-1">
                        {rate.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right bg-brand-dark px-3 py-1.5 rounded-sm border border-brand-border/80">
                      <span className="text-brand-red font-mono font-extrabold text-sm sm:text-base uppercase">
                        {rate.price} Rs.
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* S.M.M Packages Catalog */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6 border-b border-brand-border/60 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse"></span>
                <h3 className="text-xl font-display font-black text-white uppercase tracking-wider">
                  Social Media Marketing Packages
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {smmPackages.map((pack) => (
                  <div 
                    key={pack.id}
                    className="p-5 bg-brand-slate border border-brand-border/80 hover:border-brand-red/35 rounded-xl flex flex-col justify-between transition-all"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">
                        {pack.period}
                      </span>
                      <h4 className="text-sm sm:text-base font-display font-black text-white uppercase mt-1 mb-2">
                        {pack.title}
                      </h4>
                      <p className="text-xl font-display font-extrabold text-white mt-1.5 mb-4">
                        {pack.price}
                      </p>
                      
                      <div className="h-px bg-brand-border/40 mb-4"></div>
                      
                      <ul className="text-[10px] sm:text-xs text-[#a0a0ad] space-y-2">
                        {pack.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1">
                            <span className="text-brand-red mr-1">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Dynamic Estimator Module */}
          <div className="lg:col-span-5">
            <div className="bg-brand-card border border-brand-red/25 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-brand-red/40 transition-all glow-box">
              
              <div className="flex items-center gap-2.5 mb-6 border-b border-brand-border/50 pb-3">
                <Calculator className="w-5 h-5 text-brand-red" />
                <h3 className="text-lg sm:text-xl font-display font-black text-white uppercase tracking-wide">
                  Live Sponsor Calculator
                </h3>
              </div>

              {/* Calculator Content Selection Form */}
              <div className="space-y-5">
                
                {/* 1. Base Video Rate option */}
                <div>
                  <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
                    1. Video Editing Style
                  </label>
                  <select
                    value={selectedVideoService}
                    onChange={(e) => setSelectedVideoService(e.target.value)}
                    className="w-full bg-brand-slate border border-brand-border rounded-lg p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-red cursor-pointer"
                  >
                    {videoEditingRates.filter(r => r.id !== 'extra_revision').map((rate) => (
                      <option key={rate.id} value={rate.id}>
                        {rate.title} ({rate.price} Rs.)
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Count limits */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
                      2. Quantity (Videos)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={videoCount}
                      onChange={(e) => setVideoCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-brand-slate border border-brand-border rounded-lg p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
                      3. Extra Revisions (+49 Rs)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={extraRevisions}
                      onChange={(e) => setExtraRevisions(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-brand-slate border border-brand-border rounded-lg p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                {/* 3. Multi-platform sizing checkbox */}
                <div className="flex items-center gap-3 bg-brand-slate p-3 rounded-lg border border-brand-border/60">
                  <input
                    type="checkbox"
                    id="chk-resize"
                    checked={resizeRequired}
                    onChange={(e) => setResizeRequired(e.target.checked)}
                    className="w-4.5 h-4.5 text-brand-red focus:ring-0 focus:ring-offset-0 accent-brand-red cursor-pointer"
                  />
                  <label htmlFor="chk-resize" className="text-xs text-white font-sans cursor-pointer select-none">
                    Multi Platform Formats Resizing (+99 Rs/video adaptation)
                  </label>
                </div>

                {/* 4. SMM package options */}
                <div>
                  <label className="block text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
                    4. Social Media Marketing (Options)
                  </label>
                  <select
                    value={selectedSmmPack}
                    onChange={(e) => setSelectedSmmPack(e.target.value)}
                    className="w-full bg-brand-slate border border-brand-border rounded-lg p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-red cursor-pointer"
                  >
                    <option value="none">No Social Marketing Integration</option>
                    {smmPackages.map((pack) => (
                      <option key={pack.id} value={pack.id}>
                        {pack.title} ({pack.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 5. Live Math Total visual */}
                <div className="bg-brand-slate border border-brand-border p-5 rounded-xl text-center">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#a0a0ad]">Estimated Pricing Configuration</span>
                  <div className="flex items-center justify-center gap-1.5 mt-2 text-brand-red glow-red">
                    <span className="text-2xl sm:text-4xl font-display font-black uppercase tracking-tight">
                      {grandTotal.toLocaleString()} Rs.
                    </span>
                  </div>
                  <p className="text-[10px] text-[#a0a0ad] font-mono mt-1 uppercase">
                    Advance Payment Deposit (50%): {(grandTotal * 0.5).toLocaleString()} Rs.
                  </p>
                </div>

                {/* Generate Quote Trigger */}
                <button
                  onClick={handleGenerateQuote}
                  className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white p-3.5 rounded-lg text-xs sm:text-sm font-display font-bold uppercase tracking-widest transition-all duration-200 outline-none hover:scale-[1.02] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Compile Outline & Copy</span>
                </button>

                {/* Copy feedback text */}
                {copyStatus && (
                  <div className="p-3 bg-brand-slate border border-brand-red/35 rounded-lg flex items-center gap-2 text-[10px] font-mono text-brand-red">
                    <Check className="w-4 h-4" />
                    <span>Calculated specification copied. Launch active mail and paste to roxcalvin000@gmail.com!</span>
                  </div>
                )}

                {/* Direct Mail connector */}
                <a
                  href={`mailto:roxcalvin000@gmail.com?subject=Magma Creator Commission Project Proposal&body=Hi Magma,%0D%0A%0D%0AI compiled standard calculations on their portal:%0D%0AEstimate config Grand Total: ${grandTotal} Rs.%0D%0ASelected Video Edit: ${videoEditingRates.find(r => r.id === selectedVideoService)?.title}%0D%0ASelected SMM Strategy: ${smmPackages.find(p => p.id === selectedSmmPack)?.title || 'None'}%0D%0A%0D%0APlease let's collaborate!`}
                  className="w-full flex items-center justify-center gap-2 bg-brand-slate hover:bg-[#1f1f26] text-white p-3.5 rounded-lg text-xs font-display font-semibold border border-brand-border hover:border-brand-red/30 transition-all text-center uppercase tracking-wider"
                >
                  <Send className="w-4 h-4 text-brand-red" />
                  <span>Send Proposal Direct</span>
                </a>

                {/* Warning note */}
                <div className="flex items-start gap-2 text-[11px] text-[#a0a0ad] font-sans leading-relaxed mt-4">
                  <AlertCircle className="w-4.5 h-4.5 text-brand-red shrink-0 mt-0.5" />
                  <p>
                    Revisions limits: Videos our design changes include up to 3 revision loops. There will be no core framework structure alterations inside preset theme styles.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
