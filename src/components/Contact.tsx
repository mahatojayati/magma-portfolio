import React, { useState, useEffect } from 'react';
import { Mail, Phone, Flame, Check, AlertCircle, Trash2, Send, Youtube, MessageSquare } from 'lucide-react';
import { termsAndConditions } from '../data';

interface InboxItem {
  id: string;
  name: string;
  brand: string;
  email: string;
  desc: string;
  budget: string;
  timestamp: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    desc: '',
    budget: '1500',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [inbox, setInbox] = useState<InboxItem[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  // Load existing client-side message items from localStorage
  useEffect(() => {
    const data = localStorage.getItem('magma_inbox');
    if (data) {
      try {
        setInbox(JSON.parse(data));
      } catch (e) {
        console.error('Error reading index data', e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.desc) {
      alert('Please fill in required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newItem: InboxItem = {
        id: Math.random().toString(36).substring(2, 9),
        name: formData.name,
        brand: formData.brand || 'Independent Creator',
        email: formData.email,
        desc: formData.desc,
        budget: formData.budget,
        timestamp: new Date().toLocaleString(),
      };

      const revisedInbox = [newItem, ...inbox];
      setInbox(revisedInbox);
      localStorage.setItem('magma_inbox', JSON.stringify(revisedInbox));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        brand: '',
        email: '',
        desc: '',
        budget: '1500',
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const handleDeleteItem = (id: string) => {
    const revised = inbox.filter(item => item.id !== id);
    setInbox(revised);
    localStorage.setItem('magma_inbox', JSON.stringify(revised));
  };

  const handleClearAll = () => {
    setInbox([]);
    localStorage.removeItem('magma_inbox');
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-brand-dark relative"
    >
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-brand-red/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Layout Flyer Design */}
        <div className="bg-brand-card border border-brand-border/90 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-12 mb-16 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT SIDE: Interactive Contact form */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase">
                Collaboration Portal
              </span>
              
              <h3 className="text-3xl sm:text-5xl font-display font-black uppercase text-white mt-2 mb-3">
                Connect with us
              </h3>
              
              <p className="text-sm text-[#a0a0ad] font-sans mb-8">
                Let's get started, Let's grow together... Submitting details automatically outputs an outline to our secure offline client-side storage log below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#a0a0ad] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Calvin Rox"
                      className="w-full bg-brand-slate border border-brand-border rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#a0a0ad] uppercase tracking-wider mb-2">
                      Brand / Organization
                    </label>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder="e.g. Neon Roster LLC"
                      className="w-full bg-brand-slate border border-brand-border rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#a0a0ad] uppercase tracking-wider mb-2">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. contact@neonroster.com"
                      className="w-full bg-brand-slate border border-brand-border rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#a0a0ad] uppercase tracking-wider mb-2">
                      Project Target Budget (Rs.)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-brand-slate border border-brand-border rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-red cursor-pointer"
                    >
                      <option value="800">Basic Editing (800 Rs.)</option>
                      <option value="1499">New Video Editing (1499 Rs.)</option>
                      <option value="5500">1 Month S.M.M (5,500 Rs.)</option>
                      <option value="60000">1 Year S.M.M (60,000 Rs.)</option>
                      <option value="custom">Enterprise / Combined Rate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a0a0ad] uppercase tracking-wider mb-2">
                    Outline Project Vision & Deliverables Requirement *
                  </label>
                  <textarea
                    name="desc"
                    required
                    rows={4}
                    value={formData.desc}
                    onChange={handleInputChange}
                    placeholder="Tell us about your theme styles, expected sync tempos, duration objectives, and if you have files ready to go..."
                    className="w-full bg-brand-slate border border-brand-border rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all resize-none"
                  ></textarea>
                </div>

                {isSubmitting ? (
                  <div className="inline-flex items-center gap-2 bg-brand-slate border border-brand-border text-[#a0a0ad] px-6 py-3.5 rounded-lg text-xs font-display font-black uppercase tracking-widest">
                    <span className="w-4.5 h-4.5 border-2 border-brand-red border-t-transparent rounded-full animate-spin"></span>
                    <span>Broadcasting Submission...</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg text-xs font-display font-black uppercase tracking-widest transition-all hover:scale-[1.02] cursor-pointer glow-box"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Proposal Now</span>
                  </button>
                )}

                {submitSuccess && (
                  <div className="p-4 bg-brand-slate border border-brand-red/30 rounded-xl flex items-start gap-2 text-xs font-mono text-white">
                    <Check className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-brand-red uppercase">Transmission Completed Successfully!</p>
                      <p className="text-[#a0a0ad] mt-1">Thank you. Your proposal was logged securely inside the local simulator logs. We will reach back to your provided email index shortly!</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* RIGHT SIDE: Animated brand badge & Contacts verbatim from flyer */}
            <div className="lg:col-span-5 bg-brand-slate border border-brand-border/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between min-h-[400px]">
              
              {/* Custom branded card header with skull logo image placeholder emulation */}
              <div className="flex items-center gap-4 border-b border-brand-border/60 pb-6 mb-6">
                
                {/* Simulated Skull emblem with flaming red bg */}
                <div className="w-16 h-16 rounded-xl bg-brand-dark border-2 border-brand-red/40 flex items-center justify-center relative overflow-hidden group">
                  <Flame className="w-8 h-8 text-brand-red animate-pulse" />
                  <div className="absolute inset-x-0 bottom-0 bg-brand-red/10 text-center text-[8px] font-mono py-0.5 tracking-tighter text-white">
                    MAGMA
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-display font-black tracking-wide text-white uppercase">
                    MAGMA EDITOR
                  </h4>
                  <p className="text-[10px] font-mono text-brand-red tracking-widest uppercase mt-0.5">
                    Creative Digital Studio
                  </p>
                </div>
              </div>

              {/* Contact list items */}
              <div className="space-y-6 flex-1">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-brand-red uppercase tracking-wider mb-1.5">
                    <Phone className="w-4.5 h-4.5" />
                    <span>Live Phone:</span>
                  </div>
                  <p className="text-sm font-sans font-medium text-white px-3 py-1.5 bg-brand-dark border border-brand-border/60 rounded">
                    Coming soon
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-brand-red uppercase tracking-wider mb-1.5">
                    <Mail className="w-4.5 h-4.5" />
                    <span>Official Email:</span>
                  </div>
                  <a 
                    href="mailto:roxcalvin000@gmail.com"
                    className="block text-sm font-sans font-medium text-white hover:text-brand-red px-3 py-1.5 bg-brand-dark border border-brand-border/60 hover:border-brand-red/30 rounded transition-all"
                  >
                    roxcalvin000@gmail.com
                  </a>
                </div>

                {/* Social icons verbatim */}
                <div>
                  <div className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider mb-3">
                    Broadcasting channels:
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-brand-dark border border-brand-border hover:border-brand-red text-[#a0a0ad] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                      title="YouTube Profile"
                    >
                      <Youtube className="w-5 h-5 text-brand-red" />
                    </a>
                    <a 
                      href="https://telegram.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-brand-dark border border-brand-border hover:border-brand-red text-[#a0a0ad] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                      title="Telegram Group"
                    >
                      <Send className="w-4.5 h-4.5" />
                    </a>
                    <a 
                      href="mailto:roxcalvin000@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-brand-dark border border-brand-border hover:border-brand-red text-[#a0a0ad] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                      title="Mail inbox routing"
                    >
                      <Mail className="w-4.5 h-4.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Live inbox dashboard trigger buttons */}
              <div className="border-t border-brand-border/60 pt-6 mt-6">
                <button
                  type="button"
                  onClick={() => setShowInbox(!showInbox)}
                  className="w-full text-left flex items-center justify-between text-xs font-mono text-[#a0a0ad] hover:text-brand-red cursor-pointer transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4" />
                    <span>Simulation Logs Inbox ({inbox.length})</span>
                  </span>
                  <span>{showInbox ? 'Hide [x]' : 'View [+]'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* MOCK CLIENT-SIDE INBOX INTERACTIVE PANEL */}
        {showInbox && (
          <div 
            id="simulation-inbox-panel"
            className="bg-brand-card border border-brand-border/80 rounded-2xl p-6 sm:p-8 mb-16 relative animate-fade-in"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border/60 pb-4 mb-6">
              <div>
                <h4 className="text-base sm:text-lg font-display font-black text-white uppercase tracking-wide">
                  Simulation Local Inbox
                </h4>
                <p className="text-xs text-[#a0a0ad] font-sans mt-0.5">
                  Secure local sandbox reflecting simulated form requests in real-time. (Values retained in localStorage).
                </p>
              </div>

              {inbox.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="flex items-center gap-1 bg-[#1a0f12] text-red-400 hover:text-white hover:bg-red-900 border border-brand-border px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear simulation DB</span>
                </button>
              )}
            </div>

            <div className="space-y-4">
              {inbox.map((msg) => (
                <div 
                  key={msg.id}
                  className="p-5 bg-brand-slate border border-brand-border rounded-xl flex flex-col sm:flex-row justify-between items-start gap-4 hover:border-brand-red/20 transition-all"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-white font-bold text-sm sm:text-base">{msg.name}</span>
                      <span className="text-[10px] text-brand-red font-mono border border-brand-border px-1.5 py-0.5 rounded uppercase">
                        {msg.brand}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-[#a0a0ad]">Email: <span className="text-white">{msg.email}</span></p>
                    <p className="text-xs sm:text-sm text-[#bbbbc6] font-sans leading-relaxed italic bg-brand-dark/40 p-3 rounded-lg border border-brand-border/65">
                      "{msg.desc}"
                    </p>

                    <div className="flex items-center gap-4 text-[10px] font-mono text-[#a0a0ad] pt-1">
                      <span>Budget selection: <span className="text-white font-bold">{msg.budget} Rs.</span></span>
                      <span>Target index time: <span className="text-brand-red">{msg.timestamp}</span></span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteItem(msg.id)}
                    className="p-2 border border-brand-border text-[#a0a0ad] hover:text-brand-red hover:bg-brand-border/40 rounded transition-all cursor-pointer"
                    title="Delete message from local storage"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {inbox.length === 0 && (
                <div className="text-center py-12 bg-brand-slate rounded-xl border border-dotted border-brand-border">
                  <span className="text-xs font-mono text-[#a0a0ad]">Simulator logs inbox empty. Fill out the contact form above to test direct routing!</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* BOTTOM TERMS & CONDITIONS LAYOUT */}
        <div id="terms" className="border-t border-brand-border/80 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-lg sm:text-2xl font-display font-black uppercase text-white tracking-wide">
              Official Terms & Conditions
            </h3>
            <p className="text-xs sm:text-sm text-[#a0a0ad] font-sans mt-2">
              Please inspect our active rules governing revisions, safety parameters, advance milestones, and groups access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {termsAndConditions.map((itm) => (
              <div 
                key={itm.id}
                className="bg-brand-card border border-brand-border/80 hover:border-brand-red/30 p-6 rounded-2xl flex items-start gap-3.5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-slate border border-[#232328] flex items-center justify-center text-brand-red shrink-0">
                  <AlertCircle className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-2">
                    {itm.title}
                  </h4>
                  <p className="text-xs text-[#a0a0ad] leading-relaxed">
                    {itm.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
