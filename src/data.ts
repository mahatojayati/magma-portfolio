export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface SoftwareTool {
  name: string;
  category: 'video' | 'design' | 'smm';
  iconName: string; // Used to mount corresponding Lucide React Icons
  bgColor: string;
  textColor: string;
  glowColor: string;
}

export interface VideoEditingPrice {
  id: string;
  title: string;
  description: string;
  price: number;
}

export interface SmmPackage {
  id: string;
  title: string;
  price: string;
  period: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  tagline: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  deliverables: string[];
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'graphic_design' | 'video_editing' | 'smm';
  client: string;
  thumbnail: string;
  videoUrl?: string; // Standard youtube embeds or placeholders
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'video_editing',
    title: 'Video Editing',
    description: 'Specializing in AMVs (Anime Music Videos), high-excitation cash cow clips, seamless dynamic transitions, cinematic pacing, and perfect audio sync.',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1200&auto=format&fit=crop',
    features: ['AMV & Gaming Edits', 'TikTok & Reels Formatting', 'Cinematic Color Grading', 'Advanced Sound Design', 'Subtitling & Motion Graphics']
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    description: 'Grow your digital footprint and build active community loyalty. Strategy, scheduling, curation, and target growth metrics for creators and brands.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
    features: ['Growth Audits', 'Viral Hooks Formulation', 'Consistency Calendars', 'Analytics Tracking', 'Audience Engagement']
  },
  {
    id: 'logo_design',
    title: 'Logo & Graphic Designing',
    description: 'Creating recognizable vector logos, thumb-stopping gaming banners, aesthetic brand packages, and high-impact digital promotional graphics.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    features: ['High-Fidelity Vector Logos', 'Brand Identity Packages', 'Gaming & SMM Thumbnails', 'Social Header Graphics', 'Merchandise Graphic Sheets']
  }
];

export const softwareTools: SoftwareTool[] = [
  {
    name: 'Adobe Premiere Pro',
    category: 'video',
    iconName: 'Clapperboard',
    bgColor: 'bg-[#140a26]',
    textColor: 'text-[#9c7eff]',
    glowColor: 'shadow-[0_0_15px_rgba(156,126,255,0.4)]'
  },
  {
    name: 'Adobe After Effects',
    category: 'video',
    iconName: 'Sparkles',
    bgColor: 'bg-[#0f1126]',
    textColor: 'text-[#4d8eff]',
    glowColor: 'shadow-[0_0_15px_rgba(77,142,255,0.4)]'
  },
  {
    name: 'Wondershare Filmora',
    category: 'video',
    iconName: 'Video',
    bgColor: 'bg-[#0e241c]',
    textColor: 'text-[#00ffcc]',
    glowColor: 'shadow-[0_0_15px_rgba(0,255,204,0.4)]'
  },
  {
    name: 'CapCut',
    category: 'video',
    iconName: 'Scissors',
    bgColor: 'bg-[#121214]',
    textColor: 'text-[#ffffff]',
    glowColor: 'shadow-[0_0_15px_rgba(255,255,255,0.2)]'
  },
  {
    name: 'Alight Motion',
    category: 'video',
    iconName: 'Activity',
    bgColor: 'bg-[#0a202c]',
    textColor: 'text-[#12ff88]',
    glowColor: 'shadow-[0_0_15px_rgba(18,255,136,0.4)]'
  },
  {
    name: 'Figma',
    category: 'design',
    iconName: 'Figma',
    bgColor: 'bg-[#29170f]',
    textColor: 'text-[#ff7262]',
    glowColor: 'shadow-[0_0_15px_rgba(255,114,98,0.4)]'
  },
  {
    name: 'Canva',
    category: 'design',
    iconName: 'LayoutGrid',
    bgColor: 'bg-[#181030]',
    textColor: 'text-[#00c4cc]',
    glowColor: 'shadow-[0_0_15px_rgba(0,196,204,0.4)]'
  }
];

export const videoEditingRates: VideoEditingPrice[] = [
  {
    id: 'new_video_edit',
    title: 'NEW VIDEO EDITING',
    description: 'Complete video assembly, source sync, dynamic cuts, creative direction, and grading starting from scratch.',
    price: 1499
  },
  {
    id: 'basic_edit',
    title: 'VIDEO EDITING',
    description: 'You provide the pre-compiled video or raw footage, and we optimize it with cuts, zooms, sound design, and structure.',
    price: 800
  },
  {
    id: 'theme_design',
    title: 'VIDEO THEME DESIGN',
    description: 'Custom aesthetic template and grading design. We change target colors, fonts, asset behaviors, and detailing templates.',
    price: 599
  },
  {
    id: 'resize_design',
    title: 'RESIZING VIDEO DESIGN',
    description: 'Adapt existing high-effort video models, layouts, or sequences for strict multi-platform sizes (9:16, 1:1, 16:9).',
    price: 99
  },
  {
    id: 'extra_revision',
    title: 'EXTRA REVISION',
    description: 'Charged per additional feedback loop after standard review provisions have been exhausted.',
    price: 49
  }
];

export const smmPackages: SmmPackage[] = [
  {
    id: 'smm_1month',
    title: '1 Month S.M.M',
    price: '₹5,500',
    period: 'Single Month',
    features: [
      'Personal Content Calendar & Curation',
      'Up to 15 High-Energy Video Clip Adjustments',
      'Direct Hook Analysis & Layout Optimizations',
      'Growth Strategy Audits (Twice per Month)',
      'Community Management Assistant'
    ]
  },
  {
    id: 'smm_1year',
    title: '1 Year S.M.M',
    price: '₹60,000',
    period: 'Annual Partnership',
    features: [
      'Unlimited Video Strategy Consultations',
      'Daily Performance Tracking & Dashboard Audits',
      'Year Round Content Playbook Adjustments',
      'Exclusive AMV Style Transitions Customized for Your Brand',
      'Dedicated Social Account Manager Support',
      'Pre-scheduled Weekly Deliverables Layout'
    ]
  },
  {
    id: 'smm_1time',
    title: '1 Time S.M.M Boost',
    price: '₹800',
    period: 'Single Campaign',
    features: [
      'Viral Hook & Outline Formulation for 1 Hero Video',
      'Profile Bio Rewrite & Aesthetic Feed Mapping',
      'Growth Opportunities Audit Summary (PDF Document)',
      'Exclusive Video Template Styling Recommendation'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Pratik Khanesa',
    company: 'Lead Creative, Nexus Guild',
    quote: 'Magma Editor has completely changed how I collaborate on artwork remotely. The real-time features are smooth and intuitive, making team projects feel effortless. Huge thanks to the team for building such a powerful and accessible tool!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Divyesh Lakkad',
    company: 'Director, Pixel Stream Studios',
    quote: 'Magma Editor makes digital collaboration feel seamless and fun. The intuitive interface and real-time sync have boosted my productivity. It\'s my go-to platform for creative teamwork!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Ketan Shah',
    company: 'Founder, Apex Illustrations',
    quote: 'Magma has redefined the way I approach remote illustration work. Its real-time collaboration and pro-level tools are unmatched. Truly a game-changer for digital artists everywhere!',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-neonpulse',
    title: 'NeonPulse Esports Rebranding & AMV',
    client: 'NeonPulse Esports',
    category: 'Brand Rebranding & AMV',
    tagline: 'Driving 4.2M views via custom synched AMV anime rosters.',
    challenge: 'NeonPulse wanted to move away from legacy flat designs to high-fidelity electric gaming assets and needed a spectacular summer team reveal trailer that matched their lightning pacing.',
    solution: 'Designed an ultimate glowing brand logo sheet, followed by a meticulously timed AMV reveal trailer utilizing state-of-the-art Premiere Pro audio alignment and keyframe sound alerts.',
    results: [
      { metric: '4.2M+', label: 'Organic Trailer Views' },
      { metric: '90K+', label: 'New TikTok Roster Followers' },
      { metric: '+280%', label: 'Sponsor Engagement Rate' }
    ],
    deliverables: ['High-Fidelity Rebrand Logo Guide', 'Custom Theme Design (Red/Neon Glowing)', '60s AMV Roster Reveal Video', 'TikTok Optimized Clips'],
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'case-zenith',
    title: 'Zenith Tech: 1-Month Premium SMM Campaign',
    client: 'Zenith Wearables',
    category: 'Social Media Marketing',
    tagline: 'Injecting high energy cyber punk content to boost hardware pre-orders.',
    challenge: 'Zenith was launching their gaming smartwatch with flat aesthetic responses on Instagram. They desperately needed short hook-based content to spark audience sharing behavior.',
    solution: 'Engineered a highly aesthetic 30-day consistent feed mapping, producing and publishing 15 fast-paced showcase reels with 3D elements and Alight Motion animations.',
    results: [
      { metric: '48,000 Rs', label: 'Direct Funnel Sales Inflow' },
      { metric: '450K+', label: 'Video Shared Counters' },
      { metric: '2,400%', label: 'Reach Acceleration' }
    ],
    deliverables: ['Consistency Content Calendar', '15 Dynamic Promotion Reels', 'Custom Transition Template', 'Analytics Audits Summary'],
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'case-cryptic',
    title: 'Cryptic Creator Network Logo & SMM Playbook',
    client: 'Cryptic AMV & GMV Syndicate',
    category: 'Logo Designing & Strategy',
    tagline: 'Providing a fierce emblem and group rules for automated networking.',
    challenge: 'A collective of 40 individual anime creators needed a unifying skull/helmet badge and a centralized method to exchange client leads under a single flagship organization.',
    solution: 'Designed the legendary Magma Helmet Skull logo using precise vector curves in Figma and curated a 1-year SMM group networking playbook.',
    results: [
      { metric: '40+', label: 'Active Roster Members' },
      { metric: '₹1.2M', label: 'Collective Roster Earnings' },
      { metric: '100%', label: 'Vector Asset Scalability' }
    ],
    deliverables: ['Vector Skull Emblem Config', 'Watermark & Subtitle Templates', 'SMM Collective Roadmap Guideline'],
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=600&auto=format&fit=crop'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p-neon-logo',
    title: 'Neon Skull Core Esports Logo design',
    category: 'graphic_design',
    client: 'Neon Esports Syndicate',
    thumbnail: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=500&auto=format&fit=crop',
    description: 'A stylized vector skull wearing a futuristic studded helmet with headphones and surrounded by red flames. Optimized for team jerseys and social avatars.',
    tags: ['Logo Design', 'Figma', 'Vector Art', 'Gaming Branding']
  },
  {
    id: 'p-amv-perfect',
    title: 'Perfect Sync AMV Trailer (Cyber-Style) ',
    category: 'video_editing',
    client: 'Chrono Channel',
    thumbnail: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=500&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Mock preview setup
    description: 'Seamless hard-hitting transitions synced to high-tempo basslines. Created custom After Effects zoom expressions and custom assets.',
    tags: ['Video Editing', 'After Effects', 'AMV Sync', 'Color Grading']
  },
  {
    id: 'p-smm-reel',
    title: 'TikTok Viral Hook & Video Sequence',
    category: 'smm',
    client: 'PulseGadgets',
    thumbnail: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop',
    description: 'Calculated visual sequences that hook the user in 1.4 seconds. Features high contrast kinetic text overlaid with Alight Motion motion graphics.',
    tags: ['SMM Strategy', 'Wondershare Filmora', 'Short Form', 'Audience Hook']
  },
  {
    id: 'p-wolf-gfx',
    title: 'Magma Wolf Streaming Overlay Suite',
    category: 'graphic_design',
    client: 'Rox Calvin Network',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500&auto=format&fit=crop',
    description: 'An expansive pack of streaming layouts, offline screens, alert tags, and animated banners designed with precise red highlights.',
    tags: ['Header Graphic', 'Canva', 'Overlays', 'Brand Identity']
  },
  {
    id: 'p-amv-shutter',
    title: 'Shutter Effect Perfect Sync Video Montage',
    category: 'video_editing',
    client: 'GamerRoster',
    thumbnail: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=500&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Featuring dynamic frame rate manipulations, chromatic aberration overlays, and multi-track audio mastering.',
    tags: ['Video Editing', 'Premiere Pro', 'Audio Alignment', 'Sound Design']
  },
  {
    id: 'p-smm-pack',
    title: 'YouTube Feed Identity & 3-Video Outline Playbook',
    category: 'smm',
    client: 'Fierce Gaming LLC',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500&auto=format&fit=crop',
    description: 'Strategic restructuring of custom thumbnails, standard playbooks for description SEO keywords, and dynamic comment prompts.',
    tags: ['SMM Audit', 'Growth Strategy', 'Profile Aesthetics', 'SEO']
  }
];

export const termsAndConditions = [
  {
    id: 't-revisions',
    title: 'Video & Design Changes Limit',
    detail: 'Any video or design will be changed only 3 times. If there are more than 3 requested modifications, additional actions will be billed separately using our Extra Revision rates.'
  },
  {
    id: 't-payments',
    title: 'Secure Payment Milestones',
    detail: 'Our standard payment structure requires a 50% advance deposit to initiate creative tasks. Complete high-resolution videos, vectors, or master design files will be compiled and released immediately following final balance payment clearance.'
  },
  {
    id: 't-group',
    title: 'Joining Creator Group Networking',
    detail: 'To request admission into the automated Magma Editor creator network circle, please send an application summary and portfolio links to our official inbox. We evaluate submissions bi-weekly.'
  }
];
